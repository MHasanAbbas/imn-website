import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Plans() {
  return (
    <section
      id="plans"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="section-shell mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
            Roadmap
          </p>
          <SectionHeader title="Plans" highlight="Plans" />
        </Reveal>

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-white">
          <Reveal delay={80}>
            <div>
              <strong>What&apos;s Next</strong>
            </div>
          </Reveal>

          <Reveal as="p" delay={140}>
            We&apos;re growing with intention. Our focus for the year ahead:
          </Reveal>

          <ul className="list-disc list-inside space-y-2">
            <Reveal as="li" delay={220}>
              Becoming the go-to platform for brands serious about multicultural
              engagement
            </Reveal>
            <Reveal as="li" delay={300}>
              Expanding our media inventory across digital, audio, video, and
              experiential
            </Reveal>
            <Reveal as="li" delay={380}>
              Building strategic partnerships with platforms and creators who
              share our values
            </Reveal>
            <Reveal as="li" delay={460}>
              Delivering campaigns that don&apos;t just perform-they set new
              standards
            </Reveal>
          </ul>

          <Reveal as="p" delay={540}>
            This isn&apos;t about being everywhere. It&apos;s about being the
            best at what we do.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
