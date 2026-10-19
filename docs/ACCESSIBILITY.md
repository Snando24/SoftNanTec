# ACCESSIBILITY.md

> Última revisión: 2026-10-19 (revisión de código; sin pruebas con lector de pantalla).

## 1. Objetivo

Buscar conformidad razonable con WCAG 2.2 nivel AA.

## 2. Semántica

- Idioma: `lang="es"` ✔
- Landmarks: `nav`, `main`, `footer` ✔
- Headings: un `h1` por página ✔
- Botones/enlaces: CTAs son `<a>`/`<Link>`; botón de menú móvil es `<button>` ✔

## 3. Teclado

- [x] Todo lo interactivo es alcanzable (elementos nativos).
- [x] No se detectó keyboard trap.
- [x] Orden de foco sigue el DOM.
- [x] Foco visible: regla global `:focus-visible` (contorno lima #a3e635) en `src/styles/index.css`; se quitó `outline-none` de los campos.

## 4. Formularios

- [x] Labels asociados con `htmlFor`/`id` (corregido 2026-10-19).
- [x] `required`, `autoComplete`.
- [ ] Errores propios asociados al campo (hoy solo validación nativa).

## 5. Imágenes

- Logos con `alt="SoftNanTec Logo"` ✔
- Proyectos con `alt` = título ✔
- Fondos decorativos por CSS ✔

## 6. Contraste

- `text-slate-400` (#94a3b8) sobre `brand-950` (#020617): 7,87:1 ✔
- `text-slate-500` (#64748b, 4,24:1) se reemplazó por `text-slate-400` en todo el sitio (2026-10-19).
- `brand-950` sobre `brand-green` (#a3e635): 13,38:1 ✔

## 7. Componentes complejos

- Menú móvil: `aria-label`, `aria-expanded`, `aria-controls` añadidos (2026-10-19). Se cierra con `Escape`.
- Botón flotante de WhatsApp: `aria-label="Contactar por WhatsApp"` ✔
- Enlaces sociales del footer con `aria-label` que indica que abren pestaña nueva ✔

## 8. Responsive y zoom

- [ ] 200 % zoom — no verificado.
- [ ] Sin scroll horizontal accidental — no verificado (hay decoraciones de 600–800 px con `overflow-hidden` en el contenedor).

## 9. Movimiento

Con `prefers-reduced-motion: reduce` se desactivan animaciones y transiciones (regla global en `src/styles/index.css`).

## 10. Auditoría

| Hallazgo | Criterio | Severidad | Estado | Solución |
|---|---|---|---|---|
| Labels sin asociar en formulario | 1.3.1 / 3.3.2 | Alta | Resuelto | `htmlFor`/`id` |
| Botón de menú sin nombre accesible | 4.1.2 | Alta | Resuelto | `aria-label`, `aria-expanded` |
| Contraste `slate-500` en texto pequeño | 1.4.3 | Media | Resuelto | `slate-400` |
| Foco poco visible | 2.4.7 | Media | Resuelto | `:focus-visible` global |
| Íconos sociales sin `aria-label` | 2.4.4 / 4.1.2 | Media | Resuelto | `aria-label` |
| Animaciones sin reducción de movimiento | 2.3.3 (AAA) / buena práctica | Baja | Resuelto | Media query global |
