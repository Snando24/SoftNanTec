# SEO.md

> Última revisión: 2026-10-19.

## 1. Objetivo

Atraer contactos orgánicos interesados en servicios de ingeniería de software `[POR CONFIRMAR]`.

## 2. Audiencia y búsquedas

[POR DEFINIR]

## 3. Indexación

- robots.txt: permite todo y referencia `https://softnantec.com/sitemap.xml`.
- sitemap.xml: `public/sitemap.xml` con las 6 rutas públicas. Actualizarlo al añadir rutas.
- canonical: por ruta mediante `usePageMeta` (valor inicial en `index.html`).
- noindex: no usado.
- redirects: `vercel.json` reescribe las rutas sin archivo a `index.html`.

## 4. Metadatos

Cada página define `title`, `description`, canonical, `og:*` y `twitter:*` con `usePageMeta`. Al ser SPA sin SSR, Google los ve (ejecuta JS); las redes sociales usan los de `index.html`.

| Elemento | Estado |
|---|---|
| `<title>` | Global: "SoftNanTec \| Construimos Sistemas Escalables de Alto Rendimiento" |
| `meta description` | Global |
| `meta keywords` | Eliminado (2026-10-19; Google lo ignora) |
| Open Graph | Presente; `og:image` absoluta `https://softnantec.com/og-image.jpg` (1200×630, creada 2026-10-19), `og:locale`, `og:site_name` |
| Twitter cards | `name="twitter:*"`, misma imagen OG |
| `lang="es"` | Correcto |

## 5. Contenido

- H1 único por página: Inicio, Servicios, Sobre Nosotros, Proyectos y Contacto tienen un `<h1>`.
- URLs descriptivas en español: `/servicios`, `/sobre-nosotros`, `/proyectos`, `/contacto`.
- Enlaces internos: Navbar y Footer.

## 6. Datos estructurados

`Organization` en `public/index.html` (nombre, URL, logo, correo, teléfono, ciudad y redes), solo con datos confirmados. No crear ratings ni reviews.

## 7. Imágenes

- Imágenes de proyectos con `alt` = título del proyecto.
- Imágenes de fondo por CSS (`bg-[url(...)]`) desde Unsplash: no indexables, decorativas.
- Logo optimizado `logo96.png` en Navbar/Footer; favicon `favicon.ico` multi-tamaño.

## 8. Rendimiento

Ver `PERFORMANCE.md`.

## 9. Errores

- 404: página `NotFound` con `noindex` (sigue siendo soft 404 a nivel HTTP: Vercel responde 200 y la SPA muestra la página 404).
- Enlace `href="#"` en el CTA de TechInsights (componente desactivado).

## 10. Medición

- Indexación (verificado 2026-10-19 con `site:softnantec.com`): Google tiene indexadas `/`, `/servicios`, `/proyectos` y `/sobre-nosotros`, todavía con la descripción global anterior; se actualizará al recrawlear.
- Search Console: el responsable indica que ya está configurado. No hay token visible en el sitio (sin meta `google-site-verification`, sin archivo HTML ni registro TXT en el dominio), por lo que la verificación no se pudo confirmar desde fuera. Pendiente: confirmar en Search Console que la propiedad sigue verificada, enviar `https://softnantec.com/sitemap.xml` y solicitar indexación de `/contacto` y `/privacidad`.
- Favicon en resultados de Google: mostraba el logo de React (íconos de la plantilla CRA ya rastreados). Desde 2026-10-19 se declaran `favicon.ico` (16/32/48), `favicon-48.png` y `logo192.png` con el emblema; Google lo actualiza al volver a rastrear la portada (puede tardar días o semanas; acelerar con "Solicitar indexación" de `https://softnantec.com/` en Search Console).
- Google Business Profile: no aparece en los resultados locales de "SoftNanTec Huancayo" (2026-10-19) `[POR CONFIRMAR]`.

## 11. Checklist

- [x] Sitemap válido.
- [x] Robots revisado.
- [x] Canonicals correctos (por ruta).
- [x] Titles únicos (por ruta).
- [x] Descriptions relevantes (por ruta).
- [x] Headings coherentes (un H1 por página).
- [x] Structured data verídica (`Organization`).
- [x] Sin contenido duplicado importante.
- [x] Imagen Open Graph existente.
