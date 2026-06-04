export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-secondary/20 shadow-[0_4px_20px_rgba(212,175,55,0.1)]">
      <div className="flex justify-between items-center w-full px-5 md:px-margin-desktop max-w-container-max mx-auto h-24">
        <img 
          src="https://res.cloudinary.com/dikiz5ek1/image/upload/v1780555648/Paansutraa_logo_transparent_bzid9b.png" 
          alt="Paansutraa Logo" 
          className="h-[60px] md:h-[72px] w-auto object-contain" 
        />
        <div className="hidden md:flex items-center gap-8">
          <a className="text-secondary font-bold border-b border-secondary text-label-md" href="#">Home</a>
          <a className="text-on-surface hover:text-secondary transition-colors text-label-md" href="#">Products</a>
          <a className="text-on-surface hover:text-secondary transition-colors text-label-md" href="#">HoReCa</a>
          <a className="text-on-surface hover:text-secondary transition-colors text-label-md" href="#">Weddings</a>
          <a className="text-on-surface hover:text-secondary transition-colors text-label-md" href="#">Corporate</a>
        </div>
        <button className="bg-secondary text-on-secondary px-6 py-2 text-label-md active:scale-95 transition-transform">
          Request Tasting Kit
        </button>
      </div>
    </nav>
  );
}
