import { PlayCircle } from "lucide-react";

export function BrandVideo() {
  return (
    <section className="py-12 md:py-24 bg-surface-container-lowest">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer border border-secondary/20">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="A close-up, high-speed slow-motion shot" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNdv4h3ityKderQRVAb8z-22FNgRNG_loVbhEdAAVKcfX6VaPzGvaBP1_7GDRuEYKFxUIriE6acpbXXNKi4VK78zjn82vrV8AgnMxqkLCXqRiKZcMsDcatGPUUtNXQ15saSBA01c2PVScflh7mxxxk_XiOaj64TcPUWvf2Hk4Kg8f-HOuvHoWdRslHq2n1KN6zgfJ0w6LKA_h0CoQtaJkYqCjOAt7_XrUXtbtWFaWEDvvsRAqEljwdJCv0_hyEzroycUlbHqRah5j" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <PlayCircle className="text-secondary w-24 h-24 mb-4 transition-transform group-hover:scale-110" strokeWidth={1} />
            <h2 className="text-headline-md text-secondary">The After-Meal Luxury</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
