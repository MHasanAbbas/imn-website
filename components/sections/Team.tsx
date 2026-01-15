import SectionHeader from "@/components/SectionHeader";

export default function Team() {
  return (
    <section
      id="team"
      data-animate="section"
      className="section-fade section-offset bg-imn-grey text-imn-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeader
          kicker="People"
          title="Team"
          accentColor="orange"
        />

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-imn-black">
          <div>
            <strong>The People Behind the Platform</strong>
          </div>
          <p>
            IMN is powered by a team with deep experience across media, partnerships, and multicultural marketing. We&apos;ve worked agency-side, brand-side, and platform-side-so we understand every angle of what makes campaigns succeed.
          </p>
          <p>
            What sets us apart? We&apos;re not just selling media. We&apos;re building bridges between brands and the communities they want to reach.
          </p>
          <p className="text-black/70">
            [Note: Team member profiles to be added once approved]
          </p>
        </div>
      </div>
    </section>
  );
}
