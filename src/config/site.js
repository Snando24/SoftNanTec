// Configuración central del sitio.
// Cualquier dato de contacto, enlace social o ítem de navegación se edita SOLO aquí.

export const SITE_URL = 'https://softnantec.com';

export const CONTACT = {
  email: 'softnantec@gmail.com',
  phoneDisplay: '+51 906 098 021',
  whatsappNumber: '51906098021', // Formato internacional sin "+" ni espacios
  location: 'Huancayo, Perú',
};

// Datos legales de la empresa. SoftNanTec está en proceso de constitución:
// completar al obtener el RUC (dejar en null mientras tanto) y actualizar PRIVACY_POLICY_UPDATED.
export const COMPANY = {
  legalName: null, // Razón social
  ruc: null,
  address: null, // Domicilio fiscal
};

export const PRIVACY_POLICY_UPDATED = '19 de octubre de 2026';

const WHATSAPP_DEFAULT_MESSAGE =
  'Hola SoftNanTec, me gustaría solicitar una consulta tecnológica para mi proyecto.';

/** Construye un enlace wa.me con un mensaje opcional. */
export const buildWhatsAppUrl = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  message
    ? `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${CONTACT.whatsappNumber}`;

export const SOCIAL = {
  instagram: 'https://instagram.com/softnantec',
  youtube: 'https://youtube.com/@softnantec',
};

export const NAV_ITEMS = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
  { name: 'Proyectos', path: '/proyectos' },
];
