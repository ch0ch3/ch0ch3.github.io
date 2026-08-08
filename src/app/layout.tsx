import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zealouslaguna.mx"),
  title: "Zealous Laguna Auto Studio",
  description:
    "Cuidado automotriz en la Comarca Lagunera: detallado, pulido, corrección de pintura, recubrimiento cerámico, hojalatería y pintura.",
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
      <body>{children}</body>
    </html>
  );
}
