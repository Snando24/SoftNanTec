# BACKLOG.md — Mejoras a futuro

> Lista de trabajo pendiente que no bloquea la publicación. Se versiona junto al código para que cualquier persona o agente sepa qué falta y por qué. No incluir datos sensibles.
>
> Última revisión: 2026-10-21.

| ID | Mejora | Motivo | Prioridad | Estado | Referencia |
|---|---|---|---|---|---|
| BL-001 | Completar la política de privacidad (`/privacidad`, publicada como provisional) con los datos legales y validarla con un profesional | El formulario recoge datos personales | Alta | En espera: empresa en proceso de constitución; falta razón social, RUC y domicilio fiscal (estimado: unos días desde 2026-10-19) | AUD-003, `docs/legal/PRIVACY_POLICY.md` |
| BL-002 | Revisar dependencias con `npm audit --omit=dev` | Seguridad de dependencias | Media | Pendiente | AUD-014 |
| BL-003 | Migrar de Create React App a Vite | CRA está deprecado | Media | Pendiente | AUD-022 |
| BL-004 | Tests de render por página (Jest + React Testing Library) | Detectar regresiones | Baja | Pendiente | AUD-023 |
| BL-005 | CI/CD: build y lint automáticos en cada PR (p. ej. GitHub Actions) | Calidad antes de desplegar | Baja | Pendiente | AUD-025 |
| BL-006 | Publicar más proyectos en `/proyectos` con evidencia | Portafolio | Media | Hecho 2026-10-21 (6 proyectos) | `docs/BUSINESS.md` |
| BL-011 | Reemplazar ilustraciones abstractas por capturas reales de cada sistema (sin datos personales) | Credibilidad del portafolio | Alta | Pendiente | `src/config/projects.js` (`image`) |
| BL-012 | Confirmar autorización de clientes para mencionarlos (TractoTec proformas, cliente de SisAlmacen) | Legal / confianza | Alta | Pendiente | `docs/BUSINESS.md` |
| BL-013 | Revisar si conviene mantener el enlace a YouTube y la sección Insights con el nuevo posicionamiento | Coherencia de marca | Baja | Pendiente | `src/components/sections/TechInsights.js` |
| BL-007 | Activar sección SoftNanTec Insights | Requiere canal de YouTube | Baja | Pendiente | `src/components/sections/TechInsights.js` |
| BL-008 | Auto-hospedar fuentes y servir localmente las imágenes de Unsplash | Privacidad y rendimiento | Baja | Pendiente | `docs/PERFORMANCE.md` |
| BL-009 | Prueba con lector de pantalla y zoom 200 % | Validar accesibilidad | Baja | Pendiente | `docs/ACCESSIBILITY.md` |
| BL-010 | Medir Core Web Vitals con Lighthouse sobre producción | Línea base de rendimiento | Baja | Pendiente | `docs/PERFORMANCE.md` |
