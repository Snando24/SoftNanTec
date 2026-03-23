import React from 'react';
import { Youtube, PlayCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechInsights = () => {
  return (
    <section className="py-32 bg-brand-900/20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-4">
              <Youtube size={16} /> SoftNanTec Insights
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-8 ml-1">
              Contenido técnico basado en proyectos reales de SoftNanTec
            </p>
            
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 font-display tracking-tight leading-tight">
              Construimos y compartimos <span className="text-red-500 text-glow-red">ingeniería real</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 font-light leading-relaxed">
              Mostramos cómo diseñamos, construimos y escalamos soluciones reales de software, incluyendo arquitecturas backend, sistemas distribuidos y buenas prácticas de ingeniería.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                "Arquitecturas backend utilizadas en entornos reales",
                "Diseño de APIs escalables y seguras",
                "Resolución de problemas de ingeniería complejos",
                "Buenas prácticas en sistemas distribuidos"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center border border-red-600/20 group-hover:bg-red-600/20 transition-all">
                    <PlayCircle className="text-red-500 shrink-0" size={18} />
                  </div>
                  <span className="text-lg text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-10 py-5 rounded-full font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-3 w-fit shadow-xl shadow-red-900/20">
                Explorar contenido técnico <ArrowUpRight size={20} />
              </a>
              <div className="max-w-[200px]">
                <p className="text-sm text-slate-400 font-medium leading-snug">
                  ¿Quieres implementar algo similar en tu empresa? <Link to="/contacto" className="text-red-500 font-bold hover:underline">Contáctanos</Link>
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video bg-slate-900 rounded-[2.5rem] border border-white/10 overflow-hidden relative group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-2xl shadow-red-600/40">
                  <PlayCircle size={48} className="text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-brand-950 to-transparent">
                <p className="text-white font-bold text-lg mb-1 italic">Caso práctico: Arquitectura de microservicios</p>
                <p className="text-red-500 text-sm font-bold uppercase tracking-widest">Ver análisis completo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechInsights;
