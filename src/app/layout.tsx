import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zealouslaguna.mx"),
  title: "Zealous Laguna Auto Studio",
  description:
    "Cuidado automotriz en la Comarca Lagunera: detallado, pulido, corrección de pintura, recubrimiento cerámico, hojalatería y pintura.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Zealous Laguna Auto Studio",
    title: "Zealous Laguna Auto Studio",
    description:
      "Cuidado automotriz en la Comarca Lagunera: detallado, pulido, corrección de pintura, recubrimiento cerámico, hojalatería y pintura.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zealous Laguna Auto Studio: detallado, pulido y estética automotriz en la Comarca Lagunera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zealous Laguna Auto Studio",
    description:
      "Cuidado automotriz en la Comarca Lagunera: detallado, pulido, corrección de pintura, recubrimiento cerámico, hojalatería y pintura.",
    images: ["/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>
        <template
          data-design-contract="THESIS: precisión automotriz real con una portada cinematográfica y evidencia del taller. OWN-WORLD: carbón, marfil, rojo Zealous, logo oficial y retícula técnica. STORY: portada, taller real, pasión, servicios y evaluación por WhatsApp. FIRST-VIEWPORT: navegación transparente integrada, un logo blanco, vehículo moderno, texto editorial y una sola acción. FORM: asimetría automotriz, seed ZEALOUS-CANVA-2026. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md."
          data-seed="ZEALOUS-CANVA-2026"
        />
        {children}
      </body>
    </html>
  );
}
