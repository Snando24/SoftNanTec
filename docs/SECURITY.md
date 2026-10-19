# SECURITY.md

> Última revisión: 2026-10-19. Sitio estático público sin backend.

## 1. Alcance

Frontend React servido como archivos estáticos, dependencias npm y configuración del hosting (Vercel, `vercel.json`).

## 2. Activos críticos

- Integridad del sitio y del dominio `softnantec.com` `[POR CONFIRMAR]`.
- Canal de contacto (número de WhatsApp y correo publicados).
- Repositorio en GitHub (`Snando24/SoftNanTec`).

## 3. Modelo de amenazas

Riesgo bajo por superficie reducida. Amenazas relevantes: dependencias vulnerables, defacement por compromiso del hosting o del repositorio, clickjacking, recursos de terceros alterados. `THREAT_MODEL.md` no se considera necesario por ahora.

## 4. Autenticación

No aplica.

## 5. Autorización

No aplica.

## 6. Sesiones y tokens

No aplica (sin cookies ni almacenamiento local).

## 7. Validación de entrada

El formulario de contacto valida en el navegador (`required`, `type="email"`, `maxLength`). Los datos solo se usan para construir un enlace `wa.me` y se codifican con `encodeURIComponent`. No se insertan en el DOM con `dangerouslySetInnerHTML`.

## 8. CSRF y CORS

No aplica (no hay endpoints propios).

## 9. Headers de seguridad

Definidos en `vercel.json` (2026-10-19), pendientes de desplegar:

- `Content-Security-Policy`: solo recursos propios, más `fonts.googleapis.com` (CSS), `fonts.gstatic.com` (fuentes) e `images.unsplash.com` (imágenes); `frame-ancestors 'none'`, `object-src 'none'`, `upgrade-insecure-requests`. Verificada localmente con el build: sin violaciones en las 6 rutas.
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (cámara, micrófono, geolocalización, pagos y USB deshabilitados).
- `Strict-Transport-Security` ya lo envía Vercel en producción.

Al añadir un recurso externo nuevo (scripts, imágenes, analítica), ampliar la CSP o fallará.

## 10. Secretos

- No se encontraron secretos en archivos rastreados ni en el historial de Git (búsqueda de `password|secret|token|api_key|private_key|client_secret|access_key` el 2026-10-19; solo coincidencias benignas en `package-lock.json`, p. ej. `js-tokens`).
- No hay variables de entorno. Cualquier variable `REACT_APP_*` futura será pública en el bundle.

## 11. Criptografía

No aplica. HTTPS obligatorio en el hosting.

## 12. Dependencias

- Ejecutar `npm audit --omit=dev` periódicamente `[PENDIENTE: no ejecutado en esta revisión]`.
- **No ejecutar `npm audit fix --force`:** con CRA reemplaza `react-scripts` por la versión 0.0.0 y rompe el build (ocurrió el 2026-10-19). Revisar los avisos manualmente.
- `react-scripts` 5 (CRA) está deprecado; sus dependencias de build acumulan avisos de vulnerabilidad que en su mayoría afectan solo al entorno de desarrollo.

## 13. APIs

No aplica.

## 14. Logging seguro

No hay logging.

## 15. Entornos

Local y producción (Vercel).

## 16. Backups

El código está en GitHub. No hay datos que respaldar.

## 17. Vulnerabilidades

Canal de reporte: [POR DEFINIR].

## 18. Checklist

- [x] No hay secretos en código o documentación.
- [x] Variables sensibles fuera del frontend (no existen).
- [x] Entradas codificadas antes de construir URLs.
- [x] Enlaces `target="_blank"` con `rel="noopener noreferrer"`.
- [x] Sin `dangerouslySetInnerHTML`.
- [x] Headers de seguridad configurados (`vercel.json`; verificar tras desplegar).
- [ ] `npm audit` revisado.
- N/A: autorización, SQL/NoSQL injection, CSRF, SSRF, uploads, CORS, sesiones, rate limiting, recuperación de cuenta.
