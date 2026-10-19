import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { COMPANY, CONTACT, PRIVACY_POLICY_UPDATED } from '../config/site';

const isCompanyRegistered = Boolean(COMPANY.legalName && COMPANY.ruc && COMPANY.address);

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-white mb-4 font-display">{title}</h2>
    <div className="space-y-4 text-slate-400 leading-relaxed">{children}</div>
  </section>
);

const List = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const MailLink = () => (
  <a href={`mailto:${CONTACT.email}`} className="text-brand-green font-semibold hover:underline">
    {CONTACT.email}
  </a>
);

const PrivacyPolicy = () => {
  usePageMeta({
    title: 'Política de Privacidad | SoftNanTec',
    description: 'Cómo SoftNanTec trata los datos personales que usted comparte a través de este sitio web, WhatsApp o correo electrónico.',
    path: '/privacidad',
  });

  return (
    <div className="pt-32 pb-20 bg-brand-950 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-6">Legal</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 font-display tracking-tight leading-tight">
            Política de Privacidad
          </h1>
          <p className="text-slate-400 mb-10">Última actualización: {PRIVACY_POLICY_UPDATED}</p>

          {!isCompanyRegistered && (
            <div className="glass rounded-2xl p-6 mb-12 border border-brand-green/20" role="note">
              <p className="text-white font-semibold mb-1">Versión provisional</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                SoftNanTec se encuentra en proceso de constitución. Completaremos esta política con la razón social,
                el RUC y el domicilio fiscal en cuanto finalice el registro.
              </p>
            </div>
          )}

          <Section title="1. Responsable de sus datos">
            {isCompanyRegistered ? (
              <p>
                {COMPANY.legalName}, con RUC {COMPANY.ruc} y domicilio en {COMPANY.address} (en adelante, "SoftNanTec").
              </p>
            ) : (
              <p>SoftNanTec, con sede en {CONTACT.location} (empresa en proceso de constitución).</p>
            )}
            <p>
              Para cualquier consulta sobre sus datos puede escribirnos a <MailLink />.
            </p>
          </Section>

          <Section title="2. Qué datos recopilamos">
            <p>Solo tratamos los datos que usted decide compartir con nosotros:</p>
            <List
              items={[
                'Formulario de contacto: nombre, correo electrónico, servicio de interés y la descripción de su proyecto.',
                'WhatsApp: si envía el mensaje, recibimos también su número de teléfono y la conversación.',
                'Correo electrónico: su dirección y el contenido del mensaje, si nos escribe directamente.',
              ]}
            />
            <p>
              Este sitio no utiliza cookies ni herramientas de analítica o publicidad, y no almacena en sus servidores los
              datos del formulario.
            </p>
          </Section>

          <Section title="3. Cómo funciona el formulario de contacto">
            <p>
              Al pulsar "Solicitar Análisis Técnico", su navegador abre WhatsApp con un mensaje prellenado con los datos del
              formulario. El mensaje solo nos llega si usted decide enviarlo desde WhatsApp.
            </p>
          </Section>

          <Section title="4. Para qué los usamos">
            <List
              items={[
                'Responder su consulta o solicitud.',
                'Preparar un análisis inicial o una propuesta de servicios, si usted lo solicita.',
                'Gestionar la relación comercial, si se concreta un servicio.',
              ]}
            />
          </Section>

          <Section title="5. Base para el tratamiento">
            <p>
              Tratamos sus datos con su consentimiento, que usted otorga al enviarnos su mensaje, y para atender las
              solicitudes que nos hace, conforme a la Ley N.° 29733, Ley de Protección de Datos Personales del Perú.
            </p>
          </Section>

          <Section title="6. Con quién compartimos sus datos">
            <p>No vendemos ni cedemos sus datos a terceros. Para operar utilizamos estos servicios:</p>
            <List
              items={[
                'WhatsApp (Meta Platforms), canal por el que se envía el mensaje del formulario.',
                'Gmail (Google), si nos escribe por correo electrónico.',
                'Google Fonts y Unsplash, que proveen las tipografías e imágenes del sitio y reciben datos técnicos de su navegador, como la dirección IP.',
              ]}
            />
            <p>Estos proveedores pueden procesar la información fuera del Perú, conforme a sus propias políticas de privacidad.</p>
          </Section>

          <Section title="7. Cuánto tiempo los conservamos">
            <p>
              Conservamos sus datos solo durante el tiempo necesario para atender su solicitud y, si se concreta un servicio,
              durante la relación comercial y los plazos que exija la ley.
            </p>
          </Section>

          <Section title="8. Sus derechos">
            <p>
              Puede solicitar el acceso, la rectificación, la cancelación o la oposición al tratamiento de sus datos
              escribiendo a <MailLink /> con el asunto "Protección de datos". Le responderemos dentro de los plazos que
              establece la ley.
            </p>
            <p>
              Si considera que no hemos atendido su solicitud, puede acudir a la Autoridad Nacional de Protección de Datos
              Personales del Ministerio de Justicia y Derechos Humanos.
            </p>
          </Section>

          <Section title="9. Seguridad">
            <p>
              El sitio se sirve exclusivamente por HTTPS y no guarda los datos del formulario. Protegemos la información que
              recibimos por WhatsApp y correo con medidas razonables de acceso y resguardo.
            </p>
          </Section>

          <Section title="10. Menores de edad">
            <p>Este sitio está dirigido a empresas y profesionales. No recopilamos intencionalmente datos de menores de edad.</p>
          </Section>

          <Section title="11. Cambios en esta política">
            <p>
              Publicaremos en esta página cualquier cambio, indicando la fecha de la última actualización.
            </p>
          </Section>

          <div className="pt-8 border-t border-white/10">
            <Link to="/contacto" className="text-brand-green font-bold hover:underline">
              ¿Tiene preguntas? Contáctenos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
