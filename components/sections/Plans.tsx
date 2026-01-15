import SectionHeader from "@/components/SectionHeader";

export default function Plans() {
  return (
    <section
      id="plans"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
            Roadmap
          </p>
          <SectionHeader title="Plans" highlight="Plans" />
        </div>

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-white">
          <div>
            <strong>What&apos;s Next</strong>
          </div>
          <p>We&apos;re growing with intention. Our focus for the year ahead:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Becoming the go-to platform for brands serious about multicultural engagement</li>
            <li>Expanding our media inventory across digital, audio, video, and experiential</li>
            <li>Building strategic partnerships with platforms and creators who share our values</li>
            <li>Delivering campaigns that don&apos;t just perform-they set new standards</li>
          </ul>
          <p>This isn&apos;t about being everywhere. It&apos;s about being the best at what we do.</p>
        </div>
      </div>
    </section>
  );
}
