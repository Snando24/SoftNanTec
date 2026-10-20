# ARCHITECTURE.md

> Última revisión: 2026-10-19. Basado en el código del repositorio.

## 1. Visión general

Single Page Application estática construida con Create React App. No hay backend, base de datos ni autenticación. Toda la lógica se ejecuta en el navegador; el único "envío" de datos es la apertura de un enlace `wa.me` con un mensaje prellenado.

## 2. Principios arquitectónicos

- Una página por ruta en `src/pages/`.
- Datos configurables (contacto, redes, navegación) centralizados en `src/config/site.js`.
- Estilos con utilidades Tailwind; CSS global mínimo en `src/styles/index.css`.

## 3. Diagrama general

```text
Usuario (navegador)
  |
  v
SPA React (archivos estáticos de /build)
  |
  +--> wa.me (WhatsApp)              formulario y botones de contacto
  +--> fonts.googleapis.com          tipografías
  +--> images.unsplash.com           imágenes
  +--> instagram.com / youtube.com   enlaces salientes
```

## 4. Stack tecnológico

### Frontend

- Framework: React 19.2 (`react`, `react-dom`)
- Lenguaje: JavaScript (JSX)
- UI: Tailwind CSS 3.4, lucide-react (íconos)
- Estado: estado local con `useState`; sin librería global
- Routing: React Router 7 (`BrowserRouter`)
- Build: Create React App (`react-scripts` 5.0.1), PostCSS + Autoprefixer
- Testing: Jest (incluido en `react-scripts`); no hay tests. React Testing Library se desinstaló el 2026-10-19 por no usarse; reinstalar al escribir tests

### Backend

No existe.

### Datos

No existe persistencia.

### Infraestructura

- Hosting: Vercel (configuración en `vercel.json`, ver `DEPLOYMENT.md`)
- CDN: red edge de Vercel
- Dominio: `softnantec.com` (DNS `[POR DEFINIR]`)
- Contenedores: no
- CI/CD: no hay configuración en el repositorio

## 5. Estructura del repositorio

```text
SoftNanTec/
├── .ai/AGENTS.md            Reglas para asistentes de IA
├── docs/                    Documentación del proyecto
│   ├── audits/              Informes de auditoría
│   └── legal/               Borradores de textos legales públicos
├── assets/brand/            Logo maestro (Logo_Madre.png), fuente de los íconos; no se publica
├── public/                  index.html, favicon.ico, favicon-48.png, logo96/192/512.png, og-image.jpg, images/projects/, sitemap.xml, manifest, robots.txt
├── src/
│   ├── App.js               Rutas y layout global
│   ├── index.js             Punto de entrada
│   ├── config/site.js       URL del sitio, contacto, WhatsApp, redes, navegación
│   ├── hooks/usePageMeta.js Metadatos SEO por ruta
│   ├── components/
│   │   ├── layout/          Navbar, Footer
│   │   ├── common/          ScrollToTop, WhatsAppWidget
│   │   └── sections/        TechInsights (desactivado)
│   ├── pages/               Home, Services, About, Projects, Contact, PrivacyPolicy, NotFound
│   └── styles/index.css     Tailwind + utilidades (.glass, .neon-text-gradient…)
├── vercel.json              Rewrites SPA y cabeceras HTTP (Vercel)
├── package.json / package-lock.json
├── tailwind.config.js
└── postcss.config.js
```

`PROJECT_BASE/` es una biblioteca local de referencia y está excluida de Git.

### Criterio de ubicación

| Si el archivo… | Va en |
|---|---|
| Es una vista asociada a una URL | `src/pages/` |
| Aparece en todas las páginas | `src/components/layout/` |
| Es un bloque de contenido reutilizable | `src/components/sections/` |
| Es un componente pequeño o utilitario | `src/components/common/` |
| Es un dato que puede cambiar (teléfono, links) | `src/config/site.js` |
| Es CSS global | `src/styles/` |

## 6. Frontend

**Routing** (`src/App.js`):

| Ruta | Página |
|---|---|
| `/` | `pages/Home.js` |
| `/servicios` | `pages/Services.js` |
| `/sobre-nosotros` | `pages/About.js` |
| `/proyectos` | `pages/Projects.js` |
| `/contacto` | `pages/Contact.js` |
| `/privacidad` | `pages/PrivacyPolicy.js` |
| `*` | `pages/NotFound.js` (404, `noindex`) |

**Metadatos por ruta:** cada página llama a `usePageMeta` (`src/hooks/usePageMeta.js`), que actualiza `title`, `description`, `robots`, `canonical`, Open Graph y Twitter con la URL base `SITE_URL` de `src/config/site.js`.

**Layout:** `Navbar` fijo, `main`, `WhatsAppWidget` flotante y `Footer`. `ScrollToTop` reinicia el scroll al cambiar de ruta.

**Formularios:** `Contact.js` mantiene el estado en `useState`, valida con atributos HTML (`required`, `type="email"`, `maxLength`) y en `submit` construye el texto y llama a `window.open(buildWhatsAppUrl(text))`. Ver `FORMS_CONSENT.md`.

**Estilos:** colores y fuentes en `tailwind.config.js` (ver `UX_UI.md`).

**Errores:** no hay manejo de errores ni Error Boundary.

## 7. Backend

No aplica.

## 8. API

No aplica.

## 9. Modelo de datos

No aplica.

## 10. Autenticación y autorización

No aplica.

## 11. Seguridad

Ver `SECURITY.md`.

## 12. Configuración

No se usan variables de entorno, por lo que no hay `.env.example`. La configuración del sitio está en `src/config/site.js`:

- `SITE_URL` — URL base para canonical y Open Graph.
- `COMPANY` — razón social, RUC y domicilio (en `null` hasta constituir la empresa); `PRIVACY_POLICY_UPDATED` — fecha mostrada en la política.
- `CONTACT` — correo, teléfono visible, número de WhatsApp, ubicación.
- `buildWhatsAppUrl(message)` — genera el enlace `wa.me` (`null` = sin mensaje).
- `SOCIAL` — Instagram, YouTube.
- `NAV_ITEMS` — menú principal.

Todo lo que está en el bundle es público; no colocar secretos.

## 13. Integraciones externas

| Integración | Finalidad | Datos | Criticidad |
|---|---|---|---|
| WhatsApp (`wa.me`) | Contacto | Nombre, email, servicio, mensaje (enviados por el propio usuario) | Alta |
| Google Fonts | Tipografías | IP / user-agent del visitante | Baja |
| Unsplash | Imágenes | IP / user-agent del visitante | Media |

## 14. Flujos de datos

Formulario de contacto → estado local → mensaje codificado con `encodeURIComponent` → nueva pestaña `https://wa.me/<número>?text=...`. El sitio no almacena ni transmite datos a un servidor propio.

## 15. Almacenamiento

Ninguno (sin cookies, localStorage ni backend).

## 16. Observabilidad

No implementada.

## 17. Analítica

No implementada.

## 18. Despliegue

- Local: `npm install` + `npm start`.
- Producción: Vercel. `npm run build` genera `/build`; `vercel.json` reescribe todas las rutas a `index.html` y define cabeceras de seguridad y caché. Detalle en `DEPLOYMENT.md`.
- CI/CD: no existe.

## 19. Escalabilidad

No relevante para un sitio estático.

## 20. Rendimiento

Ver `PERFORMANCE.md`.

## 21. Manejo de errores

No existe.

## 22. Testing

No hay tests. `CI=true npm run build` (advertencias de ESLint tratadas como error) compila correctamente al 2026-10-19.

## 23. Dependencias críticas

| Dependencia | Uso | Criticidad |
|---|---|---|
| react / react-dom 19 | UI | Alta |
| react-router-dom 7 | Routing | Alta |
| react-scripts 5.0.1 | Build | Alta |
| tailwindcss 3.4 | Estilos | Alta |
| lucide-react | Íconos | Media |

## 24. Decisiones arquitectónicas

- 2026-10-19 — Reestructuración: repositorio aplanado a la raíz `SoftNanTec/`; componentes agrupados en `layout/`, `common/`, `sections/`; CSS en `styles/`; configuración centralizada en `config/site.js`. Se unificó el número de WhatsApp: antes había un número de ejemplo (`34912345678`) en widget, footer e inicio, y el real (`51906098021`) solo en contacto.
- 2026-10-19 — Limpieza: íconos, favicon e imagen Open Graph generados a partir de `assets/brand/Logo_Madre.png`; eliminadas dependencias sin uso (`web-vitals`, `@testing-library/*`, `@tailwindcss/postcss`), colores Tailwind sin uso (`brand-800`, `accent`, `neon.*`, `primary`, `secondary`, `dark`), clase `.glass-light`, export `SITE` y la sección de estadísticas de Inicio; Google Fonts pasa de `@import` en CSS a `<link>` en `index.html`.

## 25. Deuda técnica

| Elemento | Impacto | Prioridad | Acción |
|---|---|---|---|
| Create React App deprecado | Toolchain sin mantenimiento | Media | Evaluar migración (p. ej. Vite) |
| Google Fonts externas | Dependencia de terceros e IP enviada a Google | Baja | Evaluar auto-hospedar |
| Imágenes hotlinkeadas de Unsplash | Dependencia externa | Media | Servir localmente |

## 26. Limitaciones conocidas

- SPA sin SSR: los metadatos por ruta se aplican con JavaScript; redes sociales que no ejecutan JS verán los de `index.html`.
- Sin validación server-side ni antispam (no hay servidor).

## 27. Evolución prevista

[POR DEFINIR]

## 28. Mantenimiento

Actualizar cuando cambien arquitectura, stack, rutas, integraciones o estrategia de despliegue.
