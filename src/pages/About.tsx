import { useEffect } from 'react';
import { Leaf, Award, Heart, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="pt-24 min-h-screen selection:bg-secondary/20 selection:text-secondary-dark">
      {/* SECTION 1 — Hero */}
      <section className="relative px-5 md:px-margin-desktop py-20 md:py-32 max-w-container-max mx-auto border-b border-secondary/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">Our Story</span>
            <h1 className="text-display-md md:text-display-lg text-secondary font-serif mb-6 leading-[1.1]">
              A Tradition, Reborn.
            </h1>
            <p className="text-headline-sm md:text-headline-md text-on-surface font-serif font-medium mb-6">
              I'm Suresh Chand Kashyap.
            </p>
            <p className="text-body-lg text-on-surface-variant font-sans leading-relaxed">
              Paansutraa began with a simple question — why had we forgotten how beautiful the last moment of a meal could be?
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-tl-full rounded-tr-full overflow-hidden border-4 border-secondary/20 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent mix-blend-overlay pointer-events-none z-10"></div>
              <img 
                src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198533/luxury-paan-presentation-with-gold-leaf-and-rose-petals_b7h7lz.webp" 
                alt="Founder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Origin (text left · image right) */}
      <section className="py-20 md:py-32 bg-surface-container-low border-b border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">Where It Began</h2>
              <div className="space-y-6 text-body-lg text-on-surface-variant font-sans leading-relaxed">
                <p>
                  I grew up watching paan being made like an art — each leaf chosen with care, each spice measured by instinct, passed down through quiet whispers from one master to the next.
                </p>
                <p>
                  Somewhere along the way, that artistry was lost to shortcuts and synthetic flavors. I couldn't accept that. So I set out to bring the grandeur back — to treat paan not as an afterthought, but as the crowning finish it was always meant to be.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-secondary/20 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
                  alt="Heritage" 
                  className="w-full h-full object-cover filter sepia-[0.3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — The Philosophy (image left · text right) */}
      <section className="py-20 md:py-32 bg-background border-b border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden border border-secondary/20 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781458574/paan-ingredients_hlnu3x.webp" 
                  alt="Premium ingredients" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">Every Leaf, a Canvas</h2>
              <p className="text-body-lg text-on-surface-variant font-sans mb-8 leading-relaxed">
                At Paansutraa, we treat every betel leaf as a canvas and every spice as a stroke of flavor. No artificial preservatives. No compromises. Only the finest natural essences, sourced from the very soil where these traditions were born.
              </p>
              <ul className="space-y-4 text-on-surface font-sans">
                {[
                  "Age-old recipes, honored faithfully",
                  "Contemporary manufacturing standards",
                  "FSSAI certified & hygienically crafted",
                  "Artisanal purity in every blend"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — The Vision (text left · image right) */}
      <section className="py-20 md:py-32 bg-surface-container-low border-b border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">Modern Heritage</h2>
              <div className="space-y-6 text-body-lg text-on-surface-variant font-sans leading-relaxed">
                <p>
                  Paansutraa stands as a bridge — between the opulent past and the discerning present. We don't just sell paan. We offer a sensory pause in a fast-paced world.
                </p>
                <p>
                  My dream is simple: that one day, no celebration, no fine meal, no royal moment feels complete without that final, golden touch.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-secondary/20 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
                  alt="Luxury Presentation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — The Values Strip (full-width band) */}
      <section className="py-20 md:py-32 bg-primary-container border-b border-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center text-on-surface">
            <div>
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 shadow-sm border border-secondary/20">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-headline-sm font-serif text-secondary mb-3">Heritage</h3>
              <p className="text-on-surface-variant font-sans text-body-md">Honoring the masters who came before us.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 shadow-sm border border-secondary/20">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-headline-sm font-serif text-secondary mb-3">Purity</h3>
              <p className="text-on-surface-variant font-sans text-body-md">Only natural, only the finest.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 shadow-sm border border-secondary/20">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-headline-sm font-serif text-secondary mb-3">Craft</h3>
              <p className="text-on-surface-variant font-sans text-body-md">Made by hand, with intention.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 shadow-sm border border-secondary/20">
                <Crown className="w-8 h-8" />
              </div>
              <h3 className="text-headline-sm font-serif text-secondary mb-3">Grandeur</h3>
              <p className="text-on-surface-variant font-sans text-body-md">A finish worthy of royalty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Founder's Note (image left · text right) */}
      <section className="py-20 md:py-32 bg-background">
        <div className="px-5 md:px-margin-desktop max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1 lg:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-secondary/20 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198533/luxury-paan-presentation-with-gold-leaf-and-rose-petals_b7h7lz.webp" 
                  alt="Founder Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-8">A Personal Promise</h2>
              <blockquote className="text-headline-sm text-on-surface font-serif italic leading-relaxed mb-8 border-l-4 border-secondary/30 pl-6">
                "When you choose Paansutraa, you're not just choosing a product. You're choosing a piece of my life's work — a promise that tradition, when treated with love, can still feel extraordinary."
              </blockquote>
              <div className="flex flex-col">
                <span className="text-label-lg font-serif text-secondary text-xl">Suresh Chand Kashyap</span>
                <span className="text-on-surface-variant text-label-md uppercase tracking-widest mt-1">Founder, Paansutraa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Final CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-surface-container">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="px-5 md:px-margin-desktop max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-display-sm md:text-display-md text-secondary font-serif mb-6">
            Experience the Difference.
          </h2>
          <p className="text-headline-sm text-on-surface-variant font-serif mb-10 leading-relaxed max-w-2xl mx-auto">
            Taste the heritage we've spent years perfecting.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/order" className="bg-secondary text-on-secondary px-8 py-4 text-label-md uppercase tracking-widest hover:bg-secondary/90 transition-colors w-full sm:w-auto shadow-lg shadow-secondary/20">
              Request a Tasting Kit
            </Link>
            <a href="#" className="border border-secondary text-secondary px-8 py-4 text-label-md uppercase tracking-widest hover:bg-secondary/10 transition-colors w-full sm:w-auto bg-background/50 backdrop-blur-sm">
              Chat With Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
