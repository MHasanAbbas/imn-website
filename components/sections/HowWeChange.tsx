export default function HowWeChange() {
  return (
    <section
      id="change"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="heading text-3xl md:text-4xl font-semibold tracking-tight">
          How We Change This Year
        </h2>
        <span
          className="mt-3 block h-1 w-12"
          style={{ background: "var(--imn-orange)" }}
        />

        <div className="mt-6 max-w-3xl body-copy space-y-4 text-white">
          <div>
            <strong>Always Evolving</strong>
          </div>
          <p>The media landscape doesn't stand still, and neither do we. This year, we're focused on:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Expanding our network</strong> – More platforms, more voices, more reach
            </li>
            <li>
              <strong>Deepening our expertise</strong> – Staying ahead of cultural trends and audience shifts
            </li>
            <li>
              <strong>Strengthening partnerships</strong> – Building longer-term relationships that grow with our clients
            </li>
            <li>
              <strong>Investing in innovation</strong> – New formats, new channels, new ways to connect
            </li>
          </ul>
          <p>We're not chasing trends. We're setting them.</p>
        </div>
      </div>
    </section>
  );
}
