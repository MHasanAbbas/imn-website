import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Communities() {
  return (
    <section
      id="communities"
      data-animate="section"
      className="section-fade section-offset bg-imn-grey text-imn-black"
    >
      <div className="section-shell mx-auto max-w-6xl px-6">
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

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-imn-black">
          <Reveal delay={80}>
            <div>
              <strong>Our Communities</strong>
            </div>
          </Reveal>

          <ul className="list-disc list-inside space-y-2">
            <Reveal as="li" delay={160}>
              Black African: Nigerian, Ghanaian, Somali, Kenyan and more.
            </Reveal>
            <Reveal as="li" delay={240}>
              South Asian: Indian, Pakistani, Bangladeshi, Sri Lankan and more.
            </Reveal>
            <Reveal as="li" delay={320}>
              Caribbean: Jamaican, Trinidadian, Barbadian and more
            </Reveal>
            <Reveal as="li" delay={400}>
              Middle Eastern: Arab, Turkish, Persian, Kurdish and more
            </Reveal>
            <Reveal as="li" delay={480}>
              East Asian: Chinese, Vietnamese, Filipino and more
            </Reveal>
            <Reveal as="li" delay={560}>
              Eastern European: Polish, Romanian, Bulgarian and More
            </Reveal>
          </ul>
        </div>
      </div>
    </section>
  );
}
