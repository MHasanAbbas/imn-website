import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    title: "Media Sales",
    description:
      "Connect your message with multicultural audiences through 300+ trusted media channels.",
  },
  {
    title: "Sponsorship & Partnerships",
    description:
      "Build meaningful partnerships that elevate your brand and foster community engagement.",
  },
  {
    title: "Content Creation & Production",
    description:
      "Share stories that resonate, crafted with cultural understanding and authenticity.",
  },
  {
    title: "Events",
    description:
      "Celebrate diversity by activating your brand at events that bring people together.",
  },
  {
    title: "Celebrities, Creators & Influencers",
    description:
      "Collaborate with influential voices who reflect the communities you serve.",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="site-frame section-shell">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-end">
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

          <Reveal
            delay={90}
            as="p"
            className="body-copy max-w-2xl text-[15px] text-white/76 md:text-base xl:ml-auto"
          >
            We empower agencies and advertisers to connect authentically with
            diverse audiences through strategic media, partnerships, content,
            events, and influencer collaborations.
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={140 + index * 90}
              className="h-full"
            >
              <article className="premium-panel h-full rounded-[28px] p-6 md:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40 md:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-white">
                  {service.title}
                </h3>
                <p className="body-copy mt-4 text-sm text-white/72 md:text-[15px]">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
