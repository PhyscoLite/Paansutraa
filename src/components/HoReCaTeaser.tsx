import { BadgeCheck } from "lucide-react";

export function HoReCaTeaser() {
  return (
    <section className="py-16 md:py-32 bg-primary-container relative">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <h2 className="text-headline-lg text-secondary mb-8">Elevating Hospitality Experiences</h2>
          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-4">
              <BadgeCheck className="text-secondary w-6 h-6 shrink-0" />
              <p className="text-on-surface-variant">White-label luxury solutions for boutique hotels and 5-star chains.</p>
            </li>
            <li className="flex items-start gap-4">
              <BadgeCheck className="text-secondary w-6 h-6 shrink-0" />
              <p className="text-on-surface-variant">Signature blends customized for your restaurant's unique palate.</p>
            </li>
            <li className="flex items-start gap-4">
              <BadgeCheck className="text-secondary w-6 h-6 shrink-0" />
              <p className="text-on-surface-variant">Dedicated hospitality logistics ensuring freshness upon delivery.</p>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button className="bg-secondary text-on-secondary w-full sm:w-auto px-6 py-3 text-label-md uppercase tracking-wider active:scale-95 transition-transform">
              Become a Partner
            </button>
            <button className="border border-secondary text-secondary w-full sm:w-auto px-6 py-3 text-label-md uppercase tracking-wider active:scale-95 transition-transform">
              Request Complimentary Tasting Kit
            </button>
          </div>
        </div>
        <div className="relative">
          <img 
            className="rounded-lg shadow-2xl border border-secondary/20" 
            alt="Luxury purple and gold gift hamper" 
            src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198457/luxury-purple-and-gold-gift-hamper-with-gourmet-treats-spices-and-betel-leaves_ljh82h.webp" />
        </div>
      </div>
    </section>
  );
}
