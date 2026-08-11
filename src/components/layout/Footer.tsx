import Image from "next/image";

import { createWhatsAppUrl, siteConfig } from "@/config/site";

export function Footer() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.whatsapp.informationMessage,
  );

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <Image
            className="site-footer__logo"
            src="/brand/zealous-logo-reversed.png"
            alt={siteConfig.businessName}
            width={2655}
            height={808}
          />
          <p>Cuidamos cada detalle, realzamos lo que te mueve.</p>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__label">Zona</p>
          <p>Comarca Lagunera</p>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__label">Contacto</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp ${siteConfig.whatsapp.displayNumber}, abre en una pestaña nueva`}
          >
            {siteConfig.whatsapp.displayNumber}
          </a>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__label">Sitio</p>
          <a href={siteConfig.domain}>zealouslaguna.mx</a>
        </div>
      </div>
    </footer>
  );
}
