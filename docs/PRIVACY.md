# PRIVACY.md

> Última revisión: 2026-10-19. Documento interno; no sustituye asesoría legal.

## 1. Inventario de datos

| Dato | Origen | Finalidad | Necesario | Sensibilidad |
|---|---|---|---|---|
| Nombre completo | Formulario de contacto | Identificar al solicitante | Sí | Baja |
| Email corporativo | Formulario de contacto | Responder la solicitud | Sí | Baja |
| Servicio de interés | Formulario de contacto | Clasificar la solicitud | Sí | Baja |
| Descripción del proyecto | Formulario de contacto (texto libre) | Entender la necesidad | Sí | Variable (el usuario podría escribir datos sensibles) |
| Número de teléfono y mensajes | WhatsApp, cuando el usuario envía el mensaje | Atención comercial | Sí | Baja |
| IP / user-agent | Carga de Google Fonts e imágenes de Unsplash | Funcionamiento del sitio | Técnico | Baja |

El sitio no almacena estos datos: el formulario solo prellena un mensaje en WhatsApp que el usuario decide enviar.

## 2. Responsable

SoftNanTec — razón social, RUC y domicilio `[EN TRÁMITE]`. Contacto: softnantec@gmail.com.

## 3. Finalidades

Responder solicitudes de contacto y preparar propuestas comerciales.

## 4. Base o fundamento

[POR DEFINIR según la normativa peruana aplicable — validar con un profesional]

## 5. Proveedores

| Proveedor | Servicio | Datos | País/Región | Contrato/DPA |
|---|---|---|---|---|
| Meta (WhatsApp) | Mensajería | Datos del formulario, teléfono | [POR DEFINIR] | Términos de WhatsApp |
| Google (Fonts) | Tipografías | IP, user-agent | [POR DEFINIR] | N/A |
| Unsplash | Imágenes | IP, user-agent | [POR DEFINIR] | N/A |
| Gmail (Google) | Correo, si el usuario escribe | Email y contenido | [POR DEFINIR] | [POR DEFINIR] |

## 6. Retención

| Dato | Periodo | Justificación | Eliminación |
|---|---|---|---|
| Conversaciones de WhatsApp / correo | [POR DEFINIR] | [POR DEFINIR] | [POR DEFINIR] |

## 7. Derechos del usuario

[POR DEFINIR según jurisdicción — validar con un profesional]

## 8. Transferencias internacionales

Probables a través de WhatsApp y Google `[POR CONFIRMAR]`.

## 9. Menores

[POR DEFINIR] — el sitio está orientado a empresas.

## 10. Seguridad

Ver `SECURITY.md`.

## 11. Formularios

Ver `FORMS_CONSENT.md`.

## 12. Cookies/tracking

El sitio no instala cookies ni usa analítica (2026-10-19), por lo que no existe `COOKIES.md`. Crear ese documento si se añade analítica, píxeles o embeds de terceros.

## 13. Minimización

- [x] Solo se recopilan datos necesarios.
- [x] No hay campos opcionales sin justificar.
- [x] El sitio no guarda información.
- [ ] Revisar si "Email corporativo" debe aceptar correos personales (hoy acepta cualquiera).

## 14. Política pública

Publicada como versión provisional en `/privacidad` (`src/pages/PrivacyPolicy.js`), enlazada desde el footer y el formulario. Refleja el funcionamiento real descrito en este documento. Pendientes en `docs/legal/PRIVACY_POLICY.md`.
