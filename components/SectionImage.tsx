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
      ? "rounded-2xl border border-white/10 bg-imn-black/60 shadow-[0_22px_80px_-52px_rgba(0,0,0,0.65)]"
      : "";

  const aspectClass =
    aspectRatio === "large"
      ? "aspect-[4/3] md:aspect-[3/2] lg:aspect-[5/3]"
      : aspectRatio === "square"
      ? "aspect-square"
      : "aspect-[16/9] md:aspect-[21/9]";

  return (
    <div className={`relative overflow-hidden ${baseFrame} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/12 to-black/30" />
      <div className={`relative ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 1024px, 100vw"
          priority={priority}
        />
      </div>
    </div>
  );
}
