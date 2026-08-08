import { createWhatsAppUrl, siteConfig } from "@/config/site";

export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  {
    label: "WhatsApp",
    href: createWhatsAppUrl(siteConfig.whatsapp.informationMessage),
    external: true,
  },
] as const;
