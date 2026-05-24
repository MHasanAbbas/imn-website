import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Services() {
  return (
    <section
      id="services"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="section-shell mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
            Services
          </p>
          <SectionHeader
            title="Our Services"
            highlight="Services"
            highlightColor="purple"
          />
        </Reveal>

        <div className="mt-8 max-w-3xl body-copy space-y-5 text-white">
          <Reveal delay={80}>
            <div>
              <strong>Our Services</strong>
            </div>
          </Reveal>

          <Reveal as="p" delay={140}>
            We empower agencies and advertisers to connect authentically with
            diverse audiences through strategic media, partnerships, content,
            events, and influencer collaborations.
          </Reveal>

          <ul className="list-disc list-inside space-y-2">
            <Reveal as="li" delay={220}>
              <strong>Media Sales</strong> - Connect your message with
              multicultural audiences through 300+ trusted media channels.
            </Reveal>
            <Reveal as="li" delay={300}>
              <strong>Sponsorship & Partnerships</strong> - Build meaningful
              partnerships that elevate your brand and foster community
              engagement.
            </Reveal>
            <Reveal as="li" delay={380}>
              <strong>Content Creation & Production</strong> - Share stories
              that resonate-crafted with cultural understanding and
              authenticity.
            </Reveal>
            <Reveal as="li" delay={460}>
              <strong>Events</strong> - Celebrate diversity by activating your
              brand at events that bring people together.
            </Reveal>
            <Reveal as="li" delay={540}>
              <strong>Celebrities, Creators & Influencers</strong> - Collaborate
              with influential voices who reflect the communities you serve.
            </Reveal>
          </ul>
        </div>
      </div>
    </section>
  );
}
