import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const plans = [
  "Becoming the go-to platform for brands serious about multicultural engagement.",
  "Expanding our media inventory across digital, audio, video, and experiential.",
  "Building strategic partnerships with platforms and creators who share our values.",
  "Delivering campaigns that don't just perform; they set new standards.",
] as const;

export default function Plans() {
  return (
    <section
      id="plans"
      data-animate="section"
      className="section-fade section-offset border-t border-white/[0.06] bg-imn-black text-imn-white"
    >
      <div className="site-frame section-shell">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-end">
          <Reveal className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
              Roadmap
            </p>
            <SectionHeader title="Plans" highlight="Plans" />
          </Reveal>

          <Reveal
            delay={90}
            className="body-copy max-w-2xl text-[15px] text-white/76 md:text-base xl:ml-auto"
          >
            <p>We&apos;re growing with intention.</p>
            <p className="mt-3">
              Our focus for the year ahead is built around depth, standards,
              and long-term value.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <Reveal key={plan} delay={150 + index * 90} className="h-full">
              <article className="premium-panel h-full rounded-[28px] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38 md:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="body-copy mt-5 text-sm text-white/74 md:text-[15px]">
                  {plan}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          delay={540}
          className="body-copy mt-8 max-w-2xl text-sm text-white/62 md:text-[15px]"
        >
          This isn&apos;t about being everywhere. It&apos;s about being the
          best at what we do.
        </Reveal>
      </div>
    </section>
  );
}
