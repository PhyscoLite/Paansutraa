import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Features() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const cards = [
    {
      image: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781197913/chef-hygienically-preparing-traditional-indian-paan-with-fresh-betel-leaves-and-various-sweet-ingredients_u8ibtt.webp",
      title: "Hygienically Crafted",
      desc: "Untouched by hands, our process ensures the highest standards of safety and purity in every serving."
    },
    {
      image: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781197913/traditional-indian-sweet-paan-ingredients-with-fresh-betel-leaves-and-colorful-mouth-fresheners_zqctct.webp",
      title: "Premium Ingredients",
      desc: "Handpicked saffron, organic nuts, and the finest betel leaves sourced from heritage estates."
    },
    {
      image: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781197918/paansutraa-premium-after-meal-luxury-gift-box-featuring-betel-leaves-and-assorted-mouth-fresheners_xmq7pb.webp",
      title: "Luxury Packaging",
      desc: "Each box is a work of art, designed for the tables of royalty and the most discerning homes."
    },
    {
      image: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781197916/a-waiter-presenting-an-open-paansutraa-luxury-after-meal-gift-box-in-a-fine-dining-setting_onl1mb.webp",
      title: "Hotels & Restaurants",
      desc: "Curated solutions for 5-star establishments seeking to provide a memorable dining finale."
    },
    {
      image: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781198044/paansutraa-luxury-corporate-gift-box-and-bag-in-a-professional-executive-office-setting_o2qa7j.webp",
      title: "Corporate Gifting",
      desc: "Impressionable gifts for high-stakes business relationships and executive recognition."
    },
    {
      image: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781197915/waiter-presenting-golden-tray-of-betel-leaves-and-paan-condiments-in-a-luxury-restaurant_kwaa5j.webp",
      title: "Weddings & Events",
      desc: "Adding a touch of regal tradition to the most celebrated moments of your life."
    }
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="sutra-line mb-8"></div>
          <h2 className="text-headline-lg text-on-surface">Why Paansutraa</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div 
                key={idx} 
                className="glass-card overflow-hidden group hover:border-secondary/40 transition-all flex flex-col cursor-pointer"
                onMouseEnter={() => setExpandedIndex(idx)}
                onMouseLeave={() => setExpandedIndex(null)}
                onClick={() => setExpandedIndex(idx === expandedIndex ? null : idx)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-8 pt-6 flex-1 flex flex-col">
                  <h3 className="text-headline-sm font-serif">{card.title}</h3>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-on-surface-variant text-body-md">{card.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
