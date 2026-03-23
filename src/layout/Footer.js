import { Link } from 'react-router-dom';
import { Code2, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const phoneNumber = "34912345678";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <footer className="py-20 border-t border-white/5 bg-brand-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/Logo_Madre.png" 
                  alt="SoftNanTec Logo" 
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-display uppercase leading-none">SOFTNANTEC</span>
            </Link>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Construimos sistemas escalables de alto rendimiento. Arquitecturas modernas y APIs robustas para entornos de producción.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Navegación</span>
              <Link to="/servicios" className="text-sm text-slate-500 hover:text-brand-green transition-colors">Servicios</Link>
              <Link to="/proyectos" className="text-sm text-slate-500 hover:text-brand-green transition-colors">Proyectos</Link>
              <Link to="/sobre-nosotros" className="text-sm text-slate-500 hover:text-brand-green transition-colors">Sobre Nosotros</Link>
              <Link to="/contacto" className="text-sm text-slate-500 hover:text-brand-green transition-colors">Contáctanos</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Social</span>
              <div className="flex gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-green transition-all" title="WhatsApp"><MessageCircle size={20} /></a>
                <a href="https://instagram.com/softnantec" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-green transition-all" title="Instagram"><Instagram size={20} /></a>
                <a href="https://youtube.com/@softnantec" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-green transition-all" title="YouTube"><Youtube size={20} /></a>
              </div>
            </div>
          </div>

          <div className="text-right text-slate-500 text-xs">
            <p>© 2026 SoftNanTec Tech Consulting.</p>
            <p>Construimos sistemas reales. Mostramos cómo lo hacemos.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
