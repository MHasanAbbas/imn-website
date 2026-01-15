import SectionImage from "@/components/SectionImage";

export default function CommunityVisual() {
  return (
    <section
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-6 md:pb-14">
        <SectionImage
          src="/images/imn-community.jpg"
          alt="Communities represented across Inclusive Media Network partners"
          priority
          className="mx-auto max-w-5xl"
        />
      </div>
    </section>
  );
}
