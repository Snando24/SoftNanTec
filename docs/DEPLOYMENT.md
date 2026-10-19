# DEPLOYMENT.md

> Última revisión: 2026-10-19. Datos observados en las cabeceras HTTP de https://softnantec.com/ y en `vercel.json`.

## 1. Entornos

| Entorno | Propósito | URL/Host | Datos |
|---|---|---|---|
| Local | Desarrollo | `http://localhost:3000` (`npm start`) | Sin datos |
| Preview | Revisión de cambios | [POR DEFINIR] — Vercel genera URLs de preview si el proyecto está conectado a GitHub `[POR CONFIRMAR]` | Sin datos |
| Production | Producción | https://softnantec.com/ | Sin datos personales almacenados |

## 2. Infraestructura

- Hosting: **Vercel** (cabecera `server: Vercel`).
- Región/edge observada: `iad1` (cabecera `x-vercel-id`; varía según el visitante).
- CDN: red edge de Vercel (`x-vercel-cache`).
- DNS: [POR DEFINIR]
- Contenedores, base de datos, storage: no aplica.

## 3. Requisitos previos

- Node.js y npm (versión usada en desarrollo: [POR DEFINIR]).
- Acceso al proyecto en Vercel: [POR DEFINIR responsable].

## 4. Variables de entorno

Ninguna.

## 5. Proceso de despliegue

- Build: `npm run build` → carpeta `build/` (preset Create React App).
- Método de despliegue (Git conectado o CLI): [POR CONFIRMAR].
- Configuración versionada en `vercel.json`:
  - `rewrites`: toda ruta sin archivo estático sirve `index.html` (necesario para `BrowserRouter`).
  - Cabeceras de seguridad: `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
  - `Cache-Control` de un año para `/static/*` (archivos con hash).
- HSTS (`Strict-Transport-Security: max-age=63072000`) lo añade Vercel por defecto.

## 6. Rollback

Desde el panel de Vercel: promover un despliegue anterior a producción ("Instant Rollback").

## 7. Migraciones

No aplica.

## 8. Zero-downtime

Vercel publica cada despliegue de forma atómica.

## 9. Verificaciones posteriores

- [ ] Las 6 rutas (incluida `/privacidad`) cargan y una ruta inexistente muestra la página 404.
- [ ] Consola del navegador sin errores `Refused to … Content Security Policy`.
- [ ] Cabeceras presentes (`curl -I https://softnantec.com/`).
- [ ] Botones de WhatsApp apuntan a `wa.me/51906098021`.
- [ ] `https://softnantec.com/sitemap.xml` devuelve XML (no `index.html`).
- [ ] Vista previa al compartir el enlace muestra `og-image.jpg`.

## 10. Estado observado (2026-10-19)

La versión publicada es **anterior** a los cambios de esta revisión: muestra el bloque de cifras, el número de WhatsApp de ejemplo (`34912345678`) y no tiene `sitemap.xml` ni cabeceras CSP. Se actualizará al desplegar los cambios.

## 11. Responsables

[POR DEFINIR]
