import { PlayCircle, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export function BrandVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-[#0b3027]">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">About Us</span>
            <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">The Art of Finishing Well</h2>
            
            <div className="space-y-4 text-body-lg text-on-surface-variant font-sans leading-relaxed mb-10">
              <p>
                At Paansutraa, we believe every memorable meal deserves an equally memorable ending.
              </p>
              <p>
                Inspired by India's rich paan heritage and elevated through modern craftsmanship, premium ingredients, and luxury presentation, we have reimagined paan as a sophisticated after-meal indulgence.
              </p>
              <p>
                Whether served in a fine dining restaurant, gifted at a wedding, or presented at a corporate event, Paansutraa creates a lasting impression.
              </p>
            </div>
            
            <Link 
              to="/about"
              className="inline-block border border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium shadow-sm"
            >
              Read More
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div 
              className="relative aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer border border-secondary/20 bg-black shadow-xl"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover transition-transform duration-700"
                src="https://res.cloudinary.com/dm3scoj2q/video/upload/v1781200112/Cinematic_luxury_transformatio_cruepk.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />
              <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center pointer-events-none transition-colors duration-300">
                {!isPlaying && (
                  <PlayCircle className="text-secondary w-20 h-20 mb-4 transition-transform scale-100 opacity-90 drop-shadow-lg" strokeWidth={1} />
                )}
              </div>
              
              <button 
                onClick={toggleMute}
                className="absolute bottom-4 right-4 md:bottom-6 md:right-6 p-3 bg-black/40 hover:bg-black/70 rounded-full text-secondary backdrop-blur-md transition-all duration-300 z-10"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
