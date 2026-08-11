import Image from "next/image";
import { Fragment } from "react";

import { createWhatsAppUrl, siteConfig } from "@/config/site";

const serviceImages = [
  {
    src: "/images/services/interior-detailing.jpg",
    alt: "Interior limpio de un vehículo moderno dentro de un estudio automotriz",
    position: "center",
  },
  {
    src: "/images/services/paint-polishing.jpg",
    alt: "Pulido de la pintura de un vehículo moderno con una máquina inalámbrica",
    position: "center",
  },
  {
    src: "/images/services/ceramic-coating.jpg",
    alt: "Aplicación de recubrimiento cerámico sobre la pintura de un vehículo moderno",
    position: "center",
  },
] as const;

export function Services() {
  return (
    <section
      id="servicios"
      className="services"
      aria-labelledby="services-title"
    >
      <div className="services__inner">
        <div className="services__intro">
          <h2 id="services-title" className="services__title">
            Nuestros servicios
          </h2>
          <p className="services__lead">
            Cuidado integral para recuperar, corregir y proteger.
          </p>
        </div>

        <div className="services__matrix">
          {siteConfig.services.map((service, index) => {
            const image = index % 2 === 1 ? serviceImages[(index - 1) / 2] : null;

            return (
              <Fragment key={service.name}>
                <article className="service-entry">
                  <span className="service-entry__index" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <a
                    className="service-entry__link"
                    href={createWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Solicita información sobre ${service.name} por WhatsApp, abre en una pestaña nueva`}
                  >
                    Consultar servicio
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 19 19 5M8 5h11v11" />
                    </svg>
                  </a>
                </article>

                {image ? (
                  <figure className="services__media">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 64rem) 30vw, (min-width: 36rem) 92vw, 100vw"
                      style={{ objectPosition: image.position }}
                    />
                  </figure>
                ) : null}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
