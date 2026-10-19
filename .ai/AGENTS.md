# AGENTS.md — Guía para agentes de IA

Punto de entrada para cualquier asistente de IA que trabaje en este repositorio.

## 1. Antes de empezar

1. Si existe la carpeta local `PROJECT_BASE/` (no versionada), seguir `PROJECT_BASE/AGENT_GUIDE.md` y usar sus workflows, checklists y plantillas. No modificarla.
2. Leer `docs/PROJECT.md` y `docs/ARCHITECTURE.md`.
3. Consultar solo el documento de `docs/` relevante para la tarea (SEO, PRIVACY, SECURITY, etc.).
4. Inspeccionar el código antes de asumir cómo funciona.
5. No inventar datos de negocio, técnicos, legales o de seguridad: usar `[POR DEFINIR]`.

## 2. Contexto rápido

- Sitio web corporativo estático de SoftNanTec.
- React 19 + React Router 7 + Tailwind CSS 3, con Create React App.
- Sin backend, sin base de datos, sin cookies, sin analítica.
- Contenido en español; código en inglés.

## 3. Reglas del repositorio

1. Contacto, WhatsApp, redes y menú **solo** en `src/config/site.js`.
2. Nada de secretos: todo lo que está en `src/` y `public/` termina en el bundle público.
3. Respetar los tokens de diseño de `tailwind.config.js`.
4. Una página = un archivo en `src/pages/`; bloques reutilizables en `src/components/sections/`.
5. Enlaces `target="_blank"` con `rel="noopener noreferrer"`.
6. Nueva ruta → `App.js`, `NAV_ITEMS` si va en el menú y `docs/ARCHITECTURE.md`.
7. Cambios con datos personales, cookies o tracking → actualizar `docs/PRIVACY.md`, `docs/FORMS_CONSENT.md` y crear `docs/COOKIES.md` si aplica.
8. Mantener `docs/` actualizado cuando un cambio afecte su contenido.

## 4. Comandos

```bash
npm install
npm start                      # desarrollo
CI=true npm run build          # build; las advertencias de ESLint fallan
npm test                       # no hay tests todavía
```

## 5. Documentación

| Tema | Documento |
|---|---|
| Producto/alcance | `docs/PROJECT.md` |
| Negocio | `docs/BUSINESS.md` |
| Arquitectura | `docs/ARCHITECTURE.md` |
| Seguridad | `docs/SECURITY.md` |
| Privacidad | `docs/PRIVACY.md` |
| Formularios | `docs/FORMS_CONSENT.md` |
| Legal | `docs/LEGAL.md` y borradores en `docs/legal/` |
| SEO | `docs/SEO.md` |
| Accesibilidad | `docs/ACCESSIBILITY.md` |
| UX/UI | `docs/UX_UI.md` |
| Rendimiento | `docs/PERFORMANCE.md` |
| Licencias | `docs/COPYRIGHT_LICENSES.md` |
| Despliegue (Vercel) | `docs/DEPLOYMENT.md`, `vercel.json` |
| Pendientes / mejoras a futuro | `docs/BACKLOG.md` |
| Auditorías | `docs/audits/` |
