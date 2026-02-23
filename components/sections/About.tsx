import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      data-animate="section"
      className="section-fade section-offset bg-imn-grey text-imn-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-imn-black/70 md:text-xs">
            About
          </p>
          <SectionHeader
            title="About"
            highlight="About"
            className="text-imn-black"
          />
        </div>

        <div className="mt-8 max-w-3xl body-copy space-y-5 text-imn-black">
          <div>
            <strong>The bridge between brands and multicultural Britan</strong>
            <br />
            We are a multicultural media network dedicated to connecting media agencies and multicultural communities. Our goal is to drive incremental reach and growth through culturally relevant content that creates authentic connections and increases brand visibility.
          </div>

          <p>
            With 35 years of industry working across hundreds of brands alongside real-life experiences, we expertly navigate the complex multicultural media landscape, ensuring the right channels and content partners are chosen for each client brief and target audiences.
          </p>

          <p>
            We pride ourselves on our commitment to cultivating meaningful connections, enabling brands to not only reach but genuinely engage and grow within a variety of cultural landscapes.
          </p>
        </div>
      </div>
    </section>
  );
}
