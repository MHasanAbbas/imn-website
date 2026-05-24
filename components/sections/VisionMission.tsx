import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function VisionMission() {
  return (
    <section
      id="vision"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="section-shell mx-auto max-w-6xl px-6">
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

        <div className="mt-8 max-w-3xl body-copy space-y-5 text-white">
          <Reveal delay={80}>
            <div>
              <strong>Where We&apos;re Heading</strong>
              <br />
              We&apos;re building the UK&apos;s leading multicultural media
              sales platform-not just by growing bigger, but by going deeper.
              Deeper insights. Deeper connections. Deeper impact.
            </div>
          </Reveal>

          <Reveal delay={170}>
            <div>
              <strong>Our Vision</strong>
              <br />
              To become the leading multicultural media sales platform in the
              UK.
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div>
              <strong>Our Mission</strong>
              <br />
              We connect brands with multicultural audiences through strategic
              media and content solutions that are bold, relevant, and rooted
              in experience. Every campaign we create is designed to resonate,
              not just reach.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
