export type SiteConfig = {
  businessName: string;
  primaryBrand: string;
  descriptor: string;
  domain: string;
  email: string;
  location: {
    address: string;
    placeId: string;
    embedUrl: string;
    directionsUrl: string;
  };
  whatsapp: {
    displayNumber: string;
    digits: string;
    appointmentMessage: string;
    informationMessage: string;
  };
  services: readonly {
    name: string;
    shortName: string;
    description: string;
    whatsappMessage: string;
  }[];
  pending: {
    hours: string | null;
    socialProfiles: string | null;
    appointmentScheduleUrl: string | null;
    prices: string | null;
    promotions: string | null;
    testimonials: string | null;
    policies: string | null;
  };
};

export const siteConfig = {
  businessName: "Zealous Laguna Auto Studio",
  primaryBrand: "Zealous Laguna",
  descriptor: "Auto Studio",
  domain: "https://www.zealouslaguna.mx",
  email: "delachicav@zealouslaguna.mx",
  location: {
    address: "Blvrd el Tajito 42, El Tajito, 27100 Torreón, Coah.",
    placeId: "ChIJl8CGEwDbj4YRwIkr8SWftPk",
    embedUrl:
      "https://www.google.com/maps?q=Blvrd%20el%20Tajito%2042%2C%20El%20Tajito%2C%2027100%20Torre%C3%B3n%2C%20Coah.&output=embed",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Zealous%20Laguna%20Auto%20Studio&query_place_id=ChIJl8CGEwDbj4YRwIkr8SWftPk",
  },
  whatsapp: {
    displayNumber: "+52 871 400 7772",
    digits: "528714007772",
    appointmentMessage:
      "Hola, quiero agendar una evaluación de mi vehículo con Zealous Laguna Auto Studio.",
    informationMessage:
      "Hola, vi la página de Zealous Laguna Auto Studio y quiero información sobre sus servicios.",
  },
  services: [
    {
      name: "Detallado Automotriz",
      shortName: "Detallado",
      description:
        "Limpieza profunda y cuidado preciso de cada superficie para renovar la apariencia de tu vehículo.",
      whatsappMessage:
        "Hola, quiero información sobre el servicio de detallado automotriz de Zealous Laguna Auto Studio.",
    },
    {
      name: "Pulido",
      shortName: "Pulido",
      description:
        "Recuperamos brillo y profundidad, reduciendo opacidad, marcas superficiales y pequeños rayones.",
      whatsappMessage:
        "Hola, quiero información sobre el servicio de pulido de Zealous Laguna Auto Studio.",
    },
    {
      name: "Corrección de Pintura",
      shortName: "Corrección",
      description:
        "Un proceso especializado para reducir micro-rayones, marcas circulares y defectos visibles en la pintura.",
      whatsappMessage:
        "Hola, quiero información sobre corrección de pintura en Zealous Laguna Auto Studio.",
    },
    {
      name: "Recubrimiento Cerámico",
      shortName: "Cerámico",
      description:
        "Mayor brillo, efecto hidrofóbico y una barrera de protección frente a contaminantes y agentes externos.",
      whatsappMessage:
        "Hola, quiero información sobre recubrimiento cerámico en Zealous Laguna Auto Studio.",
    },
    {
      name: "Hojalatería",
      shortName: "Hojalatería",
      description:
        "Reparamos golpes y daños en la carrocería buscando recuperar las líneas y formas originales del vehículo.",
      whatsappMessage:
        "Hola, quiero información sobre el servicio de hojalatería de Zealous Laguna Auto Studio.",
    },
    {
      name: "Pintura Automotriz",
      shortName: "Pintura",
      description:
        "Preparación, igualación de color y repintado de piezas con atención meticulosa al acabado final.",
      whatsappMessage:
        "Hola, quiero información sobre pintura automotriz en Zealous Laguna Auto Studio.",
    },
  ],
  pending: {
    hours: null,
    socialProfiles: null,
    appointmentScheduleUrl: null,
    prices: null,
    promotions: null,
    testimonials: null,
    policies: null,
  },
} as const satisfies SiteConfig;

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp.digits}?text=${encodeURIComponent(message)}`;
}
