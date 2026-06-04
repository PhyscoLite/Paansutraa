import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-12 md:py-16 border-t border-secondary/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-gutter px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-2">
          <img 
            src="https://res.cloudinary.com/dikiz5ek1/image/upload/v1780555648/Paansutraa_logo_transparent_bzid9b.png" 
            alt="Paansutraa Logo" 
            className="h-[72px] md:h-[96px] w-auto object-contain mb-6" 
          />
          <p className="text-on-surface-variant text-body-md max-w-sm mb-8">
            Redefining the after-meal experience through artisanal luxury and royal heritage. Crafted for those who seek the extraordinary.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="#">
              <Instagram className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="#">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="#">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-headline-sm text-secondary mb-6">Explore</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-label-md" href="#">Sustainability</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-label-md" href="#">Contact Us</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-label-md" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-label-md" href="#">Terms of Service</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-label-md" href="#">Wholesale Inquiry</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-headline-sm text-secondary mb-6">Partnership</h4>
          <p className="text-on-surface-variant mb-4 text-body-md">Join our exclusive network of hospitality partners.</p>
          <button className="bg-secondary/10 border border-secondary text-secondary px-6 py-2 text-label-md w-full hover:bg-secondary hover:text-on-secondary transition-all active:scale-95">
            Download Brochure
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-16 pt-8 border-t border-secondary/5 px-5 md:px-margin-desktop max-w-container-max mx-auto text-center text-on-surface-variant text-label-md opacity-60">
        © 2026 Paansutraa. All Rights Reserved. Crafted for Royalty.
      </div>
    </footer>
  );
}
