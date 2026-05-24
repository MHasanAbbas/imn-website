import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function HowWeChange() {
  return (
    <section
      id="change"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="section-shell mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
            Focus Areas
          </p>
          <SectionHeader
            title="How We Change This Year"
            highlight="Change"
          />
        </Reveal>

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-white">
          <Reveal delay={80}>
            <div>
              <strong>Always Evolving</strong>
            </div>
          </Reveal>

          <Reveal as="p" delay={140}>
            The media landscape doesn&apos;t stand still, and neither do we.
            This year, we&apos;re focused on:
          </Reveal>

          <ul className="list-disc list-inside space-y-2">
            <Reveal as="li" delay={220}>
              <strong>Expanding our network</strong> - More platforms, more
              voices, more reach
            </Reveal>
            <Reveal as="li" delay={300}>
              <strong>Deepening our expertise</strong> - Staying ahead of
              cultural trends and audience shifts
            </Reveal>
            <Reveal as="li" delay={380}>
              <strong>Strengthening partnerships</strong> - Building
              longer-term relationships that grow with our clients
            </Reveal>
            <Reveal as="li" delay={460}>
              <strong>Investing in innovation</strong> - New formats, new
              channels, new ways to connect
            </Reveal>
          </ul>

          <Reveal as="p" delay={540}>
            We&apos;re not chasing trends. We&apos;re setting them.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
