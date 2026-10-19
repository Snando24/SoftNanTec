# SoftNanTec

Sitio web corporativo de **SoftNanTec** — consultora de ingeniería de software (Huancayo, Perú).

**Stack:** React 19 · React Router 7 · Tailwind CSS 3 · Create React App

## Inicio rápido

```bash
npm install
npm start        # http://localhost:3000
npm run build    # build de producción en /build
```

## Estructura

```
SoftNanTec/
├── .ai/            Guía para asistentes de IA (AGENTS.md)
├── assets/brand/   Logo maestro (fuente de íconos; no se publica)
├── docs/           Documentación del proyecto, auditorías y borradores legales
├── public/         Archivos estáticos
└── src/
    ├── config/     Datos centralizados (contacto, redes, navegación)
    ├── components/ layout/ · common/ · sections/
    ├── pages/      Una vista por ruta
    └── styles/     CSS global
```

## Documentación

Empieza por [docs/PROJECT.md](docs/PROJECT.md) y [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). El resto de documentos temáticos (seguridad, privacidad, SEO, accesibilidad, etc.) está en [docs/](docs/). Última auditoría: [docs/audits/](docs/audits/). Mejoras a futuro: [docs/BACKLOG.md](docs/BACKLOG.md).

## Despliegue

Producción en [softnantec.com](https://softnantec.com/) (Vercel). Configuración en `vercel.json`; detalles en [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Contacto

softnantec@gmail.com · +51 906 098 021

---
© SoftNanTec. Todos los derechos reservados.
