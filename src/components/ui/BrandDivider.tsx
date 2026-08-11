import Image from "next/image";

export function BrandDivider() {
  return (
    <div className="brand-divider" aria-hidden="true">
      <Image
        className="brand-divider__image"
        src="/brand/zealous-divider.png"
        alt=""
        width={1600}
        height={180}
      />
    </div>
  );
}
