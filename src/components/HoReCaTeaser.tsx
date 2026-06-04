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
            alt="A luxurious hotel lobby bar" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3YPf8NuwRS78KS7d55LSLub36cXl3IJ3q8ybT7CeRb5XsTyxS6NufElJVyPFhor9U8SKZRlecxPOOgSfq_ZngQFIQJL44j5Qe9rHMimZVB-cb_4w0V21tVvgx6XJU-ZAhjXSYIQYvuXTtHNyNX-ZxSHLliMzQzJ7V7jPOUKhWpOdcg_UT3ISpJtZFmmoJfoOOn5W8lqgqLzwDPp8fhtb0rxRM_qick6AStB0JH0ynA1TurAn4Yy5rfWv3TVuSUvYNwVSPcxEcR1ET" />
        </div>
      </div>
    </section>
  );
}
