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
  const hasCustomTextColor =
    className
      .split(/\s+/)
      .filter(Boolean)
      .some((token) => token.startsWith("text-") || token.startsWith("!text-"));
  const textColorClass = hasCustomTextColor ? "" : "text-white";

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
          <span key={`${segment}-${idx}`} className={isMatch ? highlightClass : undefined}>
            {segment}
          </span>
        );
      })
    : title;

  return (
    <div className={`flex flex-col items-start gap-3 ${textColorClass} ${className}`.trim()}>
      <HeadingTag className={`heading font-bold leading-[1.05] tracking-tight ${sizeClass}`}>
        {renderedTitle}
      </HeadingTag>
      <span
        className="block h-1 w-14 rounded-full bg-[#F04D24]"
        aria-hidden="true"
      />
    </div>
  );
}
