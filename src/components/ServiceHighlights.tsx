import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function ServiceHighlights() {
  return (
    <>
      {/* SECTION 1 — HORECA (text left · image right) */}
      <section className="py-20 md:py-32 bg-background border-y border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">Elevating Hospitality</h2>
              <p className="text-body-lg text-on-surface-variant font-sans mb-8">
                Turn the after-meal moment into your property's signature.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Memorable guest experience",
                  "High-margin, zero complexity",
                  "Consistent premium quality",
                  "Elegant luxury packaging",
                  "Reliable, professional supply"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface flex-wrap">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/horeca"
                className="inline-block bg-secondary text-on-secondary hover:bg-secondary/90 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium shadow-sm"
              >
                Become a Hospitality Partner
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden border border-secondary/20 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
                  alt="HoReCa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WEDDINGS (image left · text right) */}
      <section className="py-20 md:py-32 bg-surface-container-low border-b border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1 lg:order-1">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden border border-secondary/20 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
                  alt="Weddings" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">Royal Wedding Finish</h2>
              <p className="text-body-lg text-on-surface-variant font-sans mb-8">
                The last moment your guests will never forget.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Bespoke personalized favor boxes",
                  "Live artisanal paan counters",
                  "24k Gold & saffron collection",
                  "Custom packaging in your theme",
                  "Delivered fresh, on your day"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface flex-wrap">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/weddings"
                className="inline-block bg-secondary text-on-secondary hover:bg-secondary/90 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium shadow-sm"
              >
                Plan My Wedding Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CORPORATE (text left · image right) */}
      <section className="py-20 md:py-32 bg-background border-b border-secondary/10">
        <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">Gifting, Elevated</h2>
              <p className="text-body-lg text-on-surface-variant font-sans mb-8">
                The corporate gift clients and teams actually remember.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Co-branded luxury packaging",
                  "Client & employee gifting",
                  "Festive & Diwali hampers",
                  "Bulk-ready, individually sealed",
                  "Pan-India, on-time delivery"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface flex-wrap">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/corporate"
                className="inline-block bg-secondary text-on-secondary hover:bg-secondary/90 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium shadow-sm"
              >
                Request Corporate Catalog
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden border border-secondary/20 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" 
                  alt="Corporate Gifting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
