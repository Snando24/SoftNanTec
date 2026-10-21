import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../config/site';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || location.pathname !== '/' ? 'glass py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
            <img 
              src="/logo96.png" 
              alt="SoftNanTec Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white font-display uppercase leading-none">SOFTNANTEC</span>
            <span className="text-[10px] text-brand-green font-bold tracking-[0.2em] uppercase">Software a medida</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-brand-green' : 'text-slate-400 hover:text-white'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contacto" className="bg-brand-green text-brand-950 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white transition-all duration-300 shadow-lg">
            Contáctenos
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full glass border-t border-white/5 py-8 px-6 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`block text-xl font-semibold ${location.pathname === item.path ? 'text-brand-green' : 'text-white'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contacto" className="block bg-brand-green text-brand-950 px-5 py-4 rounded-xl text-center font-bold uppercase">
            Contáctenos
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
