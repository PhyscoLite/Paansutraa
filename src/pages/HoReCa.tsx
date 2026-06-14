import { useEffect } from 'react';
import { Building2, Utensils, Coffee, Leaf, ShieldCheck, Truck, BadgeDollarSign, HeartHandshake, CheckCircle2, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SocialProof } from '../components/SocialProof';

const products = [
  {
    id: 1,
    name: "Sada Paan",
    desc: "The classic, authentic taste of tradition without the sweetness.",
    img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199674/traditional-indian-betel-leaf-paan-on-a-brass-plate-over-purple-velvet-fabric_cs0sam.webp",
  },
  {
    id: 2,
    name: "Meetha Paan",
    desc: "A delightful sweet blend of gulkand, mouth fresheners and aromatic spices.",
    img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/traditional-indian-meetha-paan-with-cherry-on-golden-brass-plate-over-purple-velvet-cloth_wz69ys.webp",
  },
  {
    id: 3,
    name: "Gold Paan",
    desc: "Infused with 24k edible gold dust and Kashmiri saffron for a royal experience.",
    img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/luxury-betel-leaf-paan-with-gold-leaf-and-a-cherry-on-a-golden-plate_bavsa4.webp",
  },
  {
    id: 4,
    name: "Dark Chocolate Paan",
    desc: "A rich fusion of premium dark chocolate and traditional paan ingredients.",
    img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/chocolate-dipped-meetha-paan-with-a-cherry-on-a-golden-plate-over-purple-velvet_agv9rt.webp",
  }
];

export function HoReCa() {
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
            alt="Luxury Hospitality Setting" 
            src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-5 md:px-margin-desktop max-w-container-max mx-auto w-full pt-20">
          <div className="max-w-3xl">
            <span className="text-label-lg uppercase tracking-widest text-[#F5F5DC] mb-4 block">For Hotels, Restaurants & Cafés</span>
            <h1 className="text-[28px] md:text-[48px] font-bold text-secondary font-serif mb-6 drop-shadow-md">
              The Last Impression Your Guests Will Remember
            </h1>
            <p className="text-body-lg text-[#F5F5DC]/90 mb-10 max-w-2xl font-sans tracking-wide drop-shadow-md">
              Most dining experiences end the moment the bill arrives. Paansutraa turns that forgotten final moment into a signature ritual — an artisanal, after-meal indulgence that keeps your guests talking long after they've left.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link 
                to="/order"
                className="bg-secondary text-on-secondary w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/90 transition-colors shadow-lg text-center"
              >
                Request a Tasting Kit
              </Link>
              <a 
                href="#whatsapp"
                className="border border-secondary text-secondary bg-black/30 backdrop-blur-sm w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/10 transition-colors shadow-lg text-center"
              >
                Talk to Our Partnership Team
              </a>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center gap-4 text-xs md:text-sm text-[#F5F5DC]/80 font-medium tracking-wide">
              <span>FSSAI Certified</span>
              <span className="w-1 h-1 rounded-full bg-secondary"></span>
              <span>Pan-India Supply</span>
              <span className="w-1 h-1 rounded-full bg-secondary"></span>
              <span>500+ Active Partners</span>
              <span className="w-1 h-1 rounded-full bg-secondary"></span>
              <span>Serving The Oberoi & leading hospitality brands</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Problem */}
      <section className="py-20 md:py-32 bg-background border-b border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-3xl mx-auto text-center">
          <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">The Overlooked Moment</span>
          <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-8">
            You've Perfected Every Course — Except the Last One
          </h2>
          <div className="space-y-6 text-body-lg text-on-surface-variant font-sans leading-relaxed">
            <p>
              Your kitchen obsesses over plating. Your sommelier curates every pairing. Your service is rehearsed to the second. And then the meal ends with a generic mint or a folded bill — a flat finish to an otherwise flawless experience.
            </p>
            <p>
              The after-meal moment is the single most undervalued touchpoint in hospitality. It's the last thing your guest tastes, the final memory they carry to the door, and the story they tell their friends. Paansutraa was built to own that moment — and to make it unmistakably yours.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — The Solution / Value Pillars */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">Why Hospitality Leaders Choose Paansutraa</span>
            <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">A Partner Built for the Standards You Hold</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16">
            {[
              { icon: HeartHandshake, title: "Signature Guest Experience", desc: "A memorable, Instagram-worthy finish that differentiates your property from every competitor on the street." },
              { icon: Factory, title: "White-Label & Custom Blends", desc: "Your brand, your flavour profile. We craft signature paans tuned to your cuisine and packaged under your name." },
              { icon: Truck, title: "Cold-Chain Freshness, Guaranteed", desc: "Dedicated hospitality logistics ensure every leaf arrives fresh, never compromised — with delivery windows you can build a service around." },
              { icon: ShieldCheck, title: "FSSAI-Certified & Hygienically Crafted", desc: "Manufactured to contemporary food-safety standards. Documentation ready for your audits and compliance teams." },
              { icon: BadgeDollarSign, title: "New Revenue, Zero Complexity", desc: "A high-margin add-on or amenity that requires no kitchen space, no prep, no trained staff. It simply works." },
              { icon: Building2, title: "Reliable, Scalable Supply", desc: "From a single boutique café to a multi-property chain, our supply scales with you. Consistent quality, predictable replenishment." }
            ].map((feature, i) => (
              <div key={i} className="glass-card border border-secondary/20 p-5 sm:p-8 rounded-xl hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 hover:-translate-y-1">
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-secondary mb-4 sm:mb-6" strokeWidth={1.5} />
                <h3 className="text-label-lg sm:text-headline-sm text-secondary mb-2 sm:mb-4 font-serif">{feature.title}</h3>
                <p className="text-body-sm sm:text-on-surface-variant font-sans text-on-surface-variant line-clamp-4 sm:line-clamp-none leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/order" className="inline-flex items-center gap-2 text-secondary hover:text-[#D4B97F] text-label-lg uppercase tracking-widest transition-colors font-medium border-b border-transparent hover:border-secondary pb-1">
              See How It Fits Your Property &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Use Cases by Format */}
      <section className="py-20 md:py-32 bg-background border-y border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">Tailored to Your Format</span>
            <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">One Craft, Built for Every Hospitality Setting</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6 group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-surface-container relative">
                <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199674/traditional-indian-betel-leaf-paan-on-a-brass-plate-over-purple-velvet-fabric_cs0sam.webp" alt="Hotels & Resorts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <h3 className="text-headline-md text-secondary font-serif flex items-center gap-2 group-hover:text-[#D4B97F] transition-colors">
                <Building2 className="w-6 h-6" /> Hotels & Resorts
              </h3>
              <p className="text-on-surface-variant font-sans">
                Welcome amenities, turndown surprises, banquet closers, and premium minibar inclusions. Give every stay a regal signature that guests remember at checkout — and mention in their review.
              </p>
              <div className="text-sm text-secondary/80 italic font-serif">Best for: 4 & 5-star properties, boutique stays, luxury resorts.</div>
              <Link to="/order" className="inline-block text-secondary hover:text-[#D4B97F] text-label-md uppercase tracking-widest transition-colors font-medium underline underline-offset-4">Build My Custom Program &rarr;</Link>
            </div>

            <div className="space-y-6 group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-surface-container relative">
                <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/luxury-betel-leaf-paan-with-gold-leaf-and-a-cherry-on-a-golden-plate_bavsa4.webp" alt="Fine-Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <h3 className="text-headline-md text-secondary font-serif flex items-center gap-2 group-hover:text-[#D4B97F] transition-colors">
                <Utensils className="w-6 h-6" /> Fine-Dining & Casual
              </h3>
              <p className="text-on-surface-variant font-sans">
                The perfect post-meal ritual delivered with the bill. Elevate the average ticket, deepen the experience, and give your guests a reason to return.
              </p>
              <div className="text-sm text-secondary/80 italic font-serif mt-auto">Best for: Fine dining, multi-cuisine, banquet & event restaurants.</div>
              <Link to="/order" className="inline-block text-secondary hover:text-[#D4B97F] text-label-md uppercase tracking-widest transition-colors font-medium underline underline-offset-4">Build My Custom Program &rarr;</Link>
            </div>

            <div className="space-y-6 group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-surface-container relative">
                <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/chocolate-dipped-meetha-paan-with-a-cherry-on-a-golden-plate-over-purple-velvet_agv9rt.webp" alt="Cafés & Lounges" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <h3 className="text-headline-md text-secondary font-serif flex items-center gap-2 group-hover:text-[#D4B97F] transition-colors">
                <Coffee className="w-6 h-6" /> Cafés & Lounges
              </h3>
              <p className="text-on-surface-variant font-sans">
                An artisanal accompaniment that pairs beautifully with coffee, dessert, and slow conversation. A small luxury that fits your aesthetic and your margins.
              </p>
              <div className="text-sm text-secondary/80 italic font-serif mt-auto">Best for: Specialty cafés, dessert bars, hookah & cocktail lounges.</div>
              <Link to="/order" className="inline-block text-secondary hover:text-[#D4B97F] text-label-md uppercase tracking-widest transition-colors font-medium underline underline-offset-4">Build My Custom Program &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Signature Collection */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">Curated for Discerning Palates</span>
            <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">Blends Your Guests Won't Find Anywhere Else</h2>
            <p className="text-body-lg text-on-surface-variant font-sans">
              Each blend is crafted with premium natural ingredients, no artificial preservatives, and a presentation worthy of your property. From timeless tradition to the indulgent Gold Paan, we'll help you curate a menu that fits your brand and your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-[4/5] object-cover w-full rounded-2xl overflow-hidden bg-surface-container mb-4 sm:mb-6 relative border border-transparent group-hover:border-secondary/30 transition-colors">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-headline-sm text-secondary font-serif mb-2 group-hover:text-[#D4B97F] transition-colors">{product.name}</h3>
                <p className="text-body-sm text-on-surface-variant font-sans">{product.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <Link to="/products" className="inline-block border border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium">
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — How Partnership Works */}
      <section className="py-20 md:py-32 bg-background border-y border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">Simple to Start</span>
            <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">From First Taste to First Order in 4 Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">01</div>
              <h3 className="text-headline-sm text-secondary font-serif mb-4 relative z-10">Request Your Tasting Kit</h3>
              <p className="text-on-surface-variant font-sans relative z-10">Tell us about your property. We send a complimentary curated kit to your door.</p>
            </div>
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">02</div>
              <h3 className="text-headline-sm text-secondary font-serif mb-4 relative z-10">Taste & Customize</h3>
              <p className="text-on-surface-variant font-sans relative z-10">Sample the range, then work with our team to design your signature blend and packaging.</p>
            </div>
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">03</div>
              <h3 className="text-headline-sm text-secondary font-serif mb-4 relative z-10">Lock Your Supply Plan</h3>
              <p className="text-on-surface-variant font-sans relative z-10">Choose volumes and delivery windows that match your service. Transparent pricing, no surprises.</p>
            </div>
            <div className="relative group p-6 rounded-2xl hover:bg-surface-container hover:border-secondary/20 hover:shadow-lg transition-all duration-300 border border-transparent hover:-translate-y-1">
              <div className="text-display-lg text-secondary/10 font-bold font-serif absolute -top-6 -left-0 group-hover:text-secondary/20 group-hover:-top-8 transition-all select-none">04</div>
              <h3 className="text-headline-sm text-secondary font-serif mb-4 relative z-10">Delight Your Guests</h3>
              <p className="text-on-surface-variant font-sans relative z-10">We handle freshness and logistics. You enjoy the compliments — and the new revenue.</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/order" className="inline-block bg-secondary text-on-secondary hover:bg-secondary/90 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium shadow-lg">
              Start With a Free Tasting Kit &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Proof / Social Proof */}
      <SocialProof subtitle="Trusted by Hospitality Leaders" title="The Standard Set by the Best">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm md:text-base text-secondary font-medium tracking-widest uppercase border-t border-secondary/20 pt-12">
          <span>500+ Active Partners</span>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <span>1,00,000+ Orders Fulfilled</span>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <span>10+ Years of Craft</span>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <span>FSSAI Certified</span>
        </div>
      </SocialProof>

      {/* SECTION 8 — Final CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-surface-container">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto relative z-10 text-center">
          <h2 className="text-display-sm md:text-display-md text-secondary font-serif mb-6 drop-shadow-md">
            Give Your Guests a Finish Worth Remembering
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 font-sans">
            Join 500+ hospitality partners who've made the after-meal moment their signature. Request your complimentary tasting kit today — no commitment, just a taste of what's possible.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link 
              to="/order"
              className="bg-secondary text-on-secondary w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/90 transition-colors shadow-lg text-center"
            >
              Request Complimentary Tasting Kit
            </Link>
            <a 
              href="#whatsapp"
              className="border border-secondary text-secondary bg-background/50 backdrop-blur-sm w-full sm:w-auto py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/10 transition-colors shadow-lg text-center"
            >
              Chat With Us on WhatsApp
            </a>
          </div>

          <div className="text-sm text-on-surface-variant/80 font-medium tracking-wide flex items-center justify-center gap-2 flex-wrap">
            <CheckCircle2 className="w-4 h-4 text-secondary" /> Free tasting kit
            <span className="px-2">&middot;</span>
            <CheckCircle2 className="w-4 h-4 text-secondary" /> No obligation
            <span className="px-2">&middot;</span>
            <CheckCircle2 className="w-4 h-4 text-secondary" /> Response within 24 hours
          </div>
        </div>
      </section>

    </div>
  );
}

