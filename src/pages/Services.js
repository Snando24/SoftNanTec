import { CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../config/services';
import { getProject } from '../config/projects';
import ServiceIcon from '../components/common/ServiceIcon';
import StatusBadge from '../components/projects/StatusBadge';
import usePageMeta from '../hooks/usePageMeta';

const Services = () => {
  usePageMeta({
    title: 'Servicios | SoftNanTec',
    description:
      'Automatización de documentos, sistemas de gestión a medida, páginas web y tiendas en línea, apps de escritorio y móviles, automatización e integraciones.',
    path: '/servicios',
  });

  return (
    <div className="pt-36 pb-24 bg-brand-950 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4">Servicios</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 font-display tracking-tight leading-tight">
            Software hecho para <span className="neon-text-gradient">cómo trabaja</span> su negocio
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Cada servicio está respaldado por proyectos reales. Elija el que más se parece a su caso o cuéntenos el suyo.
          </p>
        </div>

        {/* Índice rápido */}
        <nav aria-label="Servicios" className="flex flex-wrap gap-2 mb-20">
          {SERVICES.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="px-4 py-2 rounded-full border border-white/10 text-sm text-slate-300 hover:border-brand-green/40 hover:text-white transition-colors">
              {s.title}
            </a>
          ))}
        </nav>

        <div className="space-y-6">
          {SERVICES.map((service) => {
            const related = service.projects.map(getProject).filter(Boolean);
            return (
              <section
                key={service.id}
                id={service.id}
                className="grid lg:grid-cols-12 gap-10 p-8 lg:p-12 rounded-3xl border border-white/5 bg-brand-900/30"
              >
                <div className="lg:col-span-7">
                  <div className="mb-6 p-3.5 bg-brand-green/10 rounded-xl w-fit">
                    <ServiceIcon name={service.icon} size={26} className="text-brand-green" />
                  </div>
                  <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-display">{service.title}</h2>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">{service.long}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-brand-green shrink-0" />
                        <span className="text-slate-300 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contacto" className="inline-flex items-center gap-2 text-brand-green font-bold group">
                    Solicitar una propuesta <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Lo hemos hecho en</p>
                  <div className="space-y-3">
                    {related.map((p) => (
                      <Link
                        key={p.id}
                        to={`/proyectos#${p.id}`}
                        className="group block p-5 rounded-2xl bg-brand-950/70 border border-white/5 hover:border-brand-green/30 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="text-white font-bold font-display">{p.title}</span>
                          <StatusBadge status={p.status} />
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed mb-3">{p.summary}</p>
                        <span className="text-xs font-bold text-brand-green inline-flex items-center gap-1">
                          Ver caso <ArrowUpRight size={14} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
