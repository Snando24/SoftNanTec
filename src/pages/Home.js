import { ArrowUpRight, ArrowRight, CheckCircle2, Monitor, Smartphone, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildWhatsAppUrl, CONTACT } from '../config/site';
import { SERVICES } from '../config/services';
import { PROJECTS, FEATURED_PROJECT_IDS, getProject } from '../config/projects';
import ServiceIcon from '../components/common/ServiceIcon';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectVisual from '../components/projects/ProjectVisual';
import usePageMeta from '../hooks/usePageMeta';
// import TechInsights from '../components/sections/TechInsights'; // Activar cuando el canal de YT esté listo

const BEFORE_AFTER = [
  {
    before: 'Proformas armadas a mano en Word, una por una.',
    after: 'Formulario que genera la proforma en PDF o Word con su membrete.',
    project: 'proformas-tractotec',
  },
  {
    before: 'Inventario repartido en hojas de cálculo sin saber el stock real.',
    after: 'Entradas, salidas, alertas de stock mínimo y reportes en un solo sistema.',
    project: 'sisalmacen',
  },
  {
    before: 'Horas redactando evaluaciones de cada estudiante.',
    after: 'Borradores generados a partir de la observación, editables y listos en Word.',
    project: 'evaluacion-inicial',
  },
  {
    before: 'Un negocio que no aparece cuando lo buscan en internet.',
    after: 'Sitio web con panel propio y cotizaciones que llegan por WhatsApp.',
    project: 'tractotec-web',
  },
];

const STEPS = [
  { step: '01', title: 'Conversamos', desc: 'Nos cuenta cómo trabaja hoy y qué le quita tiempo. Revisamos sus documentos, hojas de cálculo y procesos reales.' },
  { step: '02', title: 'Proponemos', desc: 'Le presentamos qué vamos a construir, en qué plataforma (PC, celular o web) y en qué etapas.' },
  { step: '03', title: 'Construimos con entregas', desc: 'Le mostramos avances funcionando para que los pruebe y ajustemos sobre su uso real, no sobre supuestos.' },
  { step: '04', title: 'Instalamos y acompañamos', desc: 'Instalamos el sistema, cargamos sus datos, capacitamos a su equipo y seguimos disponibles para mejoras.' },
];

const Home = () => {
  usePageMeta({
    title: 'SoftNanTec | Software a medida para su negocio',
    description:
      'Desarrollamos sistemas, apps y páginas web a medida para negocios y profesionales: automatización de proformas y documentos, control de inventario, apps de escritorio y móviles. Huancayo, Perú.',
    path: '/',
  });

  const featured = FEATURED_PROJECT_IDS.map(getProject).filter(Boolean);
  const heroProjects = [getProject('proformas-tractotec'), getProject('sisalmacen')];

  return (
    <div className="bg-brand-950 text-slate-300 font-sans selection:bg-brand-green/30">
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-green/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs font-semibold mb-8">
                <MapPin size={14} className="text-brand-green" />
                Software a medida · {CONTACT.location}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-extrabold text-white mb-8 leading-[1.08] font-display tracking-tight">
                Software a medida que resuelve el <span className="neon-text-gradient">trabajo diario</span> de su negocio.
              </h1>

              <p className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
                Desarrollamos sistemas, apps y páginas web para negocios y profesionales: desde la proforma que hoy hace a mano hasta el control de su almacén.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green text-brand-950 px-8 py-4 rounded-full font-bold text-base hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  Cuéntenos su caso <ArrowUpRight size={18} />
                </a>
                <Link to="/proyectos" className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-base hover:bg-white/5 transition-all text-center">
                  Ver proyectos realizados
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {['Hablará directamente con quien desarrolla', 'Entregas que puede probar', 'Sus datos bajo su control'].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-brand-green" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block h-[440px]">
              <ProjectVisual project={heroProjects[0]} className="absolute top-0 right-0 w-[85%] h-64 shadow-2xl" />
              <ProjectVisual project={heroProjects[1]} className="absolute bottom-0 left-0 w-[85%] h-64 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Antes / después */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4">Problemas que ya resolvimos</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Del trabajo manual a un sistema que lo hace por usted
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {BEFORE_AFTER.map((item) => (
              <Link
                key={item.project}
                to={`/proyectos#${item.project}`}
                className="group grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] sm:items-center gap-4 p-6 rounded-2xl border border-white/5 bg-brand-900/30 hover:border-brand-green/30 transition-colors"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-2">Antes</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.before}</p>
                </div>
                <ArrowRight size={18} className="text-brand-green shrink-0 rotate-90 sm:rotate-0 sm:group-hover:translate-x-1 transition-transform" />
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-brand-green font-bold mb-2">Ahora</p>
                  <p className="text-sm text-white leading-relaxed">{item.after}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24 bg-brand-900/20 border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4">Qué hacemos</p>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-display tracking-tight">Soluciones para su forma de trabajar</h2>
            </div>
            <Link to="/servicios" className="text-brand-green font-bold flex items-center gap-2 group shrink-0">
              Ver todos los servicios <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                to={`/servicios#${s.id}`}
                className="group p-7 rounded-2xl bg-brand-950/60 border border-white/5 hover:border-brand-green/30 transition-colors"
              >
                <div className="mb-5 p-3 bg-brand-green/10 rounded-xl w-fit group-hover:bg-brand-green transition-colors">
                  <ServiceIcon name={s.icon} size={22} className="text-brand-green group-hover:text-brand-950 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.short}</p>
              </Link>
            ))}
            <div className="p-7 rounded-2xl border border-dashed border-white/10 flex flex-col justify-center">
              <p className="text-white font-bold mb-2 font-display">¿Su caso no está aquí?</p>
              <p className="text-sm text-slate-400 mb-4">Si una tarea se repite todos los días, probablemente se puede automatizar.</p>
              <Link to="/contacto" className="text-brand-green text-sm font-bold inline-flex items-center gap-1.5">
                Consúltenos <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4">Proyectos</p>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-display tracking-tight">Sistemas que ya están trabajando</h2>
            </div>
            <Link to="/proyectos" className="text-brand-green font-bold flex items-center gap-2 group shrink-0">
              Ver los {PROJECTS.length} proyectos <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Dónde funciona */}
      <section className="py-20 border-y border-white/5 bg-brand-900/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white font-display leading-tight">
              Su sistema, donde lo necesite
            </h2>
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
              {[
                { Icon: Monitor, title: 'Escritorio Windows', desc: 'Instalador propio; puede funcionar sin internet.' },
                { Icon: Smartphone, title: 'Celular', desc: 'App web instalable o APK para Android.' },
                { Icon: Globe, title: 'Web', desc: 'Acceso desde cualquier lugar, con usuarios y permisos.' },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <Icon size={22} className="text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{title}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4">Cómo trabajamos</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-display tracking-tight">De su problema a un sistema en uso</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((item) => (
              <div key={item.step} className="p-7 rounded-2xl glass">
                <span className="text-3xl font-black text-brand-green/40 mb-4 block font-display">{item.step}</span>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="rounded-3xl bg-brand-green text-brand-950 p-10 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-extrabold font-display leading-tight mb-4">¿Qué tarea le gustaría dejar de hacer a mano?</h2>
              <p className="text-base lg:text-lg font-medium opacity-80">Cuéntenos cómo trabaja hoy. Le respondemos con una propuesta concreta, sin compromiso.</p>
            </div>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-950 text-white px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-white hover:text-brand-950 transition-all shrink-0"
            >
              Escribir por WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      {/* <TechInsights /> */}
    </div>
  );
};

export default Home;
