import SectionHeader from "@/components/SectionHeader";
import SectionImage from "@/components/SectionImage";

export default function HowWeWork() {
  return (
    <section
      id="work"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
            Approach
          </p>
          <SectionHeader
            title="How We Work"
            highlight="Work"
            highlightColor="teal"
          />
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="body-copy mb-12 max-w-3xl space-y-4 text-white/90">
            <p className="text-lg text-white/80">
              Everything we do is built on four core principles. They&apos;re not just values on a wall-they&apos;re how we operate, every day.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="body-copy space-y-6 text-white">
              <div>
                <strong className="text-lg text-white">Inclusivity</strong>
                <br />
                <span className="text-white/85">We champion diverse narratives, voices, and communities. Representation isn&apos;t a checkbox for us-it&apos;s the entire point.</span>
              </div>
              <div>
                <strong className="text-lg text-white">Connection</strong>
                <br />
                <span className="text-white/85">We use deep networks and cultural insight to link brands with the right audiences, at the right time, in the right way.</span>
              </div>
              <div>
                <strong className="text-lg text-white">Empowerment</strong>
                <br />
                <span className="text-white/85">We equip our clients with the tools, confidence, and clarity they need to scale their impact without losing authenticity.</span>
              </div>
              <div>
                <strong className="text-lg text-white">Energy</strong>
                <br />
                <span className="text-white/85">Our storytelling is dynamic, bold, and human-first. We bring energy to every partnership because that&apos;s what creates momentum.</span>
              </div>
            </div>

            <div className="relative lg:sticky lg:top-24">
              <div
                className="pointer-events-none absolute -left-8 -top-8 -right-8 -bottom-8 rounded-[32px] bg-gradient-to-br from-imn-orange/20 via-imn-teal/15 to-imn-purple/10 blur-3xl"
                aria-hidden="true"
              />
              <SectionImage
                src="/images/imn-connection.jpg"
                alt="Team collaboration within the Inclusive Media Network"
                className="relative z-10 w-full drop-shadow-[0_32px_100px_rgba(0,0,0,0.6)]"
                aspectRatio="large"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
