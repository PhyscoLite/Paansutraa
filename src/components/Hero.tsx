import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const VIDEO_URL = "https://res.cloudinary.com/dm3scoj2q/video/upload/v1781200112/Cinematic_luxury_transformatio_cruepk.mp4";

function getPrioritySequence(total: number) {
  const seq = [0, total - 1];
  const queue = [{start: 0, end: total - 1}];
  while(queue.length > 0) {
    const {start, end} = queue.shift()!;
    if (end - start > 1) {
      const mid = Math.floor((start + end) / 2);
      if (!seq.includes(mid)) seq.push(mid);
      queue.push({start, end: mid});
      queue.push({start: mid, end});
    }
  }
  return seq;
}

export function Hero() {
  const [loadingParams, setLoadingParams] = useState({ progress: 0, loading: true });
  const [fallback, setFallback] = useState(false);
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const fallbackVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setFallback(true);
      setLoadingParams({ progress: 1, loading: false });
      return;
    }

    let isCancelled = false;
    let loadedCount = 0;
    framesRef.current = new Array(100).fill(null);

    const loadFrames = (duration: number) => {
      const sequence = getPrioritySequence(100);
      const width = window.innerWidth < 768 ? 960 : 1280;
      let sequenceIndex = 0;

      const loadNext = () => {
        if (isCancelled || sequenceIndex >= sequence.length) return;
        const index = sequence[sequenceIndex++];
        
        const seconds = ((index / 99) * duration).toFixed(3);
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = `https://res.cloudinary.com/dm3scoj2q/video/upload/so_${seconds},w_${width},q_auto:good,f_auto/v1781200112/Cinematic_luxury_transformatio_cruepk.jpg`;
        
        const handleDone = () => {
          if (isCancelled) return;
          loadedCount++;
          setLoadingParams(prev => {
            const newProgress = loadedCount / 100;
            const newLoading = loadedCount < 25;
            if (prev.progress === newProgress && prev.loading === newLoading) return prev;
            return { progress: newProgress, loading: prev.loading ? newLoading : false };
          });
          loadNext();
        };

        img.onload = () => {
          if (!isCancelled) framesRef.current[index] = img;
          handleDone();
        };
        img.onerror = () => {
          handleDone();
        };
      };

      for(let i=0; i<12; i++) {
         loadNext();
      }
    };

    const loadVideoMetadata = () => {
      const video = document.createElement('video');
      video.preload = "metadata";
      video.src = VIDEO_URL;
      
      video.addEventListener('loadedmetadata', () => {
         if (isCancelled) return;
         const duration = video.duration || 10;
         loadFrames(duration);
      });
      video.addEventListener('error', () => {
         if (isCancelled) return;
         setFallback(true);
         setLoadingParams({ progress: 1, loading: false });
      });
    };
    
    loadVideoMetadata();

    return () => {
      isCancelled = true;
      framesRef.current.forEach(img => {
         if (img) img.src = ""; 
      });
      framesRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (loadingParams.loading) return;

    const track = trackRef.current;
    const fbVideo = fallbackVideoRef.current;
    
    let currentIndex = 0;
    let targetIndex = 0;
    let animationFrameId: number;
    let lastDrawnIndex = -1;
    let canvasWidth = 0;
    let canvasHeight = 0;
    const ctx = canvasRef.current?.getContext('2d');

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvasWidth = window.innerWidth * Math.min(window.devicePixelRatio, 2);
      canvasHeight = window.innerHeight * Math.min(window.devicePixelRatio, 2);
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      lastDrawnIndex = -1;
    };
    
    if (!fallback && canvasRef.current) {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    const findNearestFrame = (index: number) => {
      if (framesRef.current[index]) return framesRef.current[index];
      let left = index - 1;
      let right = index + 1;
      while (left >= 0 || right < framesRef.current.length) {
        if (right < framesRef.current.length && framesRef.current[right]) return framesRef.current[right];
        if (left >= 0 && framesRef.current[left]) return framesRef.current[left];
        left--;
        right++;
      }
      return null;
    };

    const drawFrame = (index: number) => {
      if (!fallback && ctx) {
        const frame = findNearestFrame(index);
        if (!frame) return;
        
        const cw = canvasWidth;
        const ch = canvasHeight;
        const fw = frame.naturalWidth || frame.width;
        const fh = frame.naturalHeight || frame.height;
        if (!fw || !fh) return;

        const canvasRatio = cw / ch;
        const frameRatio = fw / fh;

        let drawW, drawH, drawX, drawY;

        if (canvasRatio > frameRatio) {
          drawW = cw;
          drawH = cw / frameRatio;
          drawX = 0;
          drawY = (ch - drawH) / 2;
        } else {
          drawH = ch;
          drawW = ch * frameRatio;
          drawY = 0;
          drawX = (cw - drawW) / 2;
        }

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(frame, drawX, drawY, drawW, drawH);
      }
    };

    let p = 0;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const renderLoop = () => {
      if (!track) return;
      const parentTop = track.getBoundingClientRect().top;
      const scrollHeight = track.offsetHeight - window.innerHeight;
      
      if (mediaQuery.matches) {
          p = 1;
      } else {
          p = Math.max(0, Math.min(1, -parentTop / scrollHeight));
      }

      const totalTargetFrames = fallback ? 100 : framesRef.current.length - 1;
      targetIndex = p * (totalTargetFrames > 0 ? totalTargetFrames : 0);

      currentIndex += (targetIndex - currentIndex) * 0.12;
      
      if (fallback) {
          if (fbVideo && !Number.isNaN(fbVideo.duration)) {
             fbVideo.currentTime = p * (fbVideo.duration || 0);
          }
      } else {
          const roundedIndex = Math.round(currentIndex);
          if (roundedIndex !== lastDrawnIndex && framesRef.current.length > 0) {
            drawFrame(roundedIndex);
            lastDrawnIndex = roundedIndex;
          }
      }

      if (contentRef.current) {
        if (p > 0.85) {
          contentRef.current.dataset.visible = "true";
        } else if (p < 0.80) {
          contentRef.current.dataset.visible = "false";
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [loadingParams.loading, fallback]);

  const trustItems = [
    { value: "10+ Years", label: "In Business" },
    { value: "500+", label: "Active Partners" },
    { value: "1,00,000+", label: "Orders Fulfilled" },
    { value: "All India", label: "Pan India Supply" },
    { value: "Certified", label: "FSSAI Certified" },
  ];

  return (
    <>
      <style>{`
        .hero-content .hero-el {
          opacity: 0;
          transform: translateY(24px);
          pointer-events: none;
          transition: opacity 0.9s ease-out, transform 0.9s ease-out;
        }
        .hero-content[data-visible="true"] .hero-el {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .hero-title { transition-delay: 0s; }
        .hero-sub { transition-delay: 120ms; }
        .hero-buttons { transition-delay: 240ms; }
      `}</style>

      {/* Loading Overlay */}
      <div 
        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-700"
        style={{ opacity: loadingParams.loading ? 1 : 0, pointerEvents: loadingParams.loading ? 'all' : 'none' }}
      >
        <div className="w-64 h-1 bg-surface-container rounded overflow-hidden">
          <div 
            className="h-full bg-[#C8A96A] transition-all duration-300" 
            style={{ width: `${loadingParams.progress * 100}%` }} 
          />
        </div>
      </div>

      {/* Scroll Track & Sticky Stage */}
      <section ref={trackRef} className="h-[480vh] w-full relative">
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
          
          <div className="absolute inset-0 w-full h-full z-0">
            {fallback ? (
              <video 
                ref={fallbackVideoRef} 
                className="w-full h-full object-cover" 
                muted playsInline preload="auto"
                src={VIDEO_URL}
              />
            ) : (
              <canvas ref={canvasRef} className="w-full h-full" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-black/40 to-transparent"></div>
          </div>
          
          {/* Hero Content */}
          <div 
            ref={contentRef} 
            data-visible="false"
            className="hero-content relative z-10 px-5 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center text-center mt-auto pb-24 md:pb-32"
          >
             <h1 className="hero-el hero-title text-[28px] md:text-[48px] font-bold font-serif mb-6 text-[#ffc156] drop-shadow-lg">
               A Royal Finish To Every Meal
             </h1>
             <p className="hero-el hero-sub text-body-lg text-[#F5F5DC]/90 mb-10 max-w-2xl font-sans tracking-wide drop-shadow-md">
               Crafted with premium ingredients, Paansutraa redefines the after-meal experience with artisanal sophistication and ancient heritage.
             </p>
             <div className="hero-el hero-buttons flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full px-5">
               <Link to="/order" className="bg-[#C8A96A] text-black w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-label-md uppercase tracking-widest transition-all hover:bg-[#D4B97F] active:scale-95 shadow-lg hidden md:flex items-center justify-center">
                 Order Now
               </Link>
               <Link to="/order" className="bg-[#C8A96A] text-black w-full sm:w-auto px-6 py-4 text-label-lg uppercase tracking-widest transition-all active:scale-95 shadow-lg flex md:hidden items-center justify-center">
                 Order Now
               </Link>

               <Link to="/horeca" className="border-2 border-[#C8A96A] text-[#C8A96A] w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-label-md uppercase tracking-widest transition-all hover:bg-[#C8A96A]/10 active:scale-95 shadow-lg hidden md:flex backdrop-blur-sm items-center justify-center">
                 Become a Hospitality Partner
               </Link>
               <Link to="/horeca" className="border-2 border-[#C8A96A] text-[#C8A96A] w-full sm:w-auto px-6 py-4 text-label-lg uppercase tracking-widest transition-all active:scale-95 shadow-lg flex md:hidden backdrop-blur-sm items-center justify-center">
                 Become a Hospitality Partner
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-surface-container-low border-b border-secondary/20 py-10 md:py-12 relative z-20">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 text-center">
            {trustItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 md:p-6 rounded-xl hover:bg-surface-container transition-all duration-300 cursor-default border border-transparent hover:border-[#C8A96A]/20 hover:shadow-lg hover:shadow-[#C8A96A]/10"
              >
                <div className="text-[#C8A96A] text-2xl md:text-3xl font-serif font-bold mb-2">{item.value}</div>
                <div className="text-on-surface-variant text-xs md:text-sm text-label-md uppercase tracking-widest">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
