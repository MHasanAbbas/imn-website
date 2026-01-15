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

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div className="body-copy space-y-4 text-white">
            <p className="text-white/80">
              Everything we do is built on four core principles. They&apos;re not just values on a wall-they&apos;re how we operate, every day.
            </p>

            <div className="space-y-3">
              <div>
                <strong>Inclusivity</strong>
                <br />
                We champion diverse narratives, voices, and communities. Representation isn&apos;t a checkbox for us-it&apos;s the entire point.
              </div>
              <div>
                <strong>Connection</strong>
                <br />
                We use deep networks and cultural insight to link brands with the right audiences, at the right time, in the right way.
              </div>
              <div>
                <strong>Empowerment</strong>
                <br />
                We equip our clients with the tools, confidence, and clarity they need to scale their impact without losing authenticity.
              </div>
              <div>
                <strong>Energy</strong>
                <br />
                Our storytelling is dynamic, bold, and human-first. We bring energy to every partnership because that&apos;s what creates momentum.
              </div>
            </div>
          </div>

          <SectionImage
            src="/images/imn-connection.jpg"
            alt="Team collaboration within the Inclusive Media Network"
            className="w-full max-w-2xl lg:justify-self-end"
          />
        </div>
      </div>
    </section>
  );
}
