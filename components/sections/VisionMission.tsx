export default function VisionMission() {
  return (
    <section
      id="vision"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="heading text-3xl md:text-4xl font-semibold tracking-tight">
          Our Vision & Mission
        </h2>
        <span
          className="mt-3 block h-1 w-12"
          style={{ background: "var(--imn-orange)" }}
        />

        <div className="mt-6 max-w-3xl body-copy space-y-5 text-white">
          <div>
            <strong>Where We're Heading</strong>
            <br />
            We're building the UK's leading multicultural media sales platform—not just by growing bigger, but by going deeper. Deeper insights. Deeper connections. Deeper impact.
          </div>

          <div>
            <strong>Our Vision</strong>
            <br />
            To become the leading multicultural media sales platform in the UK.
          </div>

          <div>
            <strong>Our Mission</strong>
            <br />
            We connect brands with multicultural audiences through strategic media and content solutions that are bold, relevant, and rooted in experience. Every campaign we create is designed to resonate, not just reach.
          </div>
        </div>
      </div>
    </section>
  );
}
