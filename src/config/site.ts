export type SiteConfig = {
  businessName: string;
  primaryBrand: string;
  descriptor: string;
  domain: string;
  whatsapp: {
    displayNumber: string;
    digits: string;
    appointmentMessage: string;
    informationMessage: string;
  };
  services: readonly string[];
  pending: {
    address: string | null;
    googleMapsUrl: string | null;
    hours: string | null;
    socialProfiles: string | null;
    appointmentScheduleUrl: string | null;
    publicEmail: string | null;
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
  whatsapp: {
    displayNumber: "+52 871 400 7772",
    digits: "528714007772",
    appointmentMessage:
      "Hola, quiero agendar una evaluación de mi vehículo con Zealous Laguna Auto Studio.",
    informationMessage:
      "Hola, vi la página de Zealous Laguna Auto Studio y quiero información sobre sus servicios.",
  },
  services: [
    "Detallado Automotriz",
    "Pulido",
    "Corrección de Pintura",
    "Recubrimiento Cerámico",
    "Hojalatería",
    "Pintura",
  ],
  pending: {
    address: null,
    googleMapsUrl: null,
    hours: null,
    socialProfiles: null,
    appointmentScheduleUrl: null,
    publicEmail: null,
    prices: null,
    promotions: null,
    testimonials: null,
    policies: null,
  },
} as const satisfies SiteConfig;

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp.digits}?text=${encodeURIComponent(message)}`;
}
