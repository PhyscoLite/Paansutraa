import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Saada', 'Meetha', 'Chocolate', 'Gold'];

  const products = [
    {
      id: 1,
      category: 'Saada',
      img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199674/traditional-indian-betel-leaf-paan-on-a-brass-plate-over-purple-velvet-fabric_cs0sam.webp",
      name: "Sada Paan",
      desc: "The classic, authentic taste of tradition without the sweetness.",
    },
    {
      id: 2,
      category: 'Meetha',
      img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/traditional-indian-meetha-paan-with-cherry-on-golden-brass-plate-over-purple-velvet-cloth_wz69ys.webp",
      name: "Meetha Paan",
      desc: "A delightful sweet blend of gulkand, mouth fresheners and aromatic spices.",
    },
    {
      id: 3,
      category: 'Gold',
      img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/luxury-betel-leaf-paan-with-gold-leaf-and-a-cherry-on-a-golden-plate_bavsa4.webp",
      name: "Gold Paan",
      desc: "Infused with 24k edible gold dust and Kashmiri saffron for a royal experience.",
    },
    {
      id: 4,
      category: 'Chocolate',
      img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/chocolate-dipped-meetha-paan-with-a-cherry-on-a-golden-plate-over-purple-velvet_agv9rt.webp",
      name: "Dark Chocolate Paan",
      desc: "A rich fusion of premium dark chocolate and traditional paan ingredients.",
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.desc,
        "image": product.image
      }
    }))
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <SEO 
        title="Our Collection | Paansutraa Artisanal Paan"
        description="Explore Paansutraa's exquisite collection of artisanal paans including Sada, Meetha, Chocolate, and the signature 24k Gold Paan."
        canonical="/products"
        schema={schema}
      />
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-[28px] md:text-[48px] font-bold text-secondary font-serif mb-4">Our Collection</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Discover our curated selection of artisanal paan, crafted with premium ingredients for the perfect finale to any meal.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 relative z-10 border-b border-secondary/20 pb-6">
          <div className="hidden md:flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={"px-6 py-2.5 rounded-full border text-label-md uppercase tracking-wider transition-all duration-300 " + (
                  activeCategory === cat 
                    ? 'border-secondary bg-secondary text-on-secondary' 
                    : 'border-secondary/20 text-secondary hover:border-secondary/50'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden flex items-center justify-center w-full gap-2 px-6 py-3 border border-secondary/20 text-secondary uppercase tracking-widest"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={18} />
            Filters: {activeCategory}
          </button>
        </div>

        {/* Mobile Filter Menu */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden mb-8"
            >
              <div className="flex flex-col gap-2 p-4 border border-secondary/20 bg-surface-container-low">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsFilterOpen(false);
                    }}
                    className={"text-left px-4 py-3 text-label-md uppercase tracking-wider transition-colors " + (
                      activeCategory === cat ? 'bg-secondary text-on-secondary' : 'text-secondary hover:bg-secondary/10'
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence>
            {filteredProducts.map((p) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={p.id} 
                className="flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="aspect-square bg-surface-container-highest mb-6 overflow-hidden border border-secondary/10 relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={p.name} 
                    src={p.img} 
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
                </div>
                <div className="flex-1 flex flex-col items-center text-center">
                  <div className="text-xs text-on-surface-variant tracking-widest uppercase mb-2">{p.category}</div>
                  <h4 className="font-serif text-2xl font-semibold text-on-surface mb-3">{p.name}</h4>
                  <p className="text-on-surface-variant text-base mb-6">{p.desc}</p>
                  <div className="mt-auto w-full max-w-[200px]">
                    <button className="w-full py-3 border border-secondary/20 text-secondary text-label-md uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-on-surface-variant text-body-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
