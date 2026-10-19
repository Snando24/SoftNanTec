import { Link } from 'react-router-dom';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, SOCIAL } from '../../config/site';

const Footer = () => {
  const whatsappUrl = buildWhatsAppUrl(null);

  return (
    <footer className="py-20 border-t border-white/5 bg-brand-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logo96.png" 
                  alt="SoftNanTec Logo" 
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-display uppercase leading-none">SOFTNANTEC</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Construimos sistemas escalables de alto rendimiento. Arquitecturas modernas y APIs robustas para entornos de producción.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Navegación</span>
              <Link to="/servicios" className="text-sm text-slate-400 hover:text-brand-green transition-colors">Servicios</Link>
              <Link to="/proyectos" className="text-sm text-slate-400 hover:text-brand-green transition-colors">Proyectos</Link>
              <Link to="/sobre-nosotros" className="text-sm text-slate-400 hover:text-brand-green transition-colors">Sobre Nosotros</Link>
              <Link to="/contacto" className="text-sm text-slate-400 hover:text-brand-green transition-colors">Contáctanos</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Social</span>
              <div className="flex gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-green transition-all" title="WhatsApp" aria-label="WhatsApp de SoftNanTec (se abre en una pestaña nueva)"><MessageCircle size={20} /></a>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-green transition-all" title="Instagram" aria-label="Instagram de SoftNanTec (se abre en una pestaña nueva)"><Instagram size={20} /></a>
                <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-green transition-all" title="YouTube" aria-label="YouTube de SoftNanTec (se abre en una pestaña nueva)"><Youtube size={20} /></a>
              </div>
            </div>
          </div>

          <div className="text-right text-slate-400 text-xs">
            <p>© 2026 SoftNanTec Tech Consulting.</p>
            <p className="mb-2">
              <Link to="/privacidad" className="hover:text-brand-green transition-colors underline-offset-4 hover:underline">Política de Privacidad</Link>
            </p>
            <p>Construimos sistemas reales. Mostramos cómo lo hacemos.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
