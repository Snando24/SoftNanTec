import { ExternalLink, Globe, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

const Projects = () => {
  usePageMeta({
    title: "Proyectos | SoftNanTec",
    description: "Proyectos de software diseñados y desarrollados por SoftNanTec para sus clientes.",
    path: "/proyectos",
  });

  const projects = [
    {
      title: "TractoTec",
      category: "Sitio Web Corporativo",
      description: "Sitio web corporativo para TractoTec Servicios Generales, taller de Huancayo especializado en traccionamiento de chasis, fabricación industrial y mantenimiento de maquinaria pesada. Incluye catálogo de servicios, portafolio de trabajos con página de detalle y galería de imágenes, panel de administración para que el cliente publique sus proyectos y formulario de cotización que envía la solicitud por WhatsApp. Optimizado para posicionamiento local y dispositivos móviles.",
      image: "/images/projects/tractotec.jpg",
      link: "https://www.tractotec.com",
      tags: ["React", "Vite", "Tailwind CSS", "Supabase", "Vercel"],
      icon: <Globe className="text-brand-green" size={24} />
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-brand-950 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 font-display tracking-tight leading-tight">
            Proyectos <span className="neon-text-gradient">Realizados</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            Proyectos de software que hemos diseñado y desarrollado para nuestros clientes, con enlace al resultado en producción.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, index) => (
            <div key={project.title} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Column */}
              <div className="lg:w-1/2 w-full group relative overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl">
                <div className="aspect-video bg-slate-900">
                  <img 
                    src={project.image} 
                    alt={`Proyecto ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-8 right-8 bg-white text-brand-950 p-4 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-brand-green"
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>

              {/* Info Column */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-brand-green/10 rounded-xl">
                    {project.icon}
                  </div>
                  <span className="text-brand-green font-bold text-sm uppercase tracking-widest">{project.category}</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 font-display">{project.title}</h2>
                <p className="text-xl text-slate-400 mb-8 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-green font-bold text-lg group"
                  >
                    Ver Proyecto en Vivo <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ) : (
                  <span className="text-slate-400 font-bold text-lg italic">Proyecto bajo acuerdo de confidencialidad</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-40 p-12 lg:p-20 glass rounded-[3rem] text-center border border-white/5">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 font-display">¿Tiene un proyecto en mente?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
            Cuéntenos su idea y le ayudaremos a definir la mejor solución técnica.
          </p>
          <Link to="/contacto" className="bg-brand-green text-brand-950 px-12 py-5 rounded-full font-bold text-xl hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] transition-all inline-flex items-center gap-3">
            Hablemos de su proyecto <ArrowUpRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
