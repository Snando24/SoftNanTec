# DEPLOYMENT.md

> Última revisión: 2026-10-19. Datos observados en las cabeceras HTTP de https://softnantec.com/ y en `vercel.json`.

## 1. Entornos

| Entorno | Propósito | URL/Host | Datos |
|---|---|---|---|
| Local | Desarrollo | `http://localhost:3000` (`npm start`) | Sin datos |
| Preview | Revisión de cambios | URL generada por Vercel en cada push a una rama | Sin datos |
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
- Método de despliegue: Vercel conectado a GitHub (`Snando24/SoftNanTec`). Cada push a una rama genera un preview; el merge a `main` publica en producción.
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

Versión reestructurada publicada en producción (merge del PR `reestructuracion-proyecto`). Verificado en https://softnantec.com/:

- [x] Cabeceras: CSP, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` y HSTS.
- [x] `/sitemap.xml` devuelve XML; `robots.txt` lo referencia; `/og-image.jpg` disponible.
- [x] Rutas `/sobre-nosotros`, `/proyectos`, `/contacto`, `/privacidad` y 404 (`noindex`) cargan sin errores en consola (sin violaciones de CSP).
- [x] Botones de WhatsApp apuntan a `wa.me/51906098021`; sin bloque de cifras.
- [x] Google Fonts carga correctamente bajo la CSP.

Despliegue confirmado: Vercel conectado a GitHub (despliegues de preview por rama y producción desde `main`).

## 11. Responsables

[POR DEFINIR]
