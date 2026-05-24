import Reveal from "@/components/Reveal";
import SectionImage from "@/components/SectionImage";

export default function CommunityVisual() {
  return (
    <section
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="section-shell-media mx-auto max-w-6xl px-6">
        <Reveal delay={80}>
          <SectionImage
            src="/images/imn-community.jpg"
            alt="Communities represented across Inclusive Media Network partners"
            priority
            className="mx-auto max-w-5xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
