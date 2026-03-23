import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-brand-950 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            Protocolo de Consultoría Técnica
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 font-display tracking-tight leading-tight">
            Diseñemos su <span className="neon-text-gradient">Arquitectura</span> del Mañana
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            ¿Necesita diseñar o escalar una solución tecnológica? Nuestro equipo está listo para analizar sus desafíos de ingeniería y proponer soluciones robustas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <div className="w-16 h-1 bg-brand-green mb-10"></div>
              <h2 className="text-3xl font-bold text-white mb-8 font-display">Canales de Comunicación</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6">
                    <Mail size={24} className="text-brand-950" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest mb-1 text-slate-500">Escríbanos</p>
                    <p className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">corporate@softnantec.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6">
                    <Phone size={24} className="text-brand-950" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest mb-1 text-slate-500">Llamada Directa</p>
                    <p className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">+34 912 345 678</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6">
                    <MapPin size={24} className="text-brand-950" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest mb-1 text-slate-500">Ubicación HQ</p>
                    <p className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 glass rounded-[2rem] border border-white/5 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 animate-pulse">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Soporte Express</h4>
                  <p className="text-sm text-slate-500">Respuesta en T-minus 24h garantizada.</p>
                </div>
              </div>
              <p className="text-slate-400 font-light italic leading-relaxed">
                "Nuestros especialistas técnicos revisarán su solicitud y prepararán un análisis inicial antes de nuestra primera sesión de consultoría."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:p-16 glass rounded-[3rem] border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-10 font-display">Solicitar Análisis Inicial</h3>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Nombre Completo</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-green outline-none transition-all" placeholder="Ej: Roberto García" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Corporativo</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-green outline-none transition-all" placeholder="rgarcia@empresa.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Servicio de Interés</label>
                <select className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-green outline-none transition-all">
                  <option className="bg-brand-950">Desarrollo de APIs & Backend</option>
                  <option className="bg-brand-950">Diseño de Arquitectura</option>
                  <option className="bg-brand-950">Consultoría Técnica Senior</option>
                  <option className="bg-brand-950">Modernización de Sistemas</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Descripción del Proyecto</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-green outline-none transition-all resize-none" placeholder="Cuéntenos brevemente sobre sus objetivos..."></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-white text-brand-950 font-bold uppercase tracking-[0.2em] hover:bg-brand-green transition-all duration-300 rounded-2xl flex items-center justify-center gap-3 shadow-xl">
                Enviar Protocolo de Comunicación <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
