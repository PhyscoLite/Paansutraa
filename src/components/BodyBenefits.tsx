import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Wind, Flower, Sprout, Ban } from 'lucide-react';

export function BodyBenefits() {
  return (
    <section className="py-20 bg-background px-5 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto bg-gradient-to-br from-[#d4af37] via-[#c59b27] to-[#b8860b] rounded-[2rem] p-8 md:p-16 lg:p-20 border border-[#f9df9f]/40 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative elements for the golden card */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
         
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-[24px] md:text-[28px] font-bold text-[#111111] font-serif mb-6 leading-[1.1]">
              Good for the Soul.<br />Kind to the Body.
            </h2>
            <p className="text-headline-sm text-[#333333] font-serif italic mb-10 leading-relaxed">
              The royal after-meal ritual — crafted pure, made to make you feel good.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                { icon: <Leaf className="w-7 h-7" />, text: "Aids digestion" },
                { icon: <Wind className="w-7 h-7" />, text: "Naturally fresh breath" },
                { icon: <Flower className="w-7 h-7" />, text: "A calming pause" },
                { icon: <Sprout className="w-7 h-7" />, text: "No artificial preservatives" },
                { icon: <Ban className="w-7 h-7" />, text: "100% tobacco-free" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-body-lg text-[#111111] font-medium">
                  <span className="flex-shrink-0 drop-shadow-sm">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/order" className="inline-flex items-center justify-center shrink-0 bg-[#111] text-white px-8 py-4 text-label-md uppercase tracking-widest hover:bg-[#222] transition-colors shadow-lg hover:shadow-xl">
              Order Now <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
          
          <div className="hidden lg:block relative aspect-[4/5] rounded-tl-[8rem] rounded-br-[8rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#111]/40 to-transparent mix-blend-overlay pointer-events-none z-10"></div>
             <img 
              src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781458574/paan-ingredients_hlnu3x.webp" 
              alt="Pure ingredients" 
              className="w-full h-full object-cover filter contrast-110" 
             />
          </div>
        </div>
      </div>
    </section>
  );
}
