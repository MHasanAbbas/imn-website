export default function MissionStatement() {
  return (
    <section
      id="mission-statement"
      data-animate="section"
      className="section-fade section-offset bg-imn-orange text-imn-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="heading text-3xl md:text-4xl font-semibold tracking-tight">
          Mission Statement
        </h2>
        <span
          className="mt-3 block h-1 w-12"
          style={{ background: "var(--imn-black)" }}
        />

        <div className="mt-6 max-w-3xl body-copy space-y-4 text-imn-black">
          <div>
            <strong>Why We Exist</strong>
          </div>
          <p>
            Inclusive Media Network exists to empower brands by connecting them authentically with multicultural communities.
          </p>
          <p>
            We deliver strategic media and content solutions that are bold, relevant, and rooted in experience—helping brands reach audiences that matter, in ways that resonate.
          </p>
          <p>We're here because multicultural Britain deserves better than tokenism. And brands deserve partners who understand that.</p>
        </div>
      </div>
    </section>
  );
}
