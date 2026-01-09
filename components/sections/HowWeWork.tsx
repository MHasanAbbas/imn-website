export default function HowWeWork() {
  return (
    <section
      id="work"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="heading text-3xl md:text-4xl font-semibold tracking-tight">
          How We Work
        </h2>
        <span
          className="mt-3 block h-1 w-12"
          style={{ background: "var(--imn-orange)" }}
        />

        <div className="mt-6 max-w-3xl body-copy space-y-4 text-white">
          <div>
            <strong>Our Approach</strong>
          </div>
          <p>
            Everything we do is built on four core principles. They're not just values on a wall—they're how we operate, every day.
          </p>

          <div className="space-y-3">
            <div>
              <strong>Inclusivity</strong>
              <br />
              We champion diverse narratives, voices, and communities. Representation isn't a checkbox for us—it's the entire point.
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
              Our storytelling is dynamic, bold, and human-first. We bring energy to every partnership because that's what creates momentum.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
