import SectionHeader from "@/components/SectionHeader";

export default function HowWeChange() {
  return (
    <section
      id="change"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
            Focus Areas
          </p>
          <SectionHeader
            title="How We Change This Year"
            highlight="Change"
          />
        </div>

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-white">
          <div>
            <strong>Always Evolving</strong>
          </div>
          <p>The media landscape doesn&apos;t stand still, and neither do we. This year, we&apos;re focused on:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Expanding our network</strong> - More platforms, more voices, more reach
            </li>
            <li>
              <strong>Deepening our expertise</strong> - Staying ahead of cultural trends and audience shifts
            </li>
            <li>
              <strong>Strengthening partnerships</strong> - Building longer-term relationships that grow with our clients
            </li>
            <li>
              <strong>Investing in innovation</strong> - New formats, new channels, new ways to connect
            </li>
          </ul>
          <p>We&apos;re not chasing trends. We&apos;re setting them.</p>
        </div>
      </div>
    </section>
  );
}
