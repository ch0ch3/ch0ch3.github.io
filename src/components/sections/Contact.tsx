import { BrandDivider } from "@/components/ui/BrandDivider";
import { createWhatsAppUrl, siteConfig } from "@/config/site";

export function Contact() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.whatsapp.appointmentMessage,
  );

  return (
    <section id="contacto" className="contact" aria-labelledby="contact-title">
      <div className="contact__cta">
        <BrandDivider />

        <h2 id="contact-title" className="contact__title">
          ¿Qué necesita tu vehículo?
        </h2>
        <p className="contact__copy">
          Iniciamos con una evaluación para orientarte al servicio adecuado.
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
      </div>

      <div className="contact__location-shell">
        <div className="contact__location">
          <div className="contact__map-column">
            <div className="contact__address">
              <h3>Dirección</h3>
              <address>{siteConfig.location.address}</address>
            </div>

            <div className="contact__map">
              <iframe
                src={siteConfig.location.embedUrl}
                title={`Mapa de ${siteConfig.businessName}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact__details">
            <div className="contact__detail">
              <h3>WhatsApp</h3>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp ${siteConfig.whatsapp.displayNumber}, abre en una pestaña nueva`}
              >
                {siteConfig.whatsapp.displayNumber}
              </a>
            </div>

            <div className="contact__detail">
              <h3>Correo</h3>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>

            <div className="contact__detail">
              <h3>Ubicación</h3>
              <a
                className="contact__map-link"
                href={siteConfig.location.directionsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir la ubicación de Zealous Laguna Auto Studio en Google Maps, abre en una pestaña nueva"
              >
                Abrir Google Maps
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 19 19 5M8 5h11v11" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
