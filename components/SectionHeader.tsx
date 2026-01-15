type HighlightColor = "orange" | "teal" | "purple";

type SectionHeaderProps = {
  title: string;
  highlight?: string;
  highlightColor?: HighlightColor;
  as?: "h1" | "h2";
  className?: string;
};

const highlightPalette: Record<HighlightColor, string> = {
  orange: "text-imn-orange",
  teal: "text-imn-teal",
  purple: "text-imn-purple",
};
const highlightHexPalette: Record<HighlightColor, string> = {
  orange: "#F04D24",
  teal: "#00A7A0",
  purple: "#7C3AED",
};

export default function SectionHeader({
  title,
  highlight,
  highlightColor = "orange",
  as = "h2",
  className = "",
}: SectionHeaderProps) {
  const HeadingTag = as;
  const sizeClass =
    as === "h1" ? "text-4xl md:text-5xl" : "text-3xl md:text-[34px]";
  const highlightClass = highlightPalette[highlightColor] ?? highlightPalette.orange;
  const highlightHex = highlightHexPalette[highlightColor] ?? highlightHexPalette.orange;
  const hasCustomTextColor = className
    .split(/\s+/)
    .filter(Boolean)
    .some((token) => token.startsWith("text-") || token.startsWith("!text-"));
  const headingColorClass = hasCustomTextColor ? "" : "text-white";
  const headingShadowStyle = hasCustomTextColor
    ? undefined
    : { textShadow: "0 12px 32px rgba(0, 0, 0, 0.35)" };

  // Premium gradient colors for different highlight colors
  const gradientStyles: Record<HighlightColor, string> = {
    orange: "bg-gradient-to-r from-[#F04D24] via-[#FF6B3D] to-[#F04D24]",
    teal: "bg-gradient-to-r from-[#00A7A0] via-[#00D4CC] to-[#00A7A0]",
    purple: "bg-gradient-to-r from-[#7C3AED] via-[#9F7AEA] to-[#7C3AED]",
  };

  const accentBarColors: Record<HighlightColor, string> = {
    orange: "bg-gradient-to-r from-[#F04D24] to-[#FF6B3D]",
    teal: "bg-gradient-to-r from-[#00A7A0] to-[#00D4CC]",
    purple: "bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA]",
  };

  let highlightUsed = false;
  const renderedTitle = highlight
    ? title.split(/(\s+)/).map((segment, idx) => {
        const trimmed = segment.trim();
        const plain = trimmed.replace(/[^\w'-]/g, "");
        const isMatch =
          !highlightUsed &&
          plain.length > 0 &&
          plain.toLowerCase() === highlight.toLowerCase();

        if (isMatch) {
          highlightUsed = true;
        }

        return (
          <span
            key={`${segment}-${idx}`}
            className={
              isMatch
                ? `${gradientStyles[highlightColor]} bg-clip-text text-transparent`
                : undefined
            }
          >
            {segment}
          </span>
        );
      })
    : title;

  return (
    <div className={`flex flex-col items-start gap-3 ${className}`.trim()}>
      <HeadingTag
        className={`heading font-bold leading-[1.05] tracking-tight ${sizeClass} ${headingColorClass}`.trim()}
        style={headingShadowStyle}
      >
        {renderedTitle}
      </HeadingTag>
      <span
        className={`block h-1 w-16 rounded-full ${accentBarColors[highlightColor]} shadow-[0_2px_8px_rgba(0,0,0,0.3)]`}
        aria-hidden="true"
      />
    </div>
  );
}
