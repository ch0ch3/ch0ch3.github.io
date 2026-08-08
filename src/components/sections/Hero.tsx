import Image from "next/image";

import { createWhatsAppUrl, siteConfig } from "@/config/site";

export function Hero() {
  const appointmentUrl = createWhatsAppUrl(
    siteConfig.whatsapp.appointmentMessage,
  );
  const informationUrl = createWhatsAppUrl(
    siteConfig.whatsapp.informationMessage,
  );

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__content-inner">
          <p className="hero__eyebrow">Cuidado automotriz · Comarca Lagunera</p>

          <h1 id="hero-title" className="hero__title">
            Zealous Laguna
            <span>Auto Studio</span>
          </h1>

          <p className="hero__subtitle">
            Detallado, corrección y protección con atención profesional.
          </p>

          <p className="hero__description">
            Transformamos vehículos mediante servicios de detallado automotriz,
            pulido, corrección de pintura, recubrimiento cerámico, hojalatería y
            pintura.
          </p>

          <div className="hero__actions" aria-label="Contacto por WhatsApp">
            <a
              className="button button--primary"
              href={appointmentUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Agenda tu evaluación por WhatsApp, abre en una pestaña nueva"
            >
              Agenda tu evaluación
            </a>
            <a
              className="button button--secondary"
              href={informationUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Solicita información por WhatsApp, abre en una pestaña nueva"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="hero-art">
        <Image
          className="hero-art__image"
          src="/images/hero.jpg"
          alt="Fachada de Zealous Laguna Auto Studio con una camioneta en la entrada"
          fill
          preload
          sizes="(min-width: 64rem) 45vw, 100vw"
        />
      </div>
    </section>
  );
}
