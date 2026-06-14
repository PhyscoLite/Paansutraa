import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-12 md:py-16 border-t border-secondary/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-gutter px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-2">
          <img 
            src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781452071/paansutraa_logo_cj3lgx.png" 
            alt="Paansutraa Logo" 
            className="h-[72px] md:h-[96px] w-auto object-contain mb-6" 
          />
          <p className="text-on-surface-variant text-body-md max-w-sm mb-8">
            <span className="block mb-2 font-medium">India's Premium After-Meal Luxury</span>
            For Restaurants • Hotels • Weddings • Corporate Gifting
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
            <li><Link to="/about" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-label-md">About Us</Link></li>
            <li><Link to="/contact" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-label-md">Contact Us</Link></li>
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-label-md" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-label-md" href="#">Terms of Service</a></li>
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
