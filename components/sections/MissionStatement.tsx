import SectionHeader from "@/components/SectionHeader";

export default function MissionStatement() {
  return (
    <section
      id="mission-statement"
      data-animate="section"
      className="section-fade section-offset bg-imn-orange text-imn-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeader
          kicker="Commitment"
          title="Mission Statement"
          accentColor="black"
        />

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-imn-black">
          <div>
            <strong>Why We Exist</strong>
            <br />
            Inclusive Media Network exists to empower brands by connecting them authentically with multicultural communities.
          </div>
          <p>
            We deliver strategic media and content solutions that are bold, relevant, and rooted in experience-helping brands reach audiences that matter, in ways that resonate.
          </p>
          <p>We&apos;re here because multicultural Britain deserves better than tokenism. And brands deserve partners who understand that.</p>
        </div>
      </div>
    </section>
  );
}
