import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectVisual from './ProjectVisual';
import StatusBadge from './StatusBadge';

// Tarjeta compacta de proyecto (Inicio y Servicios).
const ProjectCard = ({ project }) => (
  <Link
    to={`/proyectos#${project.id}`}
    className="group flex flex-col rounded-2xl border border-white/5 bg-brand-900/40 hover:border-brand-green/30 hover:bg-brand-900/70 transition-colors overflow-hidden"
  >
    <ProjectVisual project={project} className="aspect-[16/10] rounded-none border-0 border-b" />
    <div className="flex flex-col flex-1 p-6">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-xs font-semibold text-slate-400">{project.category}</span>
        <StatusBadge status={project.status} />
      </div>
      <h3 className="text-xl font-bold text-white font-display mb-2">{project.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed flex-1">{project.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-green">
        Ver caso <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
    </div>
  </Link>
);

export default ProjectCard;
