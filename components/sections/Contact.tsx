import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeader kicker="Contact" title="Keep Connected With Us" />

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-white">
          <div>
            <strong>Let&apos;s Talk</strong>
          </div>
          <p>
            Whether you&apos;re looking to launch a campaign, explore a partnership, or just want to understand how we work-we&apos;re here.
          </p>
          <p>Reach out. Let&apos;s build something meaningful together.</p>
          <p className="text-white/70">[Note: Contact form and details to follow]</p>
        </div>
      </div>
    </section>
  );
}
