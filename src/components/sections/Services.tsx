import { createWhatsAppUrl, siteConfig } from "@/config/site";

export function Services() {
  return (
    <section
      id="servicios"
      className="services"
      aria-labelledby="services-title"
    >
      <div className="services__intro">
        <h2 id="services-title" className="services__title">
          Cuidado integral para recuperar, corregir y proteger.
        </h2>
      </div>

      <ol className="services__grid">
        {siteConfig.services.map((service, index) => (
          <li className="service-card" key={service.name}>
            <div className="service-card__topline">
              <span className="service-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="service-card__shortname">{service.shortName}</span>
            </div>
            <div className="service-card__body">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
            <a
              className="service-card__link"
              href={createWhatsAppUrl(service.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Solicita información sobre ${service.name} por WhatsApp, abre en una pestaña nueva`}
            >
              Consultar servicio
              <svg
                className="service-card__arrow"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 19 19 5M8 5h11v11" />
              </svg>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
