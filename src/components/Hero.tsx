import { useEffect, useRef } from "react";

export function Hero() {
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgRef}
          className="w-full h-[130%] object-cover brightness-50 object-center" 
          alt="A cinematic, high-end luxury restaurant scene" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxxfOWenPxY-pJdiBsRztA7zzNfDqNJVfF4kN9hsx0dCZ5MFZHSv-N2hiBJ3L3_2oYxq_237YUdedZHC9gK9NzrrYU4OnderTfnVNB_Z_0mkljNgcVln3aCjT3pYqTxlzYHsr0HEx5EZTPP3nbHPjIxA3PqEfsZhwIdjd8h2Os7dIPn90PnY5AX_oZgiOmqdNf3EIjZAEkQVz-Fzk7WgwIygmdHE-PZmmma6fZIhTt6zrHEFOM-DIEgCw7X5oupJgnFXqrljUW8dz5" />
      </div>
      <div className="relative z-10 px-5 md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="text-headline-lg text-secondary mb-6">A Royal Finish To Every Meal</h1>
          <p className="text-body-lg text-on-surface-variant mb-10">
            Crafted with premium ingredients, Paansutraa redefines the after-meal experience with artisanal sophistication and ancient heritage.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button className="bg-secondary text-on-secondary w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-label-md uppercase tracking-widest transition-all hover:bg-secondary-fixed active:scale-95">
              Order Now
            </button>
            <button className="border border-secondary text-secondary w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-label-md uppercase tracking-widest transition-all hover:bg-secondary/10 active:scale-95">
              Become a Hospitality Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
