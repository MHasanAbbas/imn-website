import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Hero() {
  return (
    <section
      id="top"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="section-shell-hero mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
            Inclusive Media Network
          </p>
          <SectionHeader
            as="h1"
            title="Where brands meet multicultural Britain."
            highlight="multicultural"
          />
        </Reveal>

        <Reveal
          as="p"
          delay={120}
          className="body-copy mt-6 max-w-3xl text-base text-white/80 md:text-lg"
        >
          We help reach diverse communities of the UK through multicultural
          media and content.
        </Reveal>
      </div>
    </section>
  );
}
