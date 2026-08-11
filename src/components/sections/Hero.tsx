import Image from "next/image";

import { createWhatsAppUrl, siteConfig } from "@/config/site";

export function Hero() {
  const appointmentUrl = createWhatsAppUrl(
    siteConfig.whatsapp.appointmentMessage,
  );

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__stage">
        <Image
          className="hero__background"
          src="/images/hero-cinematic.jpg"
          alt="Vehículo moderno en un estudio automotriz con iluminación de inspección"
          fill
          preload
          sizes="100vw"
        />
        <div className="hero__wash" aria-hidden="true" />

        <div className="hero__content">
          <div className="hero__content-inner">
            <h1 id="hero-title" className="hero__title">
              <span>Detallado automotriz,</span>
              <span className="hero__title-accent">Pulido y</span>
              <span>Estética automotriz</span>
            </h1>

            <p className="hero__description">
              Transformamos vehículos mediante servicios profesionales de
              detallado automotriz, pulido, corrección de pintura,
              recubrimientos cerámicos, hojalatería y pintura.
            </p>

            <a
              className="button button--primary"
              href={appointmentUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Agenda tu cita por WhatsApp, abre en una pestaña nueva"
            >
              <span>Agenda tu cita</span>
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <figure className="workshop-proof">
        <div className="workshop-proof__media">
          <Image
            src="/images/hero.jpg"
            alt="Fachada real de Zealous Laguna Auto Studio con una camioneta en la entrada"
            fill
            sizes="(min-width: 90rem) 81rem, calc(100vw - 2rem)"
          />
          <figcaption>Taller real · Zealous Laguna</figcaption>
        </div>
      </figure>
    </section>
  );
}
