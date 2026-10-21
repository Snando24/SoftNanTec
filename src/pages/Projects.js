import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../config/projects';
import ProjectGallery from '../components/projects/ProjectGallery';
import StatusBadge from '../components/projects/StatusBadge';
import usePageMeta from '../hooks/usePageMeta';

const FILTERS = [
  { key: 'all', label: 'Todos' },
  { key: 'client', label: 'Para clientes' },
  { key: 'product', label: 'Productos propios' },
];

const Projects = () => {
  usePageMeta({
    title: 'Proyectos | SoftNanTec',
    description:
      'Proyectos de SoftNanTec: generador de proformas, sistema de evaluación descriptiva, sistema de almacén, sitios web, la plataforma StoreOS y el laboratorio JarvisTec.',
    path: '/proyectos',
  });

  const [filter, setFilter] = useState('all');
  const visible = PROJECTS.filter((p) => filter === 'all' || p.group === filter);

  return (
    <div className="pt-36 pb-24 bg-brand-950 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-12">
          <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4">Proyectos</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 font-display tracking-tight leading-tight">
            Lo que hemos <span className="neon-text-gradient">construido</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Cada proyecto empezó con un problema concreto de un negocio o profesional. Aquí está el problema, lo que construimos y en qué estado se encuentra.
          </p>
        </div>

        <div role="group" aria-label="Filtrar proyectos" className="flex flex-wrap gap-2 mb-14">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                filter === f.key
                  ? 'bg-brand-green text-brand-950 border-brand-green'
                  : 'border-white/10 text-slate-300 hover:border-brand-green/40 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {visible.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 p-6 lg:p-10 rounded-3xl border border-white/5 bg-brand-900/30"
            >
              <div className="lg:col-span-5">
                <ProjectGallery project={project} />
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.platforms.map((pl) => (
                    <span key={pl} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                      <Monitor size={12} className="text-brand-green" /> {pl}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-brand-green font-bold text-xs uppercase tracking-widest">{project.category}</span>
                  <StatusBadge status={project.status} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-2 font-display">{project.title}</h2>
                <p className="text-sm text-slate-400 mb-6">
                  {project.group === 'client' ? 'Cliente: ' : ''}
                  {project.client}
                </p>

                <dl className="space-y-5 mb-6">
                  <div>
                    <dt className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-1.5">El problema</dt>
                    <dd className="text-slate-300 leading-relaxed">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-widest text-brand-green font-bold mb-1.5">Lo que construimos</dt>
                    <dd className="text-slate-300 leading-relaxed">{project.solution}</dd>
                  </div>
                </dl>

                <ul className="grid sm:grid-cols-2 gap-2.5 mb-6">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-green font-bold group"
                  >
                    Ver en vivo <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 p-10 lg:p-16 glass rounded-3xl text-center">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 font-display">¿Su negocio tiene un problema parecido?</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Cuéntenos cómo lo resuelve hoy y le proponemos una solución a su medida.
          </p>
          <Link to="/contacto" className="bg-brand-green text-brand-950 px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] transition-all inline-flex items-center gap-2">
            Hablemos de su proyecto <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
