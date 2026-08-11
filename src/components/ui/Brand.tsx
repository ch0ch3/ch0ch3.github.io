import Image from "next/image";

export function Brand() {
  return (
    <a
      className="brand"
      href="#inicio"
      aria-label="Zealous Laguna Auto Studio — Inicio"
    >
      <Image
        className="brand__logo"
        src="/brand/zealous-logo-primary.png"
        alt=""
        width={2655}
        height={808}
        priority
      />
    </a>
  );
}
