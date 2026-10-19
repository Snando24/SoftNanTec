import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

const NotFound = () => {
  usePageMeta({
    title: 'Página no encontrada | SoftNanTec',
    description: 'La página que busca no existe o fue movida.',
    path: '/404',
    noindex: true,
  });

  return (
    <div className="pt-32 pb-20 bg-brand-950 min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-6">Error 404</p>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 font-display tracking-tight leading-tight">
            Página no <span className="neon-text-gradient">encontrada</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
            La página que busca no existe o fue movida. Puede volver al inicio o revisar nuestros servicios.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/" className="bg-brand-green text-brand-950 px-10 py-5 rounded-full font-bold text-lg inline-flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] transition-all">
              Volver al inicio <ArrowUpRight size={20} />
            </Link>
            <Link to="/servicios" className="px-10 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all text-center">
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
