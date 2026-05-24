import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SectionImage from "@/components/SectionImage";

export default function Hero() {
  return (
    <section
      id="top"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="site-frame section-shell-hero">
        <div className="max-w-[54rem]">
          <Reveal className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
              Inclusive Media Network
            </p>
            <SectionHeader
              as="h1"
              title="Where brands meet multicultural Britain."
              highlight="multicultural"
              className="max-w-[14ch]"
            />
          </Reveal>

          <Reveal
            as="p"
            delay={110}
            className="body-copy mt-6 max-w-2xl text-base text-white/80 md:text-lg"
          >
            We help reach diverse communities of the UK through multicultural
            media and content.
          </Reveal>
        </div>

        <Reveal delay={220} className="mt-10 md:mt-12">
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-x-4 -inset-y-5 rounded-[36px] bg-gradient-to-r from-imn-orange/12 via-white/[0.02] to-imn-orange/10 blur-3xl"
              aria-hidden="true"
            />
            <SectionImage
              src="/images/imn-community.jpg"
              alt="Communities represented across Inclusive Media Network partners"
              priority
              className="relative z-10 w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
