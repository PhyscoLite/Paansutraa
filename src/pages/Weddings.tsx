import { useEffect } from 'react';
import { Gift, Sparkles, Crown, Palette, Box, PenTool, CheckCircle2, Clock, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SocialProof } from '../components/SocialProof';
import { SEO } from '../components/SEO';

export function Weddings() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <SEO 
        title="Luxury Wedding Paan Setup | Artisanal Counters & Favor Boxes"
        description="Make your wedding unforgettable with Paansutraa's live artisanal paan counters, bespoke favor boxes, and signature 24k Gold Paan experience."
        canonical="/weddings"
      />
      {/* SECTION 1 — Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-50" 
            alt="Luxury Wedding Setup" 
            src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-5 md:px-margin-desktop max-w-container-max mx-auto w-full pt-20">
          <div className="max-w-3xl">
            <span className="text-label-lg uppercase tracking-widest text-[#F5F5DC] mb-4 block">Paansutraa for Weddings &amp; Celebrations</span>
            <h1 className="text-[28px] md:text-[48px] font-bold text-secondary font-serif mb-6 drop-shadow-md">
              They'll Forget the Menu. They'll Remember the Finish.
            </h1>
            <p className="text-body-lg text-[#F5F5DC]/90 mb-10 max-w-2xl font-sans tracking-wide drop-shadow-md">
              Long after the lights dim and the last guest leaves, one moment lingers — the regal, artisanal paan placed in their hands as a final blessing. Paansutraa transforms your wedding's after-meal ritual into a memory your guests carry home, and a story they tell for years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link 
                to="/order"
                className="bg-secondary text-on-secondary w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/90 transition-colors shadow-lg text-center"
              >
                Plan My Wedding Experience
              </Link>
              <a 
                href="#whatsapp"
                className="border border-secondary text-secondary bg-black/30 backdrop-blur-sm w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/10 transition-colors shadow-lg text-center"
              >
                Request a Tasting Box
              </a>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center gap-4 text-xs md:text-sm text-[#F5F5DC]/80 font-medium tracking-wide">
              <span>Bespoke Favor Boxes</span>
              <span className="w-1 h-1 rounded-full bg-secondary"></span>
              <span>Live Artisanal Counters</span>
              <span className="w-1 h-1 rounded-full bg-secondary"></span>
              <span>24k Gold Paan</span>
              <span className="w-1 h-1 rounded-full bg-secondary hidden sm:inline-block"></span>
              <span className="hidden sm:inline-block">Pan-India Delivery</span>
              <span className="w-1 h-1 rounded-full bg-secondary hidden sm:inline-block"></span>
              <span className="hidden sm:inline-block">FSSAI Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Emotional Hook */}
      <section className="py-20 md:py-32 bg-background border-b border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-3xl mx-auto text-center">
          <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">The Royal Ritual</span>
          <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-8">
            A Wedding Is a Thousand Moments. This Is the One They'll Talk About.
          </h2>
          <div className="space-y-6 text-body-lg text-on-surface-variant font-sans leading-relaxed">
            <p>
              You've planned the décor, the cuisine, the lighting, the entrance. But the moment a guest tastes a Paansutraa paan — wrapped in gold, presented like a jewel — something shifts. It's the pause after the feast. The tradition their grandparents knew. The unexpected touch of grandeur that says this family does things differently.
            </p>
            <p>
              This isn't a mouth freshener. It's the closing note of your celebration — the detail that turns a beautiful wedding into an unforgettable one.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — What We Offer (the formats) */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">Three Ways to Enchant Your Guests</span>
            <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">From Intimate Gatherings to Grand Banquets</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card border border-secondary/20 p-8 rounded-xl hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1 space-y-6 flex flex-col h-full bg-background">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                <Gift className="w-7 h-7" />
              </div>
              <h3 className="text-headline-sm text-secondary font-serif">Bespoke Favor Boxes</h3>
              <p className="text-on-surface-variant font-sans leading-relaxed flex-1">
                Handcrafted paan, sealed fresh, presented in luxury boxes designed around your wedding. Personalized with names, dates, and motifs — a takeaway gift that doubles as a keepsake.
              </p>
              <div className="pt-4 border-t border-secondary/10 text-sm text-secondary/80 italic font-serif">
                Perfect for: return gifts, welcome hampers, room drops.
              </div>
            </div>

            <div className="glass-card border border-secondary/20 p-8 rounded-xl hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1 space-y-6 flex flex-col h-full bg-background">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-headline-sm text-secondary font-serif">Live Artisanal Paan Counters</h3>
              <p className="text-on-surface-variant font-sans leading-relaxed flex-1">
                A master artisan crafting paan live at your venue — theatre, aroma, and ceremony in one. The counter every guest gravitates toward, phone in hand.
              </p>
              <div className="pt-4 border-t border-secondary/10 text-sm text-secondary/80 italic font-serif">
                Perfect for: receptions, sangeet, cocktail evenings.
              </div>
            </div>

            <div className="glass-card border border-secondary/20 p-8 rounded-xl hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1 space-y-6 flex flex-col h-full bg-background">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                <Crown className="w-7 h-7" />
              </div>
              <h3 className="text-headline-sm text-secondary font-serif">The Gold Collection</h3>
              <p className="text-on-surface-variant font-sans leading-relaxed flex-1">
                24k edible gold dust and Kashmiri saffron, presented as the ultimate after-meal indulgence. Reserved for couples who want nothing short of regal.
              </p>
              <div className="pt-4 border-t border-secondary/10 text-sm text-secondary/80 italic font-serif">
                Perfect for: head-table service, VIP guests, grand finales.
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/order" className="inline-block border border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium">
              Design My Setup &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — The Packaging Story */}
      <section className="py-20 md:py-32 bg-background border-y border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden border border-secondary/20 shadow-xl bg-surface-container relative">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
                  alt="Luxury Wedding Packaging" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">Packaging as Beautiful as the Moment</span>
              <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">Every Box Is Designed to Be Opened Slowly</h2>
              <p className="text-body-lg text-on-surface-variant mb-10 font-sans leading-relaxed">
                We believe a gift is felt before it's tasted. That's why every Paansutraa wedding box is a small ceremony of its own — weighty, tactile, finished in royal purples and gold leaf, and personalized to your celebration.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex gap-4">
                  <Palette className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-label-lg font-serif text-secondary mb-2">Bespoke Design</h4>
                    <p className="text-body-sm text-on-surface-variant">Your names, your date, your wedding's color story, embossed and foiled to perfection.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Box className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-label-lg font-serif text-secondary mb-2">Premium Materials</h4>
                    <p className="text-body-sm text-on-surface-variant">Rigid luxury boxes, satin finishes, magnetic closures — packaging guests keep, not discard.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <PenTool className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-label-lg font-serif text-secondary mb-2">Personalized Touch</h4>
                    <p className="text-body-sm text-on-surface-variant">A handwritten-style note, a monogram, a Vastu-aligned symbol of prosperity for the couple.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-label-lg font-serif text-secondary mb-2">Freshness Sealed In</h4>
                    <p className="text-body-sm text-on-surface-variant">Beautiful and functional: every paan arrives as fresh as the moment it was crafted.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/order" className="inline-block text-secondary hover:text-[#D4B97F] text-label-md uppercase tracking-widest transition-colors font-medium border-b border-transparent hover:border-secondary pb-1">
                See Packaging Options &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — The Meaning Layer */}
      <section className="py-20 md:py-32 bg-surface-container-low text-center">
        <div className="px-5 md:px-margin-desktop max-w-3xl mx-auto">
          <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">More Than Tradition</span>
          <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-8">A Blessing, Wrapped in Gold</h2>
          <p className="text-body-lg text-on-surface-variant font-sans leading-relaxed mb-12">
            In Indian culture, paan has always marked auspicious beginnings — offered at weddings as a symbol of love, union, and prosperity. Paansutraa honors that heritage and elevates it: age-old recipes, the finest natural ingredients, no artificial preservatives — crafted as a blessing fit for the most important day of your life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm md:text-base text-secondary font-medium tracking-widest uppercase border-y border-secondary/20 py-8">
            <span>Growth</span>
            <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
            <span>Harmony</span>
            <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
            <span>Prosperity</span>
            <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
            <span>Abundance</span>
          </div>
          <p className="mt-8 text-secondary/80 italic font-serif">Blessings woven into every leaf.</p>
        </div>
      </section>

      {/* SECTION 6 — How It Works */}
      <section className="py-20 md:py-32 bg-background border-y border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">Effortless From Inquiry to "I Do"</span>
            <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">We Handle the Craft. You Enjoy the Compliments.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">1</div>
              <h3 className="text-headline-sm text-secondary font-serif mb-4 relative z-10">Share Your Vision</h3>
              <p className="text-on-surface-variant font-sans relative z-10">Tell us your date, guest count, theme, and city.</p>
            </div>
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">2</div>
              <h3 className="text-headline-sm text-secondary font-serif mb-4 relative z-10">Taste & Choose</h3>
              <p className="text-on-surface-variant font-sans relative z-10">Sample our blends and explore packaging in a curated tasting box.</p>
            </div>
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">3</div>
              <h3 className="text-headline-sm text-secondary font-serif mb-4 relative z-10">We Design Your Setup</h3>
              <p className="text-on-surface-variant font-sans relative z-10">Bespoke boxes, live counters, or both — built around your wedding.</p>
            </div>
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">4</div>
              <h3 className="text-headline-sm text-secondary font-serif mb-4 relative z-10">Delivered Fresh, On Time</h3>
              <p className="text-on-surface-variant font-sans relative z-10">Reliable wedding-day logistics so everything arrives flawless. You're free to simply celebrate.</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/order" className="inline-block bg-secondary text-on-secondary hover:bg-secondary/90 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium shadow-lg">
              Start Planning Now &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Social Proof */}
      <SocialProof 
        subtitle="Trusted for Life's Biggest Moments" 
        title="Loved by Couples & Celebrated by Planners"
        reviews={[
          {
            text: "Our guests are still talking about the gold paan counter. It was the most photographed corner of our reception. The presentation was simply breathtaking.",
            author: "Aakash & Neha",
            role: "Wedding Clients",
            company: "Bangalore Wedding",
          },
          {
            text: "Working with Paansutraa was the easiest part of our wedding planning. The bespoke favor boxes matched our invitations perfectly and our families loved the taste.",
            author: "Rohan & Priya",
            role: "Wedding Clients",
            company: "Mumbai Wedding",
          },
          {
            text: "As a planner, finding reliable, luxury vendors is rare. Paansutraa's professionalism and attention to detail make them my go-to recommendation for luxury celebrations.",
            author: "Meera Kapoor",
            role: "Founder",
            company: "Elegance Weddings",
          }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm md:text-base text-secondary font-medium tracking-widest uppercase pt-12">
          <span>1,00,000+ Orders Fulfilled</span>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <span>500+ Partners</span>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <span>FSSAI Certified</span>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <span>Pan-India Delivery</span>
        </div>
      </SocialProof>

      {/* SECTION 8 — Final CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-surface-container">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto relative z-10 text-center">
          <h2 className="text-display-sm md:text-display-md text-secondary font-serif mb-6 drop-shadow-md">
            Make the Last Moment the One They Never Forget.
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 font-sans">
            Your wedding deserves a finish as extraordinary as the love it celebrates. Request your complimentary tasting box and let's design a moment your guests will never stop talking about.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link 
              to="/order"
              className="bg-secondary text-on-secondary w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/90 transition-colors shadow-lg text-center"
            >
              Request My Wedding Tasting Box
            </Link>
            <a 
              href="#whatsapp"
              className="border border-secondary text-secondary bg-background/50 backdrop-blur-sm w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/10 transition-colors shadow-lg text-center"
            >
              Chat With Our Wedding Team
            </a>
          </div>

          <div className="text-sm text-on-surface-variant/80 font-medium tracking-wide flex items-center justify-center gap-2 flex-wrap">
            <CheckCircle2 className="w-4 h-4 text-secondary" /> Complimentary tasting
            <span className="px-2">&middot;</span>
            <CheckCircle2 className="w-4 h-4 text-secondary" /> Bespoke to your day
            <span className="px-2">&middot;</span>
            <CheckCircle2 className="w-4 h-4 text-secondary" /> Response within 24 hours
          </div>
        </div>
      </section>

    </div>
  );
}
