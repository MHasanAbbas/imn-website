import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Team() {
  return (
    <section
      id="team"
      data-animate="section"
      className="section-fade section-offset bg-imn-grey text-imn-black"
    >
      <div className="section-shell mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-imn-black/70 md:text-xs">
            People
          </p>
          <SectionHeader
            title="Team"
            highlight="Team"
            className="text-imn-black"
          />
        </Reveal>

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-imn-black">
          <Reveal delay={80}>
            <div>
              <strong>The People Behind the Platform</strong>
            </div>
          </Reveal>

          <Reveal as="p" delay={160}>
            IMN is powered by a team with deep experience across media,
            partnerships, and multicultural marketing. We&apos;ve worked
            agency-side, brand-side, and platform-side, so we understand every
            angle of what makes campaigns succeed.
          </Reveal>

          <Reveal as="p" delay={240}>
            What sets us apart? We&apos;re not just selling media. We&apos;re
            building bridges between brands and the communities they want to
            reach.
          </Reveal>

          <Reveal as="p" delay={320} className="text-black/70">
            Team member profiles will be added following final approval.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
