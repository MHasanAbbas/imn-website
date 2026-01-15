import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  variant?: "contained";
};

export default function SectionImage({
  src,
  alt,
  priority = false,
  className = "",
  variant = "contained",
}: SectionImageProps) {
  const baseFrame =
    variant === "contained"
      ? "rounded-2xl border border-white/10 bg-imn-black/75 shadow-[0_22px_80px_-52px_rgba(0,0,0,0.85)]"
      : "";

  return (
    <div className={`relative overflow-hidden ${baseFrame} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75" />
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover brightness-90"
          sizes="(min-width: 1024px) 1024px, 100vw"
          priority={priority}
        />
      </div>
    </div>
  );
}
