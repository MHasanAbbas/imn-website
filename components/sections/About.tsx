import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      data-animate="section"
      className="section-fade section-offset bg-imn-grey text-imn-black"
    >
      <div className="site-frame section-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
          <Reveal className="flex flex-col gap-3 lg:pt-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-imn-black/70 md:text-xs">
              About
            </p>
            <SectionHeader
              title="About"
              highlight="About"
              className="text-imn-black"
            />
          </Reveal>

          <div className="space-y-4 text-imn-black">
            <Reveal
              delay={90}
              className="premium-panel-light rounded-[30px] p-7 md:p-8"
            >
              <p className="text-lg font-semibold leading-snug text-imn-black md:text-[22px]">
                The bridge between brands and multicultural Britain
              </p>
              <p className="body-copy mt-4 text-[15px] text-imn-black/82 md:text-base">
                We are a multicultural media network dedicated to connecting
                media agencies and multicultural communities. Our goal is to
                drive incremental reach and growth through culturally relevant
                content that creates authentic connections and increases brand
                visibility.
              </p>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              <Reveal
                delay={180}
                className="premium-panel-light rounded-[26px] p-6"
              >
                <p className="body-copy text-[15px] text-imn-black/78 md:text-base">
                  With 35 years of industry experience across hundreds of
                  brands, alongside real-life insight, we navigate the complex
                  multicultural media landscape with precision.
                </p>
              </Reveal>

              <Reveal
                delay={270}
                className="premium-panel-light rounded-[26px] p-6"
              >
                <p className="body-copy text-[15px] text-imn-black/78 md:text-base">
                  We choose the right channels and content partners for each
                  client brief, enabling brands to reach, engage, and grow
                  meaningfully within a variety of cultural landscapes.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
