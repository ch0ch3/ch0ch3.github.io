import { siteConfig } from "@/config/site";

export function Services() {
  return (
    <section
      id="servicios"
      className="services"
      aria-labelledby="services-title"
    >
      <div className="services__intro">
        <p className="section-kicker">Nuestros servicios</p>
        <h2 id="services-title" className="services__title">
          Cuidado integral para cada etapa de tu vehículo.
        </h2>
      </div>

      <ol className="services__grid">
        {siteConfig.services.map((service, index) => (
          <li className="service-card" key={service}>
            <span className="service-card__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{service}</h3>
          </li>
        ))}
      </ol>
    </section>
  );
}
