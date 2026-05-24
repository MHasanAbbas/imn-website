import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function MissionStatement() {
  return (
    <section
      id="mission-statement"
      data-animate="section"
      className="section-fade section-offset bg-imn-orange text-imn-black"
    >
      <div className="site-frame section-shell">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:gap-14">
          <Reveal className="flex flex-col gap-3 xl:pt-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-imn-black/70 md:text-xs">
              Commitment
            </p>
            <SectionHeader
              title="Mission Statement"
              highlight="Mission"
              className="text-imn-black"
            />
          </Reveal>

          <Reveal
            delay={100}
            className="rounded-[32px] border border-black/[0.12] bg-black/[0.06] p-8 shadow-[0_32px_90px_-60px_rgba(0,0,0,0.45)] md:p-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-imn-black/55 md:text-xs">
              Why We Exist
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <p className="text-xl font-semibold leading-relaxed text-imn-black md:text-[24px]">
                Inclusive Media Network exists to empower brands by connecting
                them authentically with multicultural communities.
              </p>

              <div className="body-copy space-y-4 text-[15px] text-imn-black/80 md:text-base">
                <p>
                  We deliver strategic media and content solutions that are
                  bold, relevant, and rooted in experience, helping brands
                  reach audiences that matter in ways that resonate.
                </p>
                <p>
                  We&apos;re here because multicultural Britain deserves better
                  than tokenism. And brands deserve partners who understand
                  that.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
