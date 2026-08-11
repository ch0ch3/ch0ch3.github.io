import { BrandDivider } from "@/components/ui/BrandDivider";

export function Story() {
  return (
    <section id="nosotros" className="story" aria-labelledby="story-title">
      <div className="story__inner">
        <div className="story__heading">
          <h2 id="story-title" className="story__title">
            <span className="story__title-question">¿Quiénes somos?</span>
            <span className="story__title-promise">
              Pasión por los autos, dedicación en cada detalle
            </span>
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
            cada vehículo que llega a nuestras manos recibe atención,
            dedicación y cuidado en cada detalle.
          </p>
          <p>
            Nos especializamos en detallado automotriz, pulido, corrección de
            pintura, recubrimientos cerámicos, pintura y hojalatería, combinando
            técnica, productos de calidad y un compromiso constante por lograr
            excelentes acabados.
          </p>
          <p>
            En Zealous trabajamos cada vehículo como trabajaríamos el nuestro:
            con paciencia, precisión y, sobre todo, con una auténtica pasión por
            los autos.
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
