import { useEffect } from 'react';
import { Briefcase, Users, Gift, Star, Palette, MessageSquareText, ShieldCheck, Box, Crown, CheckCircle2, Clock, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SocialProof } from '../components/SocialProof';

export function Corporate() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* SECTION 1 — Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-50" 
            alt="Corporate Gifting" 
            src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-5 md:px-margin-desktop max-w-container-max mx-auto w-full pt-20">
          <div className="max-w-3xl">
            <span className="text-label-lg uppercase tracking-widest text-[#F5F5DC] mb-4 block">Corporate Gifting & Pantry</span>
            <h1 className="text-[28px] md:text-[48px] font-bold text-secondary font-serif mb-6 drop-shadow-md">
              Gifts That Say Everything Your Brand Stands For.
            </h1>
            <p className="text-body-lg text-[#F5F5DC]/90 mb-10 max-w-2xl font-sans tracking-wide drop-shadow-md">
              Artisanal luxury paan, custom-branded and delivered at scale — the gift clients and teams actually remember.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link 
                to="/order"
                className="bg-secondary text-on-secondary w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/90 transition-colors shadow-lg text-center"
              >
                Request Corporate Catalog
              </Link>
              <a 
                href="#whatsapp"
                className="border border-secondary text-secondary bg-black/30 backdrop-blur-sm w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/10 transition-colors shadow-lg text-center"
              >
                Talk to Our Team
              </a>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center gap-4 text-xs md:text-sm text-[#F5F5DC]/80 font-medium tracking-wide">
              <span>Custom Branding</span>
              <span className="w-1 h-1 rounded-full bg-secondary"></span>
              <span>Bulk Delivery</span>
              <span className="w-1 h-1 rounded-full bg-secondary"></span>
              <span>FSSAI Certified</span>
              <span className="w-1 h-1 rounded-full bg-secondary hidden sm:inline-block"></span>
              <span className="hidden sm:inline-block">Pan-India</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Hook */}
      <section className="py-20 md:py-32 bg-background border-b border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-3xl mx-auto text-center">
          <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-8">
            Most Corporate Gifts Are Forgotten by Friday.
          </h2>
          <div className="space-y-6 text-body-lg text-on-surface-variant font-sans leading-relaxed">
            <p>
              A branded box of gold-leaf paan isn't. It's the gift that gets opened, photographed, and talked about.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — What We Offer */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">Built for Every Corporate Occasion</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card border border-secondary/20 p-8 rounded-xl hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1 space-y-4 flex flex-col h-full bg-background">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-2">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-headline-sm text-secondary font-serif">Client Gifting</h3>
              <p className="text-on-surface-variant font-sans leading-relaxed flex-1">
                Impress the relationships that matter most.
              </p>
            </div>

            <div className="glass-card border border-secondary/20 p-8 rounded-xl hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1 space-y-4 flex flex-col h-full bg-background">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-2">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-headline-sm text-secondary font-serif">Employee Appreciation</h3>
              <p className="text-on-surface-variant font-sans leading-relaxed flex-1">
                Reward your team with something they'll savor.
              </p>
            </div>

            <div className="glass-card border border-secondary/20 p-8 rounded-xl hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1 space-y-4 flex flex-col h-full bg-background">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-2">
                <Gift className="w-7 h-7" />
              </div>
              <h3 className="text-headline-sm text-secondary font-serif">Festive Hampers</h3>
              <p className="text-on-surface-variant font-sans leading-relaxed flex-1">
                Diwali, year-end & milestones, done in style.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/order" className="inline-block border border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium">
              Explore Gifting Options &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Custom Branding */}
      <section className="py-20 md:py-32 bg-background border-y border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden border border-secondary/20 shadow-xl bg-surface-container relative">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
                  alt="Corporate Custom Branding" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-10">Your Logo. Our Craft. One Unforgettable Box.</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex gap-4">
                  <Palette className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="text-body-md text-on-surface-variant">Co-branded luxury packaging in your colors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MessageSquareText className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="text-body-md text-on-surface-variant">Personalized notes & corporate messaging.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Crown className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="text-body-md text-on-surface-variant">Curated blends — from classic to 24k Gold.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Box className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="text-body-md text-on-surface-variant">Bulk-ready, individually sealed for freshness.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/order" className="inline-block text-secondary hover:text-[#D4B97F] text-label-md uppercase tracking-widest transition-colors font-medium border-b border-transparent hover:border-secondary pb-1">
                See Branding Options &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Why Paansutraa */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-16">Premium Gifting, Zero Hassle.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card border border-secondary/20 p-8 rounded-xl flex flex-col items-center">
               <Star className="w-10 h-10 text-secondary mb-6" />
               <h3 className="text-headline-sm text-secondary font-serif mb-2">Scales effortlessly</h3>
               <p className="text-on-surface-variant font-sans">50 boxes or 5,000, same flawless quality.</p>
            </div>
            <div className="glass-card border border-secondary/20 p-8 rounded-xl flex flex-col items-center">
               <Truck className="w-10 h-10 text-secondary mb-6" />
               <h3 className="text-headline-sm text-secondary font-serif mb-2">On-time delivery</h3>
               <p className="text-on-surface-variant font-sans">Reliable logistics built for corporate timelines.</p>
            </div>
             <div className="glass-card border border-secondary/20 p-8 rounded-xl flex flex-col items-center">
               <Shield className="w-10 h-10 text-secondary mb-6" />
               <h3 className="text-headline-sm text-secondary font-serif mb-2">Audit-ready</h3>
               <p className="text-on-surface-variant font-sans">FSSAI certified, documentation on request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — How It Works */}
      <section className="py-20 md:py-32 bg-background border-y border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">From Brief to Doorstep.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">1</div>
              <h3 className="text-headline-sm text-secondary font-serif relative z-10">Share your brief</h3>
            </div>
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">2</div>
              <h3 className="text-headline-sm text-secondary font-serif relative z-10">Choose blends & branding</h3>
            </div>
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">3</div>
              <h3 className="text-headline-sm text-secondary font-serif relative z-10">Approve a sample</h3>
            </div>
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">4</div>
              <h3 className="text-headline-sm text-secondary font-serif relative z-10">Delivered, on time</h3>
            </div>
          </div>

          <div className="text-center">
            <Link to="/order" className="inline-block bg-secondary text-on-secondary hover:bg-secondary/90 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium shadow-lg">
              Start Your Order &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Proof */}
      <SocialProof 
        title="Trusted by Brands That Value Detail."
        reviews={[
          {
            text: "Our clients still mention the Diwali boxes. Easily our best gift this year.",
            author: "Corporate Client",
            role: "Marketing Director",
            company: "Tech firm",
          }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm md:text-base text-secondary font-medium tracking-widest uppercase pt-12 border-t border-secondary/20 mt-12">
          <span>500+ Partners</span>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <span>1,00,000+ Orders</span>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <span>FSSAI Certified</span>
        </div>
      </SocialProof>

      {/* SECTION 8 — Final CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-surface-container">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto relative z-10 text-center">
          <h2 className="text-display-sm md:text-display-md text-secondary font-serif mb-12 drop-shadow-md">
            Make Your Next Gift the One They Remember.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link 
              to="/order"
              className="bg-secondary text-on-secondary w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/90 transition-colors shadow-lg text-center"
            >
              Request Corporate Catalog
            </Link>
            <a 
              href="#whatsapp"
              className="border border-secondary text-secondary bg-background/50 backdrop-blur-sm w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/10 transition-colors shadow-lg text-center"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="text-sm text-on-surface-variant/80 font-medium tracking-wide flex items-center justify-center gap-2 flex-wrap">
            <CheckCircle2 className="w-4 h-4 text-secondary" /> Custom-branded
            <span className="px-2">&middot;</span>
            <CheckCircle2 className="w-4 h-4 text-secondary" /> Bulk-ready
            <span className="px-2">&middot;</span>
            <CheckCircle2 className="w-4 h-4 text-secondary" /> Reply in 24 hrs
          </div>
        </div>
      </section>

    </div>
  );
}
