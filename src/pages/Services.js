import React from 'react';
import { 
  Code2, 
  BarChart3, 
  Layers, 
  Cloud, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Desarrollo de APIs & Backend",
      id: "api-backend",
      description: "Sistemas críticos diseñados para la escalabilidad global.",
      longDescription: "Construimos el motor de su negocio con arquitecturas de alto rendimiento (Go, Node.js, Rust) capaces de procesar volúmenes masivos de datos con latencia mínima.",
      icon: <Code2 size={32} className="text-brand-green" />,
      features: [
        "Arquitecturas de Microservicios",
        "APIs RESTful & GraphQL de alta disponibilidad",
        "Integración de sistemas complejos",
        "Optimización de bases de datos masivas"
      ]
    },
    {
      title: "Diseño de Arquitectura",
      id: "architecture",
      description: "Estructuras resilientes preparadas para el crecimiento.",
      longDescription: "Diseñamos el plano técnico de su éxito. Creamos infraestructuras de software que no solo resuelven los problemas de hoy, sino que están preparadas para escalar sin límites mañana.",
      icon: <Layers size={32} className="text-brand-green" />,
      features: [
        "System Design & Scalability Planning",
        "Patrones de Resiliencia y Tolerancia a Fallos",
        "Estrategias de Cloud-Native Architecture",
        "Auditoría y Optimización de Arquitectura"
      ]
    },
    {
      title: "Consultoría Técnica Senior",
      id: "consulting",
      description: "Resolución de desafíos técnicos de alta complejidad.",
      longDescription: "Actuamos como su brazo de ingeniería extendido. Acompañamos a su equipo en la toma de decisiones críticas y en la resolución de cuellos de botella técnicos extremos.",
      icon: <BarChart3 size={32} className="text-brand-green" />,
      features: [
        "Tech Stack Advisory",
        "Optimización de Performance Crítica",
        "Mentoría y Mejores Prácticas de Ingeniería",
        "Evaluación de Factibilidad Tecnológica"
      ]
    },
    {
      title: "Modernización de Sistemas",
      id: "modernization",
      description: "Transformación digital de plataformas legacy.",
      longDescription: "Llevamos sus sistemas antiguos al futuro. Refactorizamos y migramos infraestructuras monolíticas hacia ecosistemas modernos, eficientes y fáciles de mantener.",
      icon: <Cloud size={32} className="text-brand-green" />,
      features: [
        "Refactorización de Código Monolítico",
        "Migración Segura a la Nube",
        "Reducción de Deuda Técnica",
        "Implementación de CI/CD Moderno"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-brand-950 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 font-display tracking-tight">
            Nuestras <span className="neon-text-gradient">Capacidades</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Ofrecemos un abanico completo de soluciones tecnológicas diseñadas para resolver los desafíos más complejos de las empresas modernas.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="mb-8 p-6 bg-brand-green/10 rounded-3xl w-fit">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 font-display">{service.title}</h2>
                <p className="text-xl text-slate-400 mb-8 font-light leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-brand-green shrink-0" />
                      <span className="text-slate-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contacto" className="inline-flex items-center gap-2 text-brand-green font-bold group">
                  Solicitar presupuesto para este servicio <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="lg:w-1/2 w-full aspect-video bg-brand-900/50 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                   {/* Abstract icon decoration */}
                   {React.cloneElement(service.icon, { size: 240 })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
