import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const focusAreas = [
  {
    title: "Expanding our network",
    copy: "More platforms, more voices, more reach.",
  },
  {
    title: "Deepening our expertise",
    copy: "Staying ahead of cultural trends and audience shifts.",
  },
  {
    title: "Strengthening partnerships",
    copy: "Building longer-term relationships that grow with our clients.",
  },
  {
    title: "Investing in innovation",
    copy: "New formats, new channels, and new ways to connect.",
  },
] as const;

export default function HowWeChange() {
  return (
    <section
      id="change"
      data-animate="section"
      className="section-fade section-offset border-t border-white/[0.06] bg-imn-black text-imn-white"
    >
      <div className="site-frame section-shell">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-end">
          <Reveal className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
              Focus Areas
            </p>
            <SectionHeader
              title="How We Change This Year"
              highlight="Change"
            />
          </Reveal>

          <Reveal
            delay={90}
            className="body-copy max-w-2xl text-[15px] text-white/76 md:text-base xl:ml-auto"
          >
            <p>The media landscape doesn&apos;t stand still, and neither do we.</p>
            <p className="mt-3">
              We&apos;re focused on the priorities that deepen value for clients
              and communities alike.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((area, index) => (
            <Reveal
              key={area.title}
              delay={150 + index * 90}
              className="h-full"
            >
              <article className="premium-panel h-full rounded-[28px] p-6">
                <h3 className="text-lg font-semibold text-white">
                  {area.title}
                </h3>
                <p className="body-copy mt-4 text-sm text-white/72 md:text-[15px]">
                  {area.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          delay={540}
          className="body-copy mt-8 max-w-2xl text-sm text-white/62 md:text-[15px]"
        >
          We&apos;re not chasing trends. We&apos;re setting them.
        </Reveal>
      </div>
    </section>
  );
}
