import SectionHeader from "@/components/SectionHeader";

export default function Services() {
  return (
    <section
      id="services"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
            Services
          </p>
          <SectionHeader
            title="Our Services"
            highlight="Services"
            highlightColor="purple"
          />
        </div>

        <div className="mt-8 max-w-3xl body-copy space-y-5 text-white">
          <div>
            <strong>Our Services</strong>
          </div>
          <p>
            We empower agencies and advertisers to connect authentically with diverse audiences through strategic media, partnerships, content, events, and influencer collaborations.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Media Sales</strong> - Connect your message with multicultural audiences through 300+ trusted media channels.
            </li>
            <li>
              <strong>Sponsorship & Partnerships</strong> - Build meaningful partnerships that elevate your brand and foster community engagement.
            </li>
            <li>
              <strong>Content Creation & Production</strong> - Share stories that resonate-crafted with cultural understanding and authenticity.
            </li>
            <li>
              <strong>Events</strong> - Celebrate diversity by activating your brand at events that bring people together.
            </li>
            <li>
              <strong>Celebrities, Creators & Influencers</strong> - Collaborate with influential voices who reflect the communities you serve.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
