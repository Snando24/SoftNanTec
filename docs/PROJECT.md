# PROJECT.md

> Última revisión: 2026-10-21. Fuente: código del repositorio. Lo no confirmado se marca `[POR DEFINIR]`.

## 1. Identificación

**Nombre:** SoftNanTec — sitio web corporativo
**Descripción breve:** Sitio web informativo (SPA en React) que presenta a SoftNanTec como estudio de software a medida para negocios y profesionales, muestra su portafolio real y canaliza contactos hacia WhatsApp.
**Estado:** Producción en https://softnantec.com/ (Vercel). Versión reestructurada publicada el 2026-10-19; ver `DEPLOYMENT.md`.

## 2. Objetivo

### Objetivo principal

Presentar la propuesta de valor (software a medida que resuelve el trabajo diario: automatización de documentos, sistemas de gestión, web, apps) respaldada por proyectos reales, y generar solicitudes de contacto (formulario → WhatsApp, botón flotante de WhatsApp, correo).

### Objetivos secundarios

- Mostrar proyectos realizados (página `/proyectos`, 6 proyectos con problema, solución y estado).
- Difundir contenido técnico mediante "SoftNanTec Insights" (componente listo pero desactivado hasta que exista el canal de YouTube).

## 3. Problema que resuelve

[POR DEFINIR]

## 4. Usuarios objetivo

Según el contenido del sitio (sección "¿A quién ayudamos?"):

- Empresas que necesitan sistemas robustos y escalables.
- Startups en crecimiento.
- Equipos técnicos que buscan modernizar su arquitectura.

## 5. Alcance

### Incluido

- 5 páginas públicas: Inicio, Servicios, Sobre Nosotros, Proyectos, Contacto.
- Formulario de contacto que compone un mensaje y abre WhatsApp (sin backend).
- Botón flotante de WhatsApp y enlaces a Instagram y YouTube.

### Fuera de alcance (estado actual)

- Backend propio, base de datos, autenticación, pagos, cuentas de usuario.
- Analítica o tracking (no implementado).
- Blog/CMS.

## 6. Funcionalidades principales

| Funcionalidad | Descripción | Prioridad | Estado |
|---|---|---|---|
| Páginas informativas | Inicio, Servicios, Sobre Nosotros, Proyectos (portafolio de 6 proyectos, filtrable) | Alta | Hecho |
| Formulario de contacto | Compone mensaje y abre `wa.me` | Alta | Hecho |
| Widget WhatsApp | Botón flotante en todas las páginas | Media | Hecho |
| SoftNanTec Insights | Sección de contenido técnico (YouTube) | Baja | Desactivado |
| Páginas legales | Privacidad (`/privacidad`, provisional); términos en borrador | Alta | En curso |

## 7. Requisitos funcionales

- RF-001: El usuario puede navegar entre las 5 rutas principales desde el menú (desktop y móvil).
- RF-002: El usuario puede enviar una solicitud de contacto que se abre en WhatsApp con sus datos.
- RF-003: El usuario puede contactar por WhatsApp desde cualquier página.

## 8. Requisitos no funcionales

- RNF-001: Accesibilidad — objetivo WCAG 2.2 AA (ver `ACCESSIBILITY.md`).
- RNF-002: Rendimiento — ver `PERFORMANCE.md`.
- RNF-003: Responsive (móvil a escritorio).
- RNF-004: Mantenibilidad — datos de contacto centralizados en `src/config/site.js`.

## 9. Stack resumido

- Frontend: React 19, React Router 7, Tailwind CSS 3, lucide-react (Create React App).
- Backend: no existe.
- Base de datos: no existe.
- Infraestructura: `[POR DEFINIR]`.
- Servicios externos: WhatsApp (`wa.me`), Google Fonts, imágenes de Unsplash (hotlink, solo fondos), Instagram, YouTube.

Detalle en `ARCHITECTURE.md`.

## 10. Restricciones

- Sitio estático sin servidor: no hay validación ni almacenamiento server-side.
- Create React App está deprecado (ver deuda técnica en `ARCHITECTURE.md`).

## 11. Prioridades

### Alta

- Añadir capturas reales de los sistemas (hoy se muestran ilustraciones abstractas, salvo TractoTec).
- Completar la política de privacidad provisional al obtener el RUC.

### Media

- Probar con lector de pantalla y zoom 200 % (accesibilidad y SEO por ruta ya corregidos).

### Baja

- Activar SoftNanTec Insights cuando exista el canal.
- Migrar de CRA a otra herramienta de build.

## 12. Roadmap

Las mejoras a futuro se gestionan en [`BACKLOG.md`](BACKLOG.md).

## 13. Dependencias externas

| Servicio | Función | Criticidad |
|---|---|---|
| WhatsApp (`wa.me`) | Canal principal de contacto | Alta |
| Google Fonts | Tipografías Inter y Plus Jakarta Sans | Baja |
| Unsplash | Imágenes de fondo (hotlink) | Baja |
| Instagram / YouTube | Enlaces sociales | Baja |

## 14. Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Publicar afirmaciones de negocio sin evidencia | Baja | Alto | Solo publicar datos y proyectos verificables |
| Imágenes hotlinkeadas cambian o desaparecen | Media | Medio | Descargarlas y servirlas localmente |
| Política de privacidad provisional sin datos legales ni revisión profesional | Media | Medio | Completar al obtener el RUC y validar |

## 15. Criterios de éxito

[POR DEFINIR]

## 16. Decisiones pendientes

- [x] Hosting y dominio de producción: Vercel, https://softnantec.com/.
- [x] Cifras de Inicio y proyectos sin evidencia: retirados el 2026-10-19.
- [x] Proyectos adicionales a publicar en `/proyectos` (2026-10-21).
- [ ] Datos legales de la empresa (razón social, RUC, domicilio) — en trámite; al obtenerlos, completar `COMPANY` en `src/config/site.js` (ver `docs/legal/PRIVACY_POLICY.md`).
- [ ] Si se incorporará analítica.

## 17. Documentación relacionada

- `BUSINESS.md`, `ARCHITECTURE.md`, `SECURITY.md`, `PRIVACY.md`, `FORMS_CONSENT.md`, `LEGAL.md`, `SEO.md`, `ACCESSIBILITY.md`, `UX_UI.md`, `PERFORMANCE.md`, `COPYRIGHT_LICENSES.md`
- Auditorías: `docs/audits/`

## 18. Mantenimiento

Actualizar cuando cambien objetivos, alcance, funcionalidades, usuarios, roadmap, restricciones o prioridades.
