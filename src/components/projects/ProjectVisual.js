import { FileText, GraduationCap, Boxes, Globe, Store, Bot } from 'lucide-react';

// Ilustración abstracta de cada tipo de proyecto (no es una captura real).
const VISUALS = {
  document: { Icon: FileText, label: 'Proforma N.º 0001', rows: ['Cliente', 'RUC', 'Ítems', 'Adelanto'], accent: 'PDF · Word' },
  education: { Icon: GraduationCap, label: 'Evaluación descriptiva', rows: ['Evidencia', 'Retroalimentación', 'Compromiso'], accent: 'Word' },
  inventory: { Icon: Boxes, label: 'Inventario', rows: ['Entradas', 'Salidas', 'Stock mínimo', 'Reportes'], accent: 'Excel · PDF' },
  web: { Icon: Globe, label: 'Sitio web', rows: ['Servicios', 'Proyectos', 'Cotizar'], accent: 'Web' },
  store: { Icon: Store, label: 'Tienda en línea', rows: ['Catálogo', 'Pedidos', 'Inventario'], accent: 'Multi-tienda' },
  automation: { Icon: Bot, label: 'Asistente', rows: ['Comando de voz', 'Intención', 'Rutina'], accent: 'IA · n8n' },
};

const ProjectVisual = ({ project, className = '', src, alt }) => {
  const image = src || project.image;
  if (image) {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-brand-900 ${className}`}>
        <img
          src={image}
          alt={alt || `Captura del proyecto ${project.title}`}
          loading="lazy"
          className="w-full h-full object-cover object-left-top"
        />
      </div>
    );
  }

  const v = VISUALS[project.visual] || VISUALS.document;
  const { Icon } = v;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-900 to-brand-950 bg-grid ${className}`}
      aria-hidden="true"
    >
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-green/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-sm rounded-xl border border-white/10 bg-brand-950/80 shadow-2xl">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green/60" />
            <span className="ml-3 text-[11px] text-slate-400 truncate">{v.label}</span>
          </div>
          <div className="p-4 space-y-2.5">
            {v.rows.map((row, i) => (
              <div key={row} className="flex items-center gap-3">
                <span className="text-[11px] text-slate-400 w-28 shrink-0 truncate">{row}</span>
                <span className="h-2 rounded-full bg-white/10 flex-1" style={{ maxWidth: `${90 - i * 12}%` }} />
              </div>
            ))}
            <div className="flex items-center justify-between pt-3 mt-1 border-t border-white/5">
              <Icon size={18} className="text-brand-green" />
              <span className="text-[11px] font-semibold text-brand-950 bg-brand-green rounded-md px-2 py-1">{v.accent}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVisual;
