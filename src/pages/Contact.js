import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { CONTACT, buildWhatsAppUrl } from '../config/site';
import { SERVICES } from '../config/services';
import usePageMeta from '../hooks/usePageMeta';

const Contact = () => {
  usePageMeta({
    title: "Contacto | SoftNanTec",
    description: "Cuéntenos qué tarea de su negocio quiere automatizar u ordenar. Contacte a SoftNanTec por WhatsApp o correo y reciba una propuesta a su medida.",
    path: "/contacto",
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: SERVICES[0].title,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const text = `*Solicitud de proyecto | SoftNanTec*\n\n` +
                 `*Información del Cliente:*\n` +
                 `• *Nombre:* ${formData.name}\n` +
                 `• *Email:* ${formData.email}\n\n` +
                 `*Detalles del Proyecto:*\n` +
                 `• *Servicio:* ${formData.service}\n` +
                 `• *Descripción:* ${formData.message}`;
    
    const whatsappUrl = buildWhatsAppUrl(text);
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-36 pb-24 bg-brand-950 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            Respuesta directa del equipo de desarrollo
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 font-display tracking-tight leading-tight">
            Cuéntenos qué quiere <span className="neon-text-gradient">automatizar</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Descríbanos cómo trabaja hoy: qué documentos llena, qué controla en hojas de cálculo o qué le quita más tiempo. Con eso le preparamos una propuesta concreta.
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
                    <p className="text-xs uppercase font-bold tracking-widest mb-1 text-slate-400">Escríbanos</p>
                    <p className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">{CONTACT.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6">
                    <Phone size={24} className="text-brand-950" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest mb-1 text-slate-400">Teléfono / WhatsApp</p>
                    <p className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">{CONTACT.phoneDisplay}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6">
                    <MapPin size={24} className="text-brand-950" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest mb-1 text-slate-400">Ubicación</p>
                    <p className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">{CONTACT.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 glass rounded-3xl border border-white/5 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Tiempo de respuesta</h4>
                  <p className="text-sm text-slate-400">Nuestro objetivo es responder en menos de 24 horas.</p>
                </div>
              </div>
              <p className="text-slate-400 font-light italic leading-relaxed">
                "Si tiene ejemplos (una proforma, un Excel, un formato), envíelos por WhatsApp: nos ayudan a entender su caso más rápido."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:p-16 glass rounded-3xl border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-10 font-display">Solicitar una propuesta</h3>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-slate-400">Nombre Completo</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-green transition-all" 
                    placeholder="Ej: Roberto García" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Corporativo</label>
                  <input 
                    id="contact-email"
                    type="email" 
                    name="email"
                    autoComplete="email"
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-green transition-all" 
                    placeholder="rgarcia@empresa.com" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-service" className="text-xs font-bold uppercase tracking-widest text-slate-400">Servicio de Interés</label>
                <select 
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-green transition-all"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} className="bg-brand-950">{s.title}</option>
                  ))}
                  <option className="bg-brand-950">Otro / no estoy seguro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-slate-400">Descripción del Proyecto</label>
                <textarea 
                  id="contact-message"
                  name="message"
                  maxLength={2000}
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-green transition-all resize-none" 
                  placeholder="Cuéntenos brevemente sobre sus objetivos..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-white text-brand-950 font-bold uppercase tracking-[0.2em] hover:bg-brand-green transition-all duration-300 rounded-2xl flex items-center justify-center gap-3 shadow-xl">
                Solicitar Análisis Técnico <Send size={20} />
              </button>
              <p className="text-sm text-slate-400 leading-relaxed">
                Al enviar, se abrirá WhatsApp en una nueva pestaña con su mensaje listo para enviar. ¿Prefiere correo? Escríbanos a{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-brand-green font-semibold hover:underline">{CONTACT.email}</a>.
                {' '}Consulte cómo tratamos sus datos en nuestra{' '}
                <Link to="/privacidad" className="text-brand-green font-semibold hover:underline">Política de Privacidad</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
