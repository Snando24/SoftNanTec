# UX_UI.md

> Última revisión: 2026-10-21. Describe el sistema visual existente.

## 1. Principios

Estética oscura con acento lima del logo. Evolución 2026-10-21: menos efectos y radios gigantes (`rounded-2xl`/`rounded-3xl`), texto más legible (sin `font-light` en párrafos), fondo de cuadrícula sutil (`.bg-grid`), contenido orientado a casos reales (antes/ahora, problema → solución, estado del proyecto).

## 2. Navegación

- Estructura: 5 rutas en el menú (Inicio, Servicios, Sobre Nosotros, Proyectos, Contacto) y `/privacidad` enlazada desde el footer.
- Menú: Navbar fijo; en escritorio enlaces + CTA "Contáctanos"; en móvil menú desplegable.
- Breadcrumbs: no.
- Estados activos: enlace activo en `brand-green`.
- Fuente de verdad del menú: `NAV_ITEMS` en `src/config/site.js`.

## 3. Sistema visual

Definido en `tailwind.config.js` y `src/styles/index.css`:

- Tipografía: Inter (texto), Plus Jakarta Sans (`font-display`, títulos h1–h4).
- Colores de marca: `brand-950` #020617 (fondo), `brand-900` #0f172a, `brand-green` #a3e635 (lima neón del logo). El degradado `.neon-text-gradient` usa #a3e635 → #22d3ee. Rojo (`red-500/600`) solo en TechInsights.
- Utilidades: `.glass`, `.neon-text-gradient`, `.text-glow-red` (TechInsights).
- Bordes: radios grandes (`rounded-2xl` a `rounded-[3rem]`).
- Iconografía: lucide-react.

- Logo: maestro en `assets/brand/Logo_Madre.png` (con texto) y `assets/brand/Emblema.png` (solo el emblema). Navbar/Footer y `og-image.jpg` usan el logo completo; `favicon.ico`, `favicon-48.png` y `logo192/512.png` usan el emblema para que sea legible en tamaños pequeños.

## 4. Componentes

| Componente | Variante | Estados | Accesible |
|---|---|---|---|
| CTA principal | Píldora `brand-green` | default/hover/focus | Sí |
| CTA secundario | Píldora con borde | default/hover/focus | Sí |
| Botón de envío | Bloque blanco | default/hover/focus | Sí |
| WhatsAppWidget | Botón flotante | default/hover + tooltip | Sí |
| Menú móvil | Toggle | abierto/cerrado | Sí (aria) |
| ProjectCard | Tarjeta compacta de proyecto | default/hover/focus | Sí |
| ProjectVisual | Ilustración abstracta por tipo (no es captura real) o imagen real si existe | — | Decorativa (`aria-hidden`) |
| StatusBadge | En uso/En producción (lima), En desarrollo/implementación (cian), Laboratorio (gris) | — | Texto visible |
| Filtro de proyectos | Botones píldora | `aria-pressed` | Sí |

## 5. Botones y enlaces

Etiquetas descriptivas ("Solicitar Consulta", "Ver cómo trabajamos", "Contáctanos").

## 6. Estados

- Loading / empty / error: no aplica salvo formulario.
- Formulario: aviso previo de que se abrirá WhatsApp, con alternativa por correo. Sin mensaje de éxito propio.
- 404: página `NotFound` con enlaces a Inicio y Servicios.

## 7. Formularios

Ver `FORMS_CONSENT.md`.

## 8. Responsive

Breakpoints Tailwind (`sm`, `md`, `lg`). No verificado en dispositivos `[PENDIENTE]`.

## 9. Consistencia

Mantener los tokens anteriores; no introducir colores nuevos sin necesidad.

## 10. Contenido

- Tono: se trata al visitante de **usted** en todo el sitio ("Contáctenos", "su proyecto"). Mantenerlo en textos nuevos.
- Idioma: etiquetas en español; solo se conservan términos técnicos habituales (API, backend, legacy, CI/CD, GraphQL).
- Contenido honesto (2026-10-19): sin afirmaciones de tamaño de equipo, alcance global ni tecnologías no confirmadas; publicar solo cifras y proyectos con evidencia.
- Afirmaciones absolutas reformuladas (2026-10-19): "Nuestro objetivo es responder en menos de 24 horas" y "escalar a medida que su negocio crece".
