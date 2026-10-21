import { MessagesSquare, ClipboardCheck, ShieldCheck, Wrench, ArrowUpRight, FileCode2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../config/site';
import { PROJECTS } from '../config/projects';
import usePageMeta from '../hooks/usePageMeta';

const PRINCIPLES = [
  {
    Icon: MessagesSquare,
    title: 'Trato directo',
    desc: 'Hablará con quien diseña y programa su sistema, sin intermediarios. Las dudas se resuelven rápido y nada se pierde en el camino.',
  },
  {
    Icon: Wrench,
    title: 'Hecho para su proceso',
    desc: 'No adaptamos su negocio a un software genérico: partimos de sus documentos, formatos y forma de trabajar.',
  },
  {
    Icon: ShieldCheck,
    title: 'Sus datos, bajo su control',
    desc: 'Contraseñas cifradas, copias de seguridad y, cuando conviene, sistemas que funcionan en su propia computadora sin depender de internet.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Documentado y probado',
    desc: 'Definimos requerimientos y reglas antes de programar, y probamos cada entrega. Su sistema no depende de la memoria de una sola persona.',
  },
];

const About = () => {
  usePageMeta({
    title: 'Sobre Nosotros | SoftNanTec',
    description:
      'SoftNanTec es un estudio de desarrollo de software a medida en Huancayo, Perú. Construimos sistemas, apps y páginas web para resolver problemas reales de negocios y profesionales.',
    path: '/sobre-nosotros',
  });

  const clientProjects = PROJECTS.filter((p) => p.group === 'client').length;

  return (
    <div className="pt-36 pb-24 bg-brand-950 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Hero */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs font-semibold mb-8">
            <MapPin size={14} className="text-brand-green" /> {CONTACT.location}
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.08] font-display tracking-tight">
            Software que se usa <span className="neon-text-gradient">todos los días</span>, no solo en la presentación
          </h1>
          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl">
            SoftNanTec es un estudio de desarrollo de software a medida. Trabajamos con negocios y profesionales que pierden tiempo en tareas repetitivas o en información desordenada, y construimos la herramienta exacta que necesitan.
          </p>
        </div>

        {/* Historia */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-28">
          <div>
            <div className="w-14 h-1 bg-brand-green mb-8" />
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 font-display tracking-tight leading-tight text-white">
              Empezamos por el problema, no por la tecnología
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-5">
              Un taller que armaba cada proforma a mano. Docentes que pasaban horas redactando evaluaciones. Un almacén controlado con hojas de cálculo sueltas. Así nacieron nuestros proyectos: escuchando cómo trabaja cada cliente y construyendo una solución que encaje en su día a día.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Elegimos la plataforma según el caso: una app de escritorio que funcione sin internet, una app en el celular para quien trabaja en campo o una plataforma web para atender clientes en línea.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="p-7 rounded-2xl glass">
              <p className="text-4xl font-black text-white font-display mb-2">{clientProjects}</p>
              <p className="text-sm text-slate-400">proyectos para clientes publicados en nuestro portafolio</p>
            </div>
            <div className="p-7 rounded-2xl glass">
              <p className="text-4xl font-black text-white font-display mb-2">3</p>
              <p className="text-sm text-slate-400">plataformas: escritorio, celular y web</p>
            </div>
            <div className="col-span-2 p-7 rounded-2xl border border-white/5 bg-brand-900/30">
              <div className="flex items-center gap-3 mb-3">
                <FileCode2 size={20} className="text-brand-green" />
                <p className="text-white font-bold">Con qué construimos</p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Python, TypeScript, Java, React, Node.js, Electron, Qt, Spring Boot, Supabase / PostgreSQL y SQLite. Usamos la herramienta adecuada para cada problema, no siempre la misma.
              </p>
            </div>
          </div>
        </div>

        {/* Principios */}
        <div className="mb-28">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4">Cómo trabajamos</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-display tracking-tight">Lo que puede esperar de nosotros</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRINCIPLES.map(({ Icon, title, desc }) => (
              <div key={title} className="p-7 rounded-2xl bg-brand-900/30 border border-white/5">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-5 border border-brand-green/20">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratorio */}
        <div className="mb-28 p-8 lg:p-12 rounded-3xl border border-white/5 bg-brand-900/20 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4">Productos propios</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white font-display mb-4">También construimos lo nuestro</h2>
            <p className="text-slate-400 leading-relaxed">
              StoreOS, nuestra plataforma para tiendas en línea, y JarvisTec, nuestro laboratorio de automatización e IA, son donde probamos nuevas ideas antes de ofrecerlas a clientes.
            </p>
          </div>
          <Link to="/proyectos" className="justify-self-start lg:justify-self-end text-brand-green font-bold inline-flex items-center gap-2 group">
            Ver proyectos <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-8 font-display">¿Tiene un proceso que quiere ordenar?</h2>
          <Link to="/contacto" className="bg-brand-green text-brand-950 px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] transition-all inline-flex items-center gap-2">
            Conversemos sobre su proyecto <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
