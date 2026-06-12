import { PlayCircle, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

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
    <section className="py-12 md:py-24 bg-surface-container-lowest">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div 
          className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer border border-secondary/20 bg-black"
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
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center pointer-events-none transition-colors duration-300">
            {!isPlaying && (
              <PlayCircle className="text-secondary w-20 h-20 mb-4 transition-transform scale-100 opacity-90 drop-shadow-lg" strokeWidth={1} />
            )}
            <h2 className="text-headline-md text-secondary drop-shadow-lg font-serif">The After-Meal Luxury</h2>
          </div>
          
          <button 
            onClick={toggleMute}
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 p-3 bg-black/40 hover:bg-black/70 rounded-full text-secondary backdrop-blur-md transition-all duration-300 z-10"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
      </div>
    </section>
  );
}
