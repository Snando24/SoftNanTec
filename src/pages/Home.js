import React from 'react';
import { 
  ArrowUpRight, 
  Code2, 
  BarChart3, 
  Layers, 
  Cloud, 
  Shield, 
  Search,
  CheckCircle2,
  Users,
  Building2,
  Mail,
  Phone,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
// import TechInsights from '../components/TechInsights'; // Activar cuando el canal de YT esté listo

const Home = () => {
  const services = [
    {
      title: "Desarrollo de APIs & Backend",
      description: "Soluciones de alto rendimiento con arquitecturas modernas preparadas para el tráfico global.",
      icon: <Code2 className="w-6 h-6 text-brand-green" />,
      features: ["Arquitecturas Cloud-Native", "Microservicios", "Escalabilidad Horizontal"]
    },
    {
      title: "Diseño de Arquitectura",
      description: "Estructuras de software robustas y resilientes diseñadas para el crecimiento sostenible de su negocio.",
      icon: <Layers className="w-6 h-6 text-brand-green" />,
      features: ["System Design", "Scalability Roadmap", "Resilience Patterns"]
    },
    {
      title: "Modernización de Sistemas",
      description: "Transformamos infraestructuras legacy en ecosistemas modernos, eficientes y mantenibles.",
      icon: <BarChart3 className="w-6 h-6 text-brand-green" />,
      features: ["Legacy Refactoring", "Cloud Migration", "Tech Debt Reduction"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-950 text-slate-300 font-sans selection:bg-brand-green/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              Ingeniería de Software • Arquitectura Escalable
            </div>
            
            <h1 className="text-5xl lg:text-[5.5rem] font-extrabold text-white mb-8 leading-[1.05] font-display tracking-tight">
              Construimos sistemas <span className="neon-text-gradient">escalables</span> de alto rendimiento.
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl font-light">
              Soluciones diseñadas para escalar, mantenerse resilientes y operar de forma eficiente en producción.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <a 
                href="https://wa.me/34912345678?text=Hola%20SoftNanTec%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20tecnol%C3%B3gica%20para%20mi%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-green text-brand-950 px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] transition-all flex items-center justify-center gap-3"
              >
                Solicitar Consulta <ArrowUpRight size={20} />
              </a>
              <Link to="/servicios" className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all text-center">
                Ver cómo trabajamos
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {[
                "Enfoque en producción real",
                "Arquitecturas escalables desde el inicio",
                "Ingeniería orientada a resultados"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                  <CheckCircle2 size={16} className="text-brand-green" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-24 bg-brand-900/10 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-bold uppercase tracking-widest mb-6">
                Nuestro Enfoque
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-display leading-tight">Principios de Ingeniería Real</h2>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Rendimiento", desc: "Latencia mínima en cada proceso." },
                { label: "Escalabilidad", desc: "Preparado para el crecimiento masivo." },
                { label: "Mantenibilidad", desc: "Código limpio y documentado." },
                { label: "Resiliencia", desc: "Sistemas tolerantes a fallos." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="h-1 w-12 bg-brand-green/30"></div>
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">{item.label}</h4>
                  <p className="text-sm text-slate-500 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-brand-900/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Proyectos Entregados", value: "150+" },
              { label: "Tasa de Retención", value: "98%" },
              { label: "Expertos IT", value: "45+" },
              { label: "Países de Impacto", value: "12" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2 font-display">{stat.value}</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 bg-brand-950 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 font-display tracking-tight">Nuestro Proceso de Ingeniería</h2>
            <p className="text-xl text-slate-400 font-light">Metodología rigurosa diseñada para garantizar la entrega de software de alta calidad en tiempos competitivos.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Descubrimiento", desc: "Análisis profundo de sus necesidades de negocio y objetivos tecnológicos." },
              { step: "02", title: "Arquitectura", desc: "Diseño de soluciones escalables bajo estándares internacionales de ingeniería." },
              { step: "03", title: "Desarrollo Ágil", desc: "Ciclos de iteración rápida con entregas continuas y feedback constante." },
              { step: "04", title: "Despliegue & QA", desc: "Pruebas exhaustivas y lanzamiento optimizado en entornos de producción." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 glass rounded-3xl group hover:border-brand-green/30 transition-all duration-500">
                <span className="text-5xl font-black text-brand-green/20 group-hover:text-brand-green/40 transition-colors mb-6 block font-display">{item.step}</span>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 bg-brand-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 font-display tracking-tight">Capacidades Estratégicas</h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed">Ofrecemos un enfoque holístico para resolver desafíos tecnológicos complejos mediante metodologías ágiles y tecnología de punta.</p>
            </div>
            <Link to="/servicios" className="text-brand-green font-bold flex items-center gap-2 group">
              Ver Catálogo Completo <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-10 rounded-[2rem] bg-brand-900/40 border border-white/5 hover:border-brand-green/30 hover:bg-brand-900/60 transition-all duration-500">
                <div className="mb-8 p-4 bg-brand-green/10 rounded-2xl w-fit group-hover:bg-brand-green transition-colors duration-500">
                  <div className="group-hover:text-brand-950 transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-display">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 font-light">{service.description}</p>
                <div className="space-y-3 pt-6 border-t border-white/5">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-brand-green" />
                      <span className="text-sm text-slate-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-32 bg-brand-900/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 font-display tracking-tight">¿A Quién Ayudamos?</h2>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">Soluciones de ingeniería adaptadas a diferentes escalas y desafíos técnicos.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Empresas Enterprise", 
                desc: "Diseñamos sistemas robustos y escalables capaces de soportar operaciones críticas a nivel global.",
                icon: <Building2 className="w-8 h-8 text-brand-green" />
              },
              { 
                title: "Startups en Crecimiento", 
                desc: "Construimos una base técnica sólida que permite escalar el producto sin fricciones técnicas futuras.",
                icon: <ArrowUpRight className="w-8 h-8 text-brand-green" />
              },
              { 
                title: "Equipos Técnicos", 
                desc: "Acompañamos a departamentos de IT en la modernización de su arquitectura y adopción de mejores prácticas.",
                icon: <Users className="w-8 h-8 text-brand-green" />
              }
            ].map((item, i) => (
              <div key={i} className="p-10 glass rounded-[2.5rem] border border-white/5 hover:border-brand-green/30 transition-all group">
                <div className="mb-8 p-4 bg-brand-green/10 rounded-2xl w-fit group-hover:bg-brand-green group-hover:text-brand-950 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-display">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto glass rounded-[3rem] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 p-12 lg:p-20 bg-brand-green text-brand-950">
                <h2 className="text-4xl font-extrabold mb-8 font-display leading-tight">Iniciemos una <br />Conversación</h2>
                <p className="text-lg mb-12 font-medium opacity-80">Estamos listos para analizar sus desafíos tecnológicos y proponer soluciones de alto impacto.</p>
                <a 
                  href="https://wa.me/34912345678?text=Hola%20SoftNanTec%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20tecnol%C3%B3gica%20para%20mi%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-950 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-white hover:text-brand-950 transition-all"
                >
                  Contactar Ahora <ChevronRight size="20" />
                </a>
              </div>
              <div className="lg:w-3/5 p-12 lg:p-20 flex items-center justify-center text-center">
                <div className="max-w-md">
                  <h3 className="text-3xl font-bold text-white mb-6 font-display">¿Listo para escalar?</h3>
                  <p className="text-slate-400 font-light mb-10 leading-relaxed">Únase a las empresas que ya están transformando sus industrias con nuestra ingeniería de software.</p>
                  <Link to="/sobre-nosotros" className="text-brand-green font-bold flex items-center justify-center gap-2 group">
                    Conoce más sobre nosotros <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SoftNanTec Insights Section - Ready but deactivated (See components/TechInsights.js) */}
      {/* <TechInsights /> */}
    </div>
  );
};

export default Home;
