import { Hotel, Utensils, Coffee, PartyPopper, Briefcase } from "lucide-react";

export function WhoWeServe() {
  const segments = [
    { icon: Hotel, title: "Hotels", desc: "Premium amenities for luxury stays" },
    { icon: Utensils, title: "Restaurants", desc: "The perfect finish to fine dining" },
    { icon: Coffee, title: "Cafes", desc: "Artisanal accompaniments for cafes" },
    { icon: PartyPopper, title: "Weddings & Events", desc: "Royal favors for memorable days" },
    { icon: Briefcase, title: "Corporates", desc: "Refined gifting & pantry solutions" },
  ];

  return (
    <section className="py-16 md:py-32 bg-surface-container-lowest">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-secondary/30 bg-primary-container text-secondary text-label-md uppercase tracking-widest">
            Currently in Bangalore
          </div>
          <h2 className="text-headline-lg text-secondary mb-6">Who We Serve</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Bringing the heritage of artisanal paan to the finest establishments and celebrations across Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {segments.map((segment, idx) => (
            <div key={idx} className={`bg-surface-container-low p-6 md:p-8 rounded-xl border border-secondary/10 hover:border-secondary/40 transition-colors text-center group cursor-default ${idx === segments.length - 1 ? 'col-span-full md:col-span-1' : ''}`}>
              <div className="w-16 h-16 mx-auto mb-6 bg-background rounded-full flex items-center justify-center border border-secondary/20 group-hover:bg-secondary group-hover:text-on-secondary text-secondary transition-colors">
                <segment.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-on-surface mb-2">{segment.title}</h3>
              <p className="text-sm text-on-surface-variant">{segment.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-secondary text-on-secondary w-full sm:w-auto px-8 py-4 text-label-md uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
            Partnership With Us
          </button>
        </div>
      </div>
    </section>
  );
}
