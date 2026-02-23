import SectionHeader from "@/components/SectionHeader";

export default function Communities() {
  return (
    <section
      id="communities"
      data-animate="section"
      className="section-fade section-offset bg-imn-grey text-imn-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-imn-black/70 md:text-xs">
            Communities
          </p>
          <SectionHeader
            title="Our Communities"
            highlight="Communities"
            className="text-imn-black"
            highlightColor="teal"
          />
        </div>

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-imn-black">
          <div>
            <strong>Our Communities</strong>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Black African: Nigerian, Ghanaian, Somali, Kenyan and more.</li>
            <li>South Asian: Indian, Pakistani, Bangladeshi, Sri Lankan and more.</li>
            <li>Caribbean: Jamaican, Trinidadian, Barbadian and more</li>
            <li>Middle Eastern: Arab, Turkish, Persian, Kurdish and more</li>
            <li>East Asian: Chinese, Vietnamese, Filipino and more</li>
            <li>Eastern European: Polish, Romanian, Bulgarian and More</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
