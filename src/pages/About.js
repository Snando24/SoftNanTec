import React from 'react';
import { Users, Building2, CheckCircle2, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-32 pb-20 bg-brand-950 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="max-w-4xl mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            Ingeniería de Clase Mundial
          </div>
          <h1 className="text-5xl lg:text-[5.5rem] font-extrabold text-white mb-8 leading-[1.05] font-display tracking-tight">
            Nuestra <span className="neon-text-gradient">Filosofía</span> es la Ingeniería de Alto Rendimiento
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl">
            SoftNanTec nace con un propósito claro: construir sistemas escalables de alto rendimiento. Diseñamos arquitecturas modernas y APIs robustas para entornos de producción.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden relative group shadow-2xl border border-white/5">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center grayscale opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl hidden sm:block max-w-[320px] shadow-2xl border border-white/10">
              <p className="text-brand-green font-bold mb-2 uppercase text-[10px] tracking-widest italic">Engineering Lab</p>
              <p className="text-white text-lg font-bold leading-snug">"No solo desarrollamos software — mostramos cómo lo hacemos."</p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <div className="w-16 h-1 bg-brand-green mb-8"></div>
              <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 font-display tracking-tight leading-tight text-white">Ingeniería Real, <br />No Solo Presentaciones</h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                En SoftNanTec, nos enfocamos en el código y la arquitectura que funciona en producción. Creemos en la transparencia técnica y en la toma de decisiones basada en datos y principios de ingeniería sólidos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-8 glass rounded-3xl border border-white/5 hover:border-brand-green/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 border border-brand-green/20">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white font-display">Talento Senior</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">Equipos compuestos por expertos en arquitectura y sistemas distribuidos.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-8 glass rounded-3xl border border-white/5 hover:border-brand-green/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 border border-brand-green/20">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white font-display">Enfoque en Resultados</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">Procesos optimizados que priorizan impacto real sin fricción innecesaria.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-24 bg-brand-900/20 rounded-[4rem] px-8 lg:px-20 border border-white/5 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-bold uppercase tracking-widest mb-6">
              Nuestros Pilares
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 font-display tracking-tight">Principios de Ingeniería Real</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Rendimiento", desc: "Optimizamos cada proceso para garantizar una latencia mínima y una eficiencia máxima en entornos de alta demanda." },
              { title: "Escalabilidad", desc: "Diseñamos arquitecturas preparadas para el crecimiento masivo desde el primer día, evitando cuellos de botella." },
              { title: "Mantenibilidad", desc: "Escribimos código limpio, documentado y modular que facilita la evolución continua del sistema." },
              { title: "Resiliencia", desc: "Construimos sistemas tolerantes a fallos con patrones de recuperación automática y alta disponibilidad." }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-3xl bg-brand-950/40 border border-white/5 hover:border-brand-green/20 transition-all group">
                <div className="w-12 h-12 bg-brand-green/5 rounded-2xl flex items-center justify-center mb-6 border border-brand-green/10 group-hover:bg-brand-green/10 transition-colors">
                  <CheckCircle2 className="text-brand-green" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-display">{value.title}</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiation Section */}
        <div className="mb-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 font-display tracking-tight leading-tight">¿Qué Nos Diferencia?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Arquitectura desde el Inicio", 
                desc: "No añadimos escalabilidad al final; la diseñamos en el núcleo de cada solución que construimos." 
              },
              { 
                title: "Transparencia Técnica", 
                desc: "Compartimos nuestros procesos y decisiones de ingeniería a través de nuestro Engineering Lab (SoftNanTec Insights)." 
              },
              { 
                title: "Ejecución Eficiente", 
                desc: "Eliminamos la burocracia innecesaria para centrarnos en lo que importa: entregar software de alta calidad." 
              }
            ].map((item, i) => (
              <div key={i} className="relative p-10 glass rounded-3xl border border-white/5 hover:bg-brand-green/5 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 font-display">{item.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-20">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-10 font-display">¿Listo para unirse a <br />nuestra red?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contacto" className="w-full sm:w-auto bg-brand-green text-brand-950 px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] transition-all flex items-center justify-center gap-3">
              Hablar con un Experto <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
