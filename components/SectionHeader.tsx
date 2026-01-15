type AccentColor = "orange" | "teal" | "purple" | "white" | "black";
type AccentStyle = "underline" | "bar" | "dot";

type SectionHeaderProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: AccentStyle;
  accentColor?: AccentColor;
  as?: "h1" | "h2";
};

const accentPalette: Record<AccentColor, string> = {
  orange: "bg-imn-orange",
  teal: "bg-imn-teal",
  purple: "bg-imn-purple",
  white: "bg-imn-white",
  black: "bg-imn-black",
};

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "left",
  accent = "underline",
  accentColor = "orange",
  as = "h2",
}: SectionHeaderProps) {
  const HeadingTag = as;
  const accentClass = accentPalette[accentColor] ?? accentPalette.orange;
  const inlineAccent = accent === "bar" || accent === "dot";

  const accentElement =
    accent === "underline" ? (
      <span
        className={`mt-4 block h-[2px] w-16 rounded-full ${accentClass} opacity-80 md:w-20`}
        aria-hidden="true"
      />
    ) : (
      <span
        className={`${accentClass} ${
          accent === "bar" ? "h-8 w-[2px]" : "h-2 w-2"
        } inline-flex rounded-full opacity-80`}
        aria-hidden="true"
      />
    );

  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      {kicker ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] opacity-60 md:text-xs">
          {kicker}
        </p>
      ) : null}

      <div
        className={`flex flex-wrap items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {inlineAccent ? accentElement : null}
        <HeadingTag
          className={`heading ${
            as === "h1" ? "text-4xl md:text-5xl" : "text-3xl md:text-[34px]"
          } leading-[1.08] tracking-tight`}
        >
          {title}
        </HeadingTag>
      </div>

      {accent === "underline" ? accentElement : null}

      {subtitle ? (
        <p className="body-copy max-w-3xl text-sm opacity-80 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
