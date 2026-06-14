import { Star, TrendingUp, CheckCircle2, Box, Truck, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export function HoReCaTeaser() {
  const features = [
    {
      icon: Star,
      title: "Increase Guest Satisfaction",
      desc: "A memorable after-meal finish that elevates the entire dining journey."
    },
    {
      icon: TrendingUp,
      title: "Additional Revenue",
      desc: "A premium, high-margin offering with zero operational complexity."
    },
    {
      icon: CheckCircle2,
      title: "Consistent Quality",
      desc: "Every product crafted to deliver a reliable, premium experience."
    },
    {
      icon: Box,
      title: "Elegant Presentation",
      desc: "Luxury packaging that complements premium environments."
    },
    {
      icon: Truck,
      title: "Reliable Supply",
      desc: "Professional, consistent fulfillment your service can depend on."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-primary-container border-y border-secondary/10">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="text-label-md uppercase tracking-widest text-on-surface-variant mb-4 block">
            For Hospitality Partners
          </span>
          <h2 className="text-headline-lg md:text-display-sm text-secondary font-serif mb-6">
            Elevating Hospitality Experiences
          </h2>
          <p className="text-body-lg text-on-surface-variant font-sans max-w-3xl mx-auto">
            Turn the after-meal moment into your property's signature — artisanal paan, delivered fresh, built for the standards you hold.
          </p>
        </div>

        {/* Designed For Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-secondary font-medium tracking-widest uppercase mb-20 md:mb-24">
          <div className="flex items-center gap-3"><Building2 className="w-5 h-5" /> Restaurants</div>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <div className="flex items-center gap-3"> Hotels</div>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <div className="flex items-center gap-3"> Resorts</div>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <div className="flex items-center gap-3"> Lounges</div>
          <span className="w-1 h-1 rounded-full bg-secondary hidden sm:block"></span>
          <div className="flex items-center gap-3"> Banquet Halls</div>
          <span className="w-1 h-1 rounded-full bg-secondary hidden lg:block"></span>
          <div className="flex items-center gap-3"> Wedding Caterers</div>
          <span className="w-1 h-1 rounded-full bg-secondary hidden lg:block"></span>
          <div className="flex items-center gap-3"> Event Companies</div>
        </div>

        {/* Why Hospitality Partners Choose Us */}
        <div className="mb-20">
          <h3 className="text-label-lg uppercase tracking-widest text-on-surface-variant mb-10 text-center">
            Why Hospitality Partners Choose Paansutraa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`glass-card bg-surface-container-low border border-secondary/20 p-8 rounded-xl hover:border-secondary/40 transition-all duration-300 ${
                  idx >= 3 ? "lg:col-span-1" : ""
                } ${
                  idx === 3 ? "lg:col-start-1 lg:ml-auto lg:w-full" : ""
                } ${
                  idx === 4 ? "lg:col-start-2 lg:mr-auto lg:w-full" : ""
                } ${idx > 2 && features.length % 3 !== 0 && "lg:justify-self-center lg:transform" /* Just custom positioning or keep it simple */} ${
                  idx >= 3 ? "md:col-span-1" : ""
                } ${idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                style={idx >= 3 ? { gridColumn: window.innerWidth >= 1024 ? `span 1 / span 1` : undefined } : {}}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-label-lg font-serif text-secondary mb-3">{feature.title}</h4>
                <p className="text-on-surface-variant font-sans text-body-md leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA Block */}
        <div className="relative bg-surface-container overflow-hidden rounded-2xl border border-secondary/20 isolate">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 -z-10"></div>
          
          <div className="p-10 md:p-16 text-center z-10">
            <h3 className="text-headline-md md:text-display-sm text-secondary font-serif mb-4">
              Become a Paansutraa Hospitality Partner
            </h3>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 font-sans">
              Join the restaurants, hotels, and hospitality leaders redefining the after-meal experience.
            </p>
            
            <Link 
              to="/order"
              className="inline-block bg-secondary text-on-secondary hover:bg-secondary/90 px-8 py-4 text-label-md uppercase tracking-widest transition-colors font-medium shadow-lg mb-6"
            >
              Request a Complimentary Tasting Kit
            </Link>
            
            <p className="text-sm text-on-surface-variant/80 font-medium tracking-wide">
              Discover how Paansutraa adds value to your guests — and your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
