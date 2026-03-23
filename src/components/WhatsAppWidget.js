import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const phoneNumber = "34912345678"; // Número de ejemplo, puedes cambiarlo
  const message = encodeURIComponent("Hola SoftNanTec, me gustaría solicitar una consulta tecnológica para mi proyecto.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-brand-950 px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-green/20">
        ¿En qué podemos ayudarte?
      </div>
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

export default WhatsAppWidget;
