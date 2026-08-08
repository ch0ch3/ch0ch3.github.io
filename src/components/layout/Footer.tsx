import { createWhatsAppUrl, siteConfig } from "@/config/site";

export function Footer() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.whatsapp.informationMessage,
  );

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">{siteConfig.businessName}</p>
        <p>Comarca Lagunera</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`WhatsApp ${siteConfig.whatsapp.displayNumber}, abre en una pestaña nueva`}
        >
          {siteConfig.whatsapp.displayNumber}
        </a>
        <a href={siteConfig.domain}>www.zealouslaguna.mx</a>
      </div>
    </footer>
  );
}
