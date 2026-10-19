# PERFORMANCE.md

> Última revisión: 2026-10-19. Sin mediciones de campo ni Lighthouse todavía.

## 1. Objetivos

Valores de referencia de Core Web Vitals (móvil, percentil 75):

- LCP: ≤ 2,5 s
- INP: ≤ 200 ms
- CLS: ≤ 0,1
- TTFB: [Sin medir] (Vercel, CDN edge)
- Tamaño inicial: ver presupuesto
- Tiempo API: no aplica

## 2. Frontend

- Bundle: JS 86,01 kB + CSS 5,52 kB (gzip), build del 2026-10-19.
- Code splitting: no; todas las páginas en un solo bundle. Posible `React.lazy` por ruta.
- Lazy loading: imágenes de proyectos sin `loading="lazy"` ni `width`/`height`.
- Render blocking: Google Fonts cargadas con `<link>` en `index.html` (antes `@import` en CSS), con `preconnect` y `display=swap`.
- Imágenes: fondos de Unsplash reducidos a `w=1200`, `q=75` (antes 2070 px); logo de Navbar/Footer optimizado a `logo96.png` (~8 KB, antes 227 KB); `favicon.ico` ~14 KB (antes ~84 KB). Imagen de TractoTec reducida a `w=1200` y con `loading="lazy"`.
- Third-party: Google Fonts, Unsplash.
- Efectos `backdrop-filter: blur` y blurs de 120–140 px pueden penalizar GPUs modestas.

## 3. Backend

No aplica.

## 4. Base de datos

No aplica.

## 5. Red

Vercel sirve con CDN edge y compresión Brotli (`content-encoding: br` observado). `vercel.json` fija caché de un año (`immutable`) para `/static/*`, cuyos nombres llevan hash; `index.html` se revalida en cada visita.

## 6. Presupuesto

| Métrica | Objetivo | Actual | Estado |
|---|---|---|---|
| JS inicial (gzip) | [POR DEFINIR] | 86,01 kB | Medido |
| CSS (gzip) | [POR DEFINIR] | 5,52 kB | Medido |
| LCP móvil | ≤ 2,5 s | [Sin medir] | Pendiente |
| CLS | ≤ 0,1 | [Sin medir] | Pendiente |

## 7. Medición

Pendiente: Lighthouse móvil sobre la URL desplegada; registrar fecha, dispositivo y red.

## 8. Regla

No sacrificar seguridad, accesibilidad o funcionalidad por una mejora sintética menor.
