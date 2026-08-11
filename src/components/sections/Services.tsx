import Image from "next/image";

import { createServiceUrl, siteConfig } from "@/config/site";

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
            const usesCatalog = Boolean(
              service.catalogEligible && service.catalogUrl,
            );

            return (
              <article className="service-record" key={service.name}>
                <div className="service-entry">
                  <span className="service-entry__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <a
                    className="service-entry__link"
                    href={createServiceUrl(service)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${
                      usesCatalog
                        ? `Consulta ${service.name} en el catálogo de WhatsApp`
                        : `Solicita información sobre ${service.name} por WhatsApp`
                    }, abre en una pestaña nueva`}
                  >
                    Consultar servicio
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 19 19 5M8 5h11v11" />
                    </svg>
                  </a>
                </div>

                <figure className="services__media">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 48rem) 50vw, 100vw"
                    style={{ objectPosition: service.image.position }}
                  />
                </figure>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
