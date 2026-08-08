import { navigationItems } from "@/config/navigation";
import { Brand } from "@/components/ui/Brand";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Brand />

        <nav className="site-navigation" aria-label="Navegación principal">
          <ul className="site-navigation__list">
            {navigationItems.map((item) => (
              <li className="site-navigation__item" key={item.label}>
                <a
                  className="site-navigation__link"
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  aria-label={
                    item.external
                      ? `${item.label}, abre en una pestaña nueva`
                      : undefined
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
