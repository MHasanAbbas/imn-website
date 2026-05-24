import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Team() {
  return (
    <section
      id="team"
      data-animate="section"
      className="section-fade section-offset bg-imn-grey text-imn-black"
    >
      <div className="site-frame section-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
          <Reveal className="flex flex-col gap-3 lg:pt-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-imn-black/70 md:text-xs">
              People
            </p>
            <SectionHeader
              title="Team"
              highlight="Team"
              className="text-imn-black"
            />
          </Reveal>

          <div className="space-y-4">
            <Reveal
              delay={90}
              className="premium-panel-light rounded-[30px] p-7 md:p-8"
            >
              <p className="text-lg font-semibold leading-snug text-imn-black md:text-[22px]">
                The People Behind the Platform
              </p>
              <p className="body-copy mt-4 text-[15px] text-imn-black/82 md:text-base">
                IMN is powered by a team with deep experience across media,
                partnerships, and multicultural marketing. We&apos;ve worked
                agency-side, brand-side, and platform-side, so we understand
                every angle of what makes campaigns succeed.
              </p>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <Reveal
                delay={180}
                className="premium-panel-light rounded-[26px] p-6"
              >
                <p className="body-copy text-[15px] text-imn-black/78 md:text-base">
                  What sets us apart? We&apos;re not just selling media.
                  We&apos;re building bridges between brands and the
                  communities they want to reach.
                </p>
              </Reveal>

              <Reveal
                delay={270}
                className="rounded-[26px] border border-black/[0.1] bg-black/[0.035] p-6 text-sm leading-6 text-black/68"
              >
                Team member profiles will be added following final approval.
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
