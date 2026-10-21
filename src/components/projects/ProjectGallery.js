import { useState } from 'react';
import ProjectVisual from './ProjectVisual';

// Imagen principal del proyecto con miniaturas para cambiar de captura.
const ProjectGallery = ({ project }) => {
  const items = project.gallery?.length ? project.gallery : null;
  const [active, setActive] = useState(0);

  if (!items) {
    return <ProjectVisual project={project} className="aspect-[16/10] w-full" />;
  }

  const current = items[active];

  return (
    <figure>
      <a href={current.src} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar: ${current.caption} (se abre en una pestaña nueva)`}>
        <ProjectVisual project={project} src={current.src} alt={current.caption} className="aspect-[16/10] w-full hover:border-brand-green/40 transition-colors" />
      </a>
      <figcaption className="mt-3 text-xs text-slate-400">{current.caption} · datos de demostración</figcaption>
      {items.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver captura: ${item.caption}`}
              aria-pressed={i === active}
              className={`overflow-hidden rounded-lg border transition-colors ${i === active ? 'border-brand-green' : 'border-white/10 hover:border-white/30'}`}
            >
              <img src={item.src} alt="" loading="lazy" className="w-full aspect-[16/10] object-cover object-left-top" />
            </button>
          ))}
        </div>
      )}
    </figure>
  );
};

export default ProjectGallery;
