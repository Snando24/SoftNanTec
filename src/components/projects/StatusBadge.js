const STYLES = {
  'En producción': 'bg-brand-green/10 text-brand-green border-brand-green/30',
  'En uso': 'bg-brand-green/10 text-brand-green border-brand-green/30',
  'En implementación': 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30',
  'En desarrollo': 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30',
  Laboratorio: 'bg-white/5 text-slate-300 border-white/15',
};

const StatusBadge = ({ status }) => (
  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold ${STYLES[status] || STYLES.Laboratorio}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-current" />
    {status}
  </span>
);

export default StatusBadge;
