import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SectionImage from "@/components/SectionImage";

const principles = [
  {
    title: "Inclusivity",
    copy: "We champion diverse narratives, voices, and communities. Representation isn't a checkbox for us; it's the entire point.",
  },
  {
    title: "Connection",
    copy: "We use deep networks and cultural insight to link brands with the right audiences, at the right time, in the right way.",
  },
  {
    title: "Empowerment",
    copy: "We equip our clients with the tools, confidence, and clarity they need to scale their impact without losing authenticity.",
  },
  {
    title: "Energy",
    copy: "Our storytelling is dynamic, bold, and human-first. We bring energy to every partnership because that's what creates momentum.",
  },
] as const;

export default function HowWeWork() {
  return (
    <section
      id="work"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="site-frame section-shell">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-start xl:gap-14">
          <div>
            <Reveal className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
                Approach
              </p>
              <SectionHeader
                title="How We Work"
                highlight="Work"
                highlightColor="teal"
              />
            </Reveal>

            <Reveal
              delay={90}
              as="p"
              className="body-copy mt-6 max-w-3xl text-base text-white/76 md:text-lg"
            >
              Everything we do is built on four core principles. They&apos;re
              not just values on a wall; they&apos;re how we operate, every
              day.
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {principles.map((principle, index) => (
                <Reveal
                  key={principle.title}
                  delay={160 + index * 90}
                  className="h-full"
                >
                  <article className="premium-panel h-full rounded-[28px] p-6 md:p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38 md:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {principle.title}
                    </h3>
                    <p className="body-copy mt-4 text-sm text-white/74 md:text-[15px]">
                      {principle.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={220} className="relative xl:pt-1">
            <div
              className="pointer-events-none absolute -bottom-8 -left-8 -right-8 -top-8 rounded-[36px] bg-gradient-to-br from-imn-orange/18 via-imn-teal/14 to-imn-purple/10 blur-3xl"
              aria-hidden="true"
            />
            <SectionImage
              src="/images/imn-connection.jpg"
              alt="Team collaboration within the Inclusive Media Network"
              className="relative z-10 w-full"
              aspectRatio="large"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
