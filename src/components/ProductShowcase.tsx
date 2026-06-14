import { Link } from 'react-router-dom';

export function ProductShowcase() {
  const products = [
    {
      img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199674/traditional-indian-betel-leaf-paan-on-a-brass-plate-over-purple-velvet-fabric_cs0sam.webp",
      name: "Sada Paan",
      desc: "The classic, authentic taste of tradition without the sweetness."
    },
    {
      img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/traditional-indian-meetha-paan-with-cherry-on-golden-brass-plate-over-purple-velvet-cloth_wz69ys.webp",
      name: "Meetha Paan",
      desc: "A delightful sweet blend of gulkand, mouth fresheners and aromatic spices."
    },
    {
      img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/luxury-betel-leaf-paan-with-gold-leaf-and-a-cherry-on-a-golden-plate_bavsa4.webp",
      name: "Gold Paan",
      desc: "Infused with 24k edible gold dust and Kashmiri saffron for a royal experience."
    },
    {
      img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/chocolate-dipped-meetha-paan-with-a-cherry-on-a-golden-plate-over-purple-velvet_agv9rt.webp",
      name: "Dark Chocolate Paan",
      desc: "A rich fusion of premium dark chocolate and traditional paan ingredients."
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#0b3027] overflow-hidden">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto flex justify-between items-end mb-8 md:mb-16">
        <h2 className="text-headline-lg text-secondary">Our Signature Collection</h2>
        <Link to="/products" className="hidden sm:inline-block text-secondary border-b border-secondary pb-1 text-label-md uppercase tracking-widest hover:opacity-80 transition-opacity">
          View Full Collection
        </Link>
      </div>
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-12 px-5 md:px-margin-desktop snap-x">
        {products.map((p, i) => (
          <div key={i} className="w-[200px] sm:w-[240px] md:w-[280px] snap-center shrink-0 flex flex-col group">
            <div className="aspect-square bg-surface-container-highest mb-4 overflow-hidden border border-secondary/10 relative">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={p.name} 
                src={p.img} />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
            </div>
            <div className="flex-1 flex flex-col">
              <h4 className="font-serif text-lg md:text-xl font-semibold text-on-surface mb-2">{p.name}</h4>
              <p className="text-on-surface-variant text-sm md:text-base mb-5 line-clamp-2 md:line-clamp-none">{p.desc}</p>
              <div className="mt-auto">
                <Link to="/products" className="block text-center w-full py-3 border border-secondary/20 text-secondary text-label-md uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all duration-300">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 sm:hidden mt-4 flex justify-center">
        <Link to="/products" className="inline-block text-center text-secondary border-b border-secondary pb-1 text-label-md uppercase tracking-widest hover:opacity-80 transition-opacity">
          View Full Collection
        </Link>
      </div>
    </section>
  );
}
