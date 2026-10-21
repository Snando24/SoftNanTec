// Servicios de SoftNanTec. Cada servicio enlaza a proyectos reales del portafolio (ids de config/projects.js).

export const SERVICES = [
  {
    id: 'automatizacion-documentos',
    icon: 'FileText',
    title: 'Automatización de documentos',
    short: 'Proformas, cotizaciones, reportes y evaluaciones que hoy se arman a mano, generados en PDF o Word con su formato.',
    long: 'Si su equipo copia y pega los mismos datos en Word o Excel todos los días, lo convertimos en un formulario que genera el documento final con su membrete, numeración y cálculos, y guarda el historial.',
    features: [
      'Documentos PDF y Word con su diseño',
      'Cálculos y totales automáticos',
      'Historial y búsqueda de documentos',
      'Plantillas adaptadas a su proceso',
    ],
    projects: ['proformas-tractotec', 'evaluacion-inicial'],
  },
  {
    id: 'sistemas-gestion',
    icon: 'Boxes',
    title: 'Sistemas de gestión a medida',
    short: 'Inventario, almacén, registros y control interno en un sistema hecho para su forma de trabajar.',
    long: 'Reemplazamos las hojas de cálculo sueltas por un sistema con usuarios, reglas de negocio, alertas, reportes y copias de seguridad. Puede funcionar en una sola computadora y sin internet, o crecer a varios usuarios.',
    features: [
      'Usuarios, permisos y auditoría',
      'Importación de sus datos actuales (CSV/Excel)',
      'Alertas y reportes en Excel/PDF',
      'Respaldos y datos bajo su control',
    ],
    projects: ['sisalmacen', 'evaluacion-inicial'],
  },
  {
    id: 'web-plataformas',
    icon: 'Globe',
    title: 'Páginas web y tiendas en línea',
    short: 'Sitios corporativos que usted mismo actualiza y plataformas para vender en línea.',
    long: 'Diseñamos y publicamos su sitio con panel de administración para que suba sus trabajos o productos sin depender de nadie, con contacto por WhatsApp y optimizado para aparecer en búsquedas locales.',
    features: [
      'Panel para administrar su contenido',
      'Cotizaciones y contacto por WhatsApp',
      'SEO local y diseño para celulares',
      'Catálogo, pedidos e inventario en línea',
    ],
    projects: ['tractotec-web', 'storeos'],
  },
  {
    id: 'apps-multiplataforma',
    icon: 'Smartphone',
    title: 'Apps de escritorio y móviles',
    short: 'La misma herramienta en su PC, en el navegador del celular o como app Android.',
    long: 'Entregamos su sistema como instalador para Windows, como app web instalable (PWA) o como APK para Android, según dónde trabaje su equipo: en la oficina, en el taller o en campo.',
    features: [
      'Instalador para Windows (.exe)',
      'App web instalable en el celular',
      'APK para Android',
      'Funcionamiento sin internet cuando se necesita',
    ],
    projects: ['proformas-tractotec', 'sisalmacen'],
  },
  {
    id: 'automatizacion-ia',
    icon: 'Bot',
    title: 'Automatización e integraciones',
    short: 'Conectamos sus herramientas y automatizamos tareas repetitivas, incluida la IA cuando aporta.',
    long: 'Integramos sistemas, WhatsApp, hojas de cálculo y servicios en la nube con flujos automáticos. Probamos primero en nuestro laboratorio (JarvisTec) y llevamos a su negocio solo lo que funciona.',
    features: [
      'Flujos automáticos (n8n)',
      'Integración entre sistemas y APIs',
      'Asistentes con IA para tareas concretas',
      'Prueba de concepto antes de invertir',
    ],
    projects: ['jarvistec'],
  },
];
