// Portafolio de SoftNanTec: fuente única de verdad para /proyectos, Inicio y Servicios.
// Publicar solo proyectos con evidencia. Por ahora no se publican nombres de clientes (decisión 2026-10-21).
// Las capturas usan datos de demostración; logos y membretes de clientes van difuminados.

export const PROJECT_GROUPS = {
  client: 'Proyectos para clientes',
  product: 'Productos propios y laboratorio',
};

export const PROJECTS = [
  {
    id: 'proformas-tractotec',
    group: 'client',
    title: 'Generador de Proformas',
    client: 'Talleres de vehículos y maquinaria pesada',
    category: 'Automatización de documentos',
    status: 'En uso',
    summary:
      'Proformas con membrete en PDF y Word en lugar de armarlas a mano, desde la PC o el celular.',
    problem:
      'Cada proforma del taller se armaba a mano en Word: copiar datos del cliente, recalcular montos y cuidar el formato una y otra vez.',
    solution:
      'Una app donde se registra el cliente, RUC, ítems y adelanto, se ve la vista previa y se exporta la proforma con el membrete de la empresa en PDF o Word. Guarda el historial y se adaptó en tres versiones: taller general, área de pintura y una variante con formato corporativo para otro taller.',
    features: [
      'Exportación a PDF y Word con membrete',
      'Historial de proformas con filtros',
      'Tres versiones adaptadas a cada taller',
      'Funciona en PC, navegador del celular y Android',
    ],
    platforms: ['Escritorio (.exe)', 'Web / PWA', 'Android (APK)'],
    tags: ['Python', 'ReportLab', 'python-docx', 'Capacitor'],
    visual: 'document',
    image: '/images/projects/proformas-taller.jpg',
    gallery: [
      { src: '/images/projects/proformas-taller.jpg', caption: 'Versión taller: formulario y vista previa' },
      { src: '/images/projects/proformas-pintura.jpg', caption: 'Versión pintura' },
      { src: '/images/projects/proformas-v3.jpg', caption: 'Versión con formato corporativo' },
    ],
  },
  {
    id: 'evaluacion-inicial',
    group: 'client',
    title: 'Sistema de Evaluación Descriptiva',
    client: 'Docentes de educación inicial',
    category: 'Sistema de gestión · Educación',
    status: 'En uso',
    summary:
      'De la observación de la docente a la evaluación descriptiva lista para imprimir en Word.',
    problem:
      'Redactar la evidencia, la retroalimentación y el compromiso de cada estudiante, actividad por actividad, consumía horas de trabajo fuera del aula.',
    solution:
      'Una aplicación de escritorio donde la docente registra a sus estudiantes y su observación; el sistema propone los textos con plantillas pedagógicas, la docente los revisa y edita, y exporta el documento en Word. Se adaptó a la forma de evaluar de cada docente (por ejemplo, escala de estimación).',
    features: [
      'Gestión de estudiantes y actividades',
      'Borradores de evidencia, retroalimentación y compromiso',
      'Edición completa antes de exportar',
      'Exportación a Word · funciona sin internet',
    ],
    platforms: ['Escritorio Windows (instalador)'],
    tags: ['TypeScript', 'Node.js', 'Electron', 'SQLite', 'Clean Architecture'],
    visual: 'education',
    image: '/images/projects/evaluacion-matriz.jpg',
    gallery: [
      { src: '/images/projects/evaluacion-matriz.jpg', caption: 'Matriz de evaluación por criterio' },
      { src: '/images/projects/evaluacion-actividades.jpg', caption: 'Panel de actividades (escala de estimación)' },
      { src: '/images/projects/evaluacion-version-cuaderno.jpg', caption: 'Versión «Cuaderno de campo»' },
      { src: '/images/projects/evaluacion-version-gestion.jpg', caption: 'Versión «Gestión de evaluación»' },
    ],
  },
  {
    id: 'sisalmacen',
    group: 'client',
    title: 'SisAlmacen',
    client: 'Empresa con almacén propio',
    category: 'Sistema de gestión · Inventario',
    status: 'En implementación',
    summary:
      'Control de productos, entradas, salidas y stock con alertas, reportes y respaldos, sin depender de internet.',
    problem:
      'El inventario vivía en hojas de cálculo sueltas: difícil saber el stock real, qué falta reponer y quién hizo cada cambio.',
    solution:
      'Un sistema de escritorio con catálogo de productos, proveedores y ubicaciones, registro de entradas, salidas y ajustes, carga masiva desde CSV con validación previa, alertas de stock mínimo, reportes en Excel y PDF, auditoría y copias de seguridad.',
    features: [
      'Entradas, salidas y ajustes con trazabilidad',
      'Importación masiva CSV con validación previa',
      'Alertas de stock mínimo y reportes Excel/PDF',
      'Usuarios con contraseña cifrada, auditoría y respaldos',
    ],
    platforms: ['Escritorio Windows (instalador)'],
    tags: ['Python', 'PySide6 (Qt)', 'SQLAlchemy', 'SQLite', 'Pytest'],
    visual: 'inventory',
    image: '/images/projects/sisalmacen-dashboard.jpg',
    gallery: [
      { src: '/images/projects/sisalmacen-dashboard.jpg', caption: 'Panel de control del almacén' },
      { src: '/images/projects/sisalmacen-productos.jpg', caption: 'Productos con alertas de stock mínimo' },
    ],
  },
  {
    id: 'tractotec-web',
    group: 'client',
    title: 'TractoTec — Sitio web',
    client: 'Taller de maquinaria pesada (Huancayo)',
    category: 'Sitio web corporativo',
    status: 'En producción',
    summary:
      'Sitio web con catálogo de servicios, portafolio administrable y cotización por WhatsApp.',
    problem:
      'Un taller de traccionamiento de chasis y maquinaria pesada sin presencia en internet para mostrar su trabajo y recibir cotizaciones.',
    solution:
      'Sitio corporativo con catálogo de servicios, portafolio con detalle y galería por proyecto, panel de administración para que el propio cliente publique sus trabajos y formulario de cotización que llega por WhatsApp. Optimizado para búsquedas locales y celulares.',
    features: [
      'Panel de administración de proyectos',
      'Portafolio con galería por proyecto',
      'Cotización directa por WhatsApp',
      'SEO local y diseño para celulares',
    ],
    platforms: ['Web'],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Vercel'],
    image: '/images/projects/tractotec.jpg',
    link: 'https://www.tractotec.com',
    visual: 'web',
  },
  {
    id: 'storeos',
    group: 'product',
    title: 'StoreOS',
    client: 'Producto propio',
    category: 'Plataforma SaaS · Tiendas en línea',
    status: 'En desarrollo',
    summary:
      'Plataforma para crear y operar varias tiendas en línea sobre una misma base, cada una con sus datos aislados.',
    problem:
      'Los negocios pequeños que quieren vender en línea necesitan catálogo, pedidos y control de stock sin pagar un desarrollo completo desde cero.',
    solution:
      'Una plataforma multi-tienda: cada negocio tiene su catálogo, precios, inventario y pedidos, con reservas de stock que vencen solas y un panel administrativo. La seguridad se valida en el servidor y en la base de datos, nunca solo en el navegador.',
    features: [
      'Catálogo, inventario y pedidos por tienda',
      'Reservas de stock con vencimiento automático',
      'Aislamiento de datos por negocio (RLS)',
      'Tienda de demostración: AnimeGeek',
    ],
    platforms: ['Web'],
    tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    visual: 'store',
    image: '/images/projects/storeos-inicio.jpg',
  },
  {
    id: 'jarvistec',
    group: 'product',
    title: 'JarvisTec',
    client: 'Laboratorio interno',
    category: 'Automatización e IA',
    status: 'Laboratorio',
    summary:
      'Asistente por voz que entiende la intención del comando y ejecuta rutinas automatizadas.',
    problem:
      'Explorar cómo un asistente puede convertir una instrucción hablada en acciones concretas sobre otros sistemas y dispositivos.',
    solution:
      'Un orquestador que recibe comandos de voz, detecta la intención con IA y dispara rutinas en flujos de automatización (n8n), además de un servicio local que actúa sobre dispositivos de la red. Es nuestro espacio para probar automatización antes de llevarla a clientes.',
    features: [
      'Detección de intención con IA',
      'Rutinas conectadas a flujos n8n',
      'Servicio local para dispositivos de la red',
      'API protegida con clave',
    ],
    platforms: ['API / servicio'],
    tags: ['Java', 'Spring Boot', 'n8n', 'Node.js'],
    visual: 'automation',
  },
];

export const FEATURED_PROJECT_IDS = ['proformas-tractotec', 'evaluacion-inicial', 'sisalmacen'];

export const getProject = (id) => PROJECTS.find((p) => p.id === id);
