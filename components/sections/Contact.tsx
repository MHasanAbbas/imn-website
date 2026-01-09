export default function Contact() {
  return (
    <section
      id="contact"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="heading text-3xl md:text-4xl font-semibold tracking-tight">
          Keep Connected With Us
        </h2>
        <span
          className="mt-3 block h-1 w-12"
          style={{ background: "var(--imn-orange)" }}
        />

        <div className="mt-6 max-w-3xl body-copy space-y-4 text-white">
          <div>
            <strong>Let's Talk</strong>
          </div>
          <p>
            Whether you're looking to launch a campaign, explore a partnership, or just want to understand how we work—we're here.
          </p>
          <p>Reach out. Let's build something meaningful together.</p>
          <p className="text-white/70">[Note: Contact form and details to follow]</p>
        </div>
      </div>
    </section>
  );
}
