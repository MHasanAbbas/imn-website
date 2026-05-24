import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const communities = [
  {
    title: "Black African",
    detail: "Nigerian, Ghanaian, Somali, Kenyan and more.",
  },
  {
    title: "South Asian",
    detail: "Indian, Pakistani, Bangladeshi, Sri Lankan and more.",
  },
  {
    title: "Caribbean",
    detail: "Jamaican, Trinidadian, Barbadian and more.",
  },
  {
    title: "Middle Eastern",
    detail: "Arab, Turkish, Persian, Kurdish and more.",
  },
  {
    title: "East Asian",
    detail: "Chinese, Vietnamese, Filipino and more.",
  },
  {
    title: "Eastern European",
    detail: "Polish, Romanian, Bulgarian and more.",
  },
] as const;

export default function Communities() {
  return (
    <section
      id="communities"
      data-animate="section"
      className="section-fade section-offset border-t border-black/[0.08] bg-imn-grey text-imn-black"
    >
      <div className="site-frame section-shell">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] xl:items-end">
          <Reveal className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-imn-black/70 md:text-xs">
              Communities
            </p>
            <SectionHeader
              title="Our Communities"
              highlight="Communities"
              className="text-imn-black"
              highlightColor="teal"
            />
          </Reveal>

          <Reveal
            delay={90}
            as="p"
            className="body-copy max-w-2xl text-[15px] text-imn-black/74 md:text-base xl:ml-auto"
          >
            Our network spans a wide range of multicultural audiences, helping
            brands engage with communities through relevant media, trusted
            voices, and culturally informed strategy.
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {communities.map((community, index) => (
            <Reveal
              key={community.title}
              delay={150 + index * 80}
              className="h-full"
            >
              <article className="premium-panel-light h-full rounded-[28px] p-6 md:p-7">
                <h3 className="text-xl font-semibold text-imn-black">
                  {community.title}
                </h3>
                <p className="body-copy mt-4 text-sm text-imn-black/74 md:text-[15px]">
                  {community.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
