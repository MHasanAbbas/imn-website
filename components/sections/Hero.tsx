import SectionHeader from "@/components/SectionHeader";

export default function Hero() {
  return (
    <section
      id="top"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader
          as="h1"
          kicker="Inclusive Media Network"
          title="Where brands meet multicultural Britain."
          subtitle="We connect you with the audiences that matter-through media, partnerships, and content that resonate."
        />
      </div>
    </section>
  );
}
