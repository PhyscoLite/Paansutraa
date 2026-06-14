import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-secondary/20 shadow-[0_4px_20px_rgba(212,175,55,0.1)]">
      <div className="flex justify-between items-center w-full px-5 md:px-margin-desktop max-w-container-max mx-auto h-24">
        <Link to="/">
          <img 
            src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1781452071/paansutraa_logo_cj3lgx.png" 
            alt="Paansutraa Logo" 
            className="h-[60px] md:h-[72px] w-auto object-contain" 
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={(location.pathname === '/' ? 'text-secondary font-bold border-b border-secondary' : 'text-on-surface hover:text-secondary transition-colors') + ' text-label-md pb-1'}>
            Home
          </Link>
          <Link to="/about" className={(location.pathname === '/about' ? 'text-secondary font-bold border-b border-secondary' : 'text-on-surface hover:text-secondary transition-colors') + ' text-label-md pb-1'}>
            About Us
          </Link>
          <Link to="/products" className={(location.pathname === '/products' ? 'text-secondary font-bold border-b border-secondary' : 'text-on-surface hover:text-secondary transition-colors') + ' text-label-md pb-1'}>
            Products
          </Link>
          <Link to="/horeca" className={(location.pathname === '/horeca' ? 'text-secondary font-bold border-b border-secondary' : 'text-on-surface hover:text-secondary transition-colors') + ' text-label-md pb-1'}>
            HoReCa
          </Link>
          <Link to="/weddings" className={(location.pathname === '/weddings' ? 'text-secondary font-bold border-b border-secondary' : 'text-on-surface hover:text-secondary transition-colors') + ' text-label-md pb-1'}>
            Weddings
          </Link>
          <Link to="/corporate" className={(location.pathname === '/corporate' ? 'text-secondary font-bold border-b border-secondary' : 'text-on-surface hover:text-secondary transition-colors') + ' text-label-md pb-1'}>
            Corporate
          </Link>
        </div>
        <Link to="/order" className="bg-secondary text-on-secondary px-6 py-2 text-label-md active:scale-95 transition-transform flex items-center justify-center">
          Request Tasting Kit
        </Link>
      </div>
    </nav>
  );
}
