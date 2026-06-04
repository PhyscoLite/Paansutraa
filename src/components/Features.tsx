import { Sparkles, Award, Package, Building2, Gift, PartyPopper } from "lucide-react";

export function Features() {
  const cards = [
    {
      icon: Sparkles,
      title: "Hygienically Crafted",
      desc: "Untouched by hands, our process ensures the highest standards of safety and purity in every serving."
    },
    {
      icon: Award,
      title: "Premium Ingredients",
      desc: "Handpicked saffron, organic nuts, and the finest betel leaves sourced from heritage estates."
    },
    {
      icon: Package,
      title: "Luxury Packaging",
      desc: "Each box is a work of art, designed for the tables of royalty and the most discerning homes."
    },
    {
      icon: Building2,
      title: "Hotels & Restaurants",
      desc: "Curated solutions for 5-star establishments seeking to provide a memorable dining finale."
    },
    {
      icon: Gift,
      title: "Corporate Gifting",
      desc: "Impressionable gifts for high-stakes business relationships and executive recognition."
    },
    {
      icon: PartyPopper,
      title: "Weddings & Events",
      desc: "Adding a touch of regal tradition to the most celebrated moments of your life."
    }
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="sutra-line mb-8"></div>
          <h2 className="text-headline-lg text-on-surface">The Paansutraa Excellence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="glass-card p-6 md:p-10 group hover:border-secondary/40 transition-all">
              <card.icon className="text-secondary w-10 h-10 mb-6" strokeWidth={1} />
              <h3 className="text-headline-sm mb-4">{card.title}</h3>
              <p className="text-on-surface-variant text-body-md">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
