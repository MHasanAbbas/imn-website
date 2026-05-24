import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  variant?: "contained";
  aspectRatio?: "default" | "large" | "square";
};

export default function SectionImage({
  src,
  alt,
  priority = false,
  className = "",
  variant = "contained",
  aspectRatio = "default",
}: SectionImageProps) {
  const baseFrame =
    variant === "contained"
      ? "rounded-[30px] border border-white/10 bg-imn-black/65 shadow-[0_38px_110px_-68px_rgba(0,0,0,0.85)]"
      : "";

  const aspectClass =
    aspectRatio === "large"
      ? "aspect-[4/3] md:aspect-[3/2] lg:aspect-[5/3]"
      : aspectRatio === "square"
      ? "aspect-square"
      : "aspect-[16/10] md:aspect-[21/10]";

  return (
    <div className={`relative overflow-hidden ${baseFrame} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/8 to-black/32" />
      <div className={`relative ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
          priority={priority}
        />
      </div>
    </div>
  );
}
