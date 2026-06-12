import { useEffect } from 'react';
import { BadgeCheck, Building2, Utensils, Award, ShieldCheck, Leaf } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function HoReCa() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen pt-32 bg-background text-on-surface">
      {/* Hero Section */}
      <section className="px-5 md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-[28px] md:text-[48px] font-bold text-secondary font-serif mb-6">
              Elevate Your Hospitality Experience
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed">
              We partner with premium hotels, fine-dining restaurants, and exclusive catering services to provide an unforgettable after-meal indulgence that perfectly complements your culinary offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button 
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-secondary text-on-secondary py-4 px-8 uppercase tracking-widest text-label-md hover:bg-secondary/90 transition-colors border border-secondary"
              >
                Request Tasting Kit
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] object-cover w-full rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl relative">
              <img 
                src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
                className="w-full h-full object-cover"
                alt="Luxury Hospitality Hamper"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-on-secondary font-serif text-headline-sm">Signature Gifting & Serving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-surface-container-low py-20 md:py-32 border-y border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-display-sm text-secondary font-serif mb-6">The Paansutraa Advantage</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Our B2B solutions are tailor-made for high-end hospitality venues, completely redefining the traditional mouth freshener into a symbol of modern luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "White Labeling", desc: "Premium custom packaging aligned strictly with your brand identity and color palettes." },
              { icon: Utensils, title: "Menu Pairing", desc: "Customized paan formulations that pair seamlessly with your specific culinary themes." },
              { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous hygiene standards and FSSAI approved facilities guaranteeing top-tier safety." },
              { icon: Leaf, title: "Premium Sourcing", desc: "Export-quality betel leaves and authentic ingredients sourced from the finest origins." },
              { icon: Award, title: "Trained Serving", desc: "We provide staff training for elegant presentation, handling, and serving methodology." },
              { icon: BadgeCheck, title: "Consistent Supply", desc: "Reliable logistics ensuring you never run out of your signature after-meal experiences." }
            ].map((feature, i) => (
              <div key={i} className="bg-surface-container/30 border border-secondary/20 p-8 rounded-xl hover:border-secondary/40 transition-colors group">
                <feature.icon className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
                <h3 className="text-headline-sm text-on-surface mb-4 font-serif">{feature.title}</h3>
                <p className="text-on-surface-variant">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-20 md:py-32">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-display-sm text-secondary font-serif mb-6">Our Partnership Models</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative overflow-hidden rounded-2xl border border-secondary/20 block aspect-[4/3] sm:aspect-video">
              <div className="absolute inset-0">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/luxury-betel-leaf-paan-with-gold-leaf-and-a-cherry-on-a-golden-plate_bavsa4.webp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Fine Dining"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-headline-md text-secondary font-serif mb-4">Fine Dining Restaurants</h3>
                <p className="text-on-surface-variant max-w-md">
                  Delivered fresh daily directly to your kitchen. Served in customized copper or silver ware reflecting royal heritage.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-secondary/20 block aspect-[4/3] sm:aspect-video">
              <div className="absolute inset-0">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199674/traditional-indian-betel-leaf-paan-on-a-brass-plate-over-purple-velvet-fabric_cs0sam.webp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Luxury Hotels"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-headline-md text-secondary font-serif mb-4">Luxury Hotels & Resorts</h3>
                <p className="text-on-surface-variant max-w-md">
                   In-room welcome hampers, turn-down services, and grand buffet setups. Sealed freshness with extended shelf life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <div id="contact-section">
        <ContactForm />
      </div>
    </div>
  );
}
