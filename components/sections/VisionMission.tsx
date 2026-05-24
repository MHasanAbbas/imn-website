import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const pillars = [
  {
    title: "Our Vision",
    copy: "To become the leading multicultural media sales platform in the UK.",
  },
  {
    title: "Our Mission",
    copy: "We connect brands with multicultural audiences through strategic media and content solutions that are bold, relevant, and rooted in experience. Every campaign we create is designed to resonate, not just reach.",
  },
] as const;

export default function VisionMission() {
  return (
    <section
      id="vision"
      data-animate="section"
      className="section-fade section-offset border-t border-white/[0.06] bg-imn-black text-imn-white"
    >
      <div className="site-frame section-shell">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-end">
          <Reveal className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
              Direction
            </p>
            <SectionHeader
              title="Vision & Mission"
              highlight="Vision"
              highlightColor="purple"
            />
          </Reveal>

          <Reveal
            delay={90}
            className="premium-panel rounded-[30px] p-7 md:p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45 md:text-xs">
              Where We&apos;re Heading
            </p>
            <p className="body-copy mt-4 text-[15px] text-white/76 md:text-base">
              We&apos;re building the UK&apos;s leading multicultural media
              sales platform, not just by growing bigger, but by going deeper.
              Deeper insights. Deeper connections. Deeper impact.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={170 + index * 100}
              className="h-full"
            >
              <article className="premium-panel h-full rounded-[28px] p-6 md:p-7">
                <h3 className="text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="body-copy mt-4 text-sm text-white/74 md:text-[15px]">
                  {pillar.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
