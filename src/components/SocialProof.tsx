import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function SocialProof() {
  const reviews = [
    {
      text: "Paansutraa has completely transformed our guest's post-dining experience. The quality is unparalleled.",
      author: "Rahul Sharma",
      role: "F&B Director",
      company: "The Oberoi",
    },
    {
      text: "Finally, a hygienic and premium paan experience that fits our brand's global standards. It's a game-changer.",
      author: "Vikram Singh",
      role: "Managing Director",
      company: "Taj Group",
    },
    {
      text: "The perfect blend of tradition and modernity. Our wedding clients absolutely love the bespoke packaging.",
      author: "Ananya Desai",
      role: "Lead Planner",
      company: "Wedding Design Hub",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-16 md:py-32 bg-surface-container-lowest overflow-hidden">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="text-headline-md text-center text-secondary mb-12 md:mb-20">Trusted by Hospitality Leaders</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-20 p-2 md:p-3 rounded-full bg-background border border-secondary/20 text-secondary hover:bg-secondary hover:text-on-secondary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-20 p-2 md:p-3 rounded-full bg-background border border-secondary/20 text-secondary hover:bg-secondary hover:text-on-secondary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative overflow-hidden min-h-[450px] md:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
              >
                <div className="w-full bg-background border border-secondary/10 p-8 md:p-12 lg:p-16 relative rounded-2xl shadow-sm">
                  <Quote className="w-16 h-16 md:w-32 md:h-32 text-secondary/5 absolute top-4 left-4 md:top-8 md:left-8" />
                  
                  <div className="flex flex-col items-center text-center relative z-10 w-full">
                    <div className="h-16 md:h-20 mb-6 flex items-center justify-center">
                       <div className="text-secondary font-serif text-2xl md:text-3xl font-bold uppercase tracking-widest border-b border-secondary/30 pb-2">
                         {reviews[currentIndex].company}
                       </div>
                    </div>
                    
                    <p className="text-xl md:text-2xl lg:text-3xl font-serif text-on-surface mb-10 leading-relaxed italic max-w-3xl">
                      "{reviews[currentIndex].text}"
                    </p>
                    
                    <div className="space-y-1">
                      <div className="font-bold text-secondary text-lg">{reviews[currentIndex].author}</div>
                      <div className="text-on-surface-variant text-label-md uppercase tracking-wider">{reviews[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-secondary scale-125" : "bg-secondary/20 hover:bg-secondary/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
