import { BrandDivider } from "@/components/ui/BrandDivider";
import { createWhatsAppUrl, siteConfig } from "@/config/site";

export function Contact() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.whatsapp.appointmentMessage,
  );

  return (
    <section id="contacto" className="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <BrandDivider />

        <h2 id="contact-title" className="contact__title">
          Tu vehículo puede recuperar su mejor versión.
        </h2>
        <p className="contact__copy">
          Cuéntanos qué necesita tu vehículo. Iniciamos con una evaluación para
          orientarte al servicio adecuado.
        </p>

        <a
          className="button button--primary contact__button"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Agenda tu evaluación por WhatsApp, abre en una pestaña nueva"
        >
          Hablar por WhatsApp
        </a>

        <dl className="contact__facts">
          <div>
            <dt>Área de servicio</dt>
            <dd>Comarca Lagunera</dd>
          </div>
          <div>
            <dt>Contacto</dt>
            <dd>{siteConfig.whatsapp.displayNumber}</dd>
          </div>
          <div>
            <dt>Proceso</dt>
            <dd>Evaluación inicial</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
