import { BrandDivider } from "@/components/ui/BrandDivider";

export function Story() {
  return (
    <section id="nosotros" className="story" aria-labelledby="story-title">
      <div className="story__inner">
        <div className="story__heading">
          <h2 id="story-title" className="story__title">
            Dedicación en cada detalle.
          </h2>
        </div>

        <div className="story__copy">
          <p className="story__lead">
            Zealous Laguna Auto Studio nace de una verdadera pasión por los
            automóviles y de la satisfacción de ver cómo cada vehículo puede
            recuperar su mejor versión.
          </p>
          <p>
            Para nosotros, un auto es mucho más que un medio de transporte. Es
            parte de historias, experiencias y momentos importantes; por eso,
            cada vehículo recibe atención, paciencia y cuidado preciso.
          </p>
          <p>
            Trabajamos cada vehículo como trabajaríamos el nuestro: con técnica,
            dedicación y un compromiso constante con el acabado final.
          </p>
        </div>

        <blockquote className="story__statement">
          Porque cuando amas lo que haces, se nota en cada detalle.
        </blockquote>

        <BrandDivider />
      </div>
    </section>
  );
}
