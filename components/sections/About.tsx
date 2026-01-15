import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      data-animate="section"
      className="section-fade section-offset bg-imn-grey text-imn-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeader kicker="Overview" title="About" accentColor="orange" />

        <div className="mt-8 max-w-3xl body-copy space-y-5 text-imn-black">
          <div>
            <strong>Who We Are</strong>
            <br />
            Inclusive Media Network is a multicultural media sales and partnerships platform built on one belief: authentic connection drives real results.
          </div>

          <div>
            <strong>What We Do</strong>
            <br />
            We specialise in four areas that help brands reach diverse audiences with confidence:
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Media Sales</strong> - Placing your message where it matters most
              </li>
              <li>
                <strong>Sponsorship & Partnerships</strong> - Building alliances that amplify impact
              </li>
              <li>
                <strong>Content Creation & Production</strong> - Stories that speak to communities, not at them
              </li>
              <li>
                <strong>Creator & Influencer Campaigns</strong> - Authentic voices, authentic reach
              </li>
            </ul>
          </div>

          <div>
            <strong>Our Mission</strong>
            <br />
            To connect brands with multicultural audiences across the UK-creating partnerships that are meaningful, measurable, and built to last.
          </div>
        </div>
      </div>
    </section>
  );
}
