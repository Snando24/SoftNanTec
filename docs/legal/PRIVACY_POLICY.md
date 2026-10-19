# Política de Privacidad — notas

> El texto publicado vive en el código: `src/pages/PrivacyPolicy.js` (ruta `/privacidad`). Este archivo solo registra su estado y lo que falta, para no mantener dos versiones del texto.

## Estado

- **Publicada como versión provisional** (2026-10-19), enlazada desde el footer y desde el aviso del formulario de contacto.
- Muestra un aviso de "Versión provisional" mientras la empresa está en proceso de constitución.

## Al obtener el RUC

1. Completar `COMPANY` en `src/config/site.js` (`legalName`, `ruc`, `address`). El aviso provisional desaparece solo y la sección 1 muestra los datos.
2. Actualizar `PRIVACY_POLICY_UPDATED` en el mismo archivo.
3. Revisar con un profesional (abogado o contador):
   - [ ] Base para el tratamiento (sección 5).
   - [ ] Plazo de conservación concreto (sección 7).
   - [ ] Procedimiento y plazos para derechos ARCO (sección 8).
   - [ ] Si corresponde inscribir el banco de datos de contactos ante la Autoridad Nacional de Protección de Datos Personales.
   - [ ] Si debe añadirse un aviso o casilla de consentimiento en el formulario.
4. Actualizar `docs/PRIVACY.md`, `docs/LEGAL.md` y `docs/BACKLOG.md` (BL-001).

## Fuera del texto actual

- Términos de uso: borrador en `docs/legal/TERMS.md`, sin publicar.
- Cookies: no aplica mientras el sitio no use cookies ni analítica.
