# FORMS_CONSENT.md

> Última revisión: 2026-10-19.

## 1. Inventario de formularios

| Formulario | Datos | Finalidad | Backend | Terceros |
|---|---|---|---|---|
| Contacto (`src/pages/Contact.js`) | Nombre, email, servicio, descripción | Solicitud de análisis inicial | Ninguno: abre `wa.me` en nueva pestaña | WhatsApp (Meta) |

## 2. Validación

- Frontend: `required` en nombre, email y descripción; `type="email"`; `maxLength` (nombre 100, email 254, descripción 2000).
- Backend: no existe.
- Sanitización: el texto se codifica con `encodeURIComponent` al construir la URL.

## 3. Seguridad

- Spam / bots / rate limiting: no aplica mientras no haya backend (el envío lo realiza el usuario desde WhatsApp).
- CSRF, inyección, uploads: no aplica.
- Logs: no hay.

## 4. Privacidad

- Qué se recopila: ver tabla anterior.
- Por qué: responder la solicitud.
- Cuánto tiempo: `[POR DEFINIR]`.
- Quién accede: `[POR DEFINIR]`.
- Dónde se envía: WhatsApp, solo si el usuario envía el mensaje.

## 5. Consentimiento

No se añadió casilla de consentimiento. Decidir con asesoría si se requiere o si basta con un aviso informativo `[POR DEFINIR]`. Si se añade: no premarcada, específica e informada.

## 6. Avisos

Hecho: aviso de apertura de WhatsApp y alternativa por correo. Enlace a la Política de Privacidad (`/privacidad`) en el mismo aviso.

## 7. UX y accesibilidad

- [x] Labels visibles y asociados a cada campo (`htmlFor` / `id`).
- [x] `autoComplete` en nombre y email.
- [x] Navegable con teclado.
- [ ] Mensajes de éxito/error propios (hoy solo validación nativa del navegador).
- [x] Aviso bajo el botón: se abrirá WhatsApp en una nueva pestaña, con alternativa por correo (`mailto:`).

## 8. Analytics

No hay analítica. Si se añade, no enviar el contenido de los campos.
