export default function Hero() {
  return (
    <section
      id="top"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <h2 className="heading text-3xl md:text-4xl font-semibold tracking-tight">
          Where brands meet multicultural Britain.
        </h2>
        <span
          className="mt-3 block h-1 w-16"
          style={{ background: "var(--imn-orange)" }}
        />

        <p className="mt-6 max-w-3xl body-copy text-white">
          We connect you with the audiences that matter—through media, partnerships, and content that resonate.
        </p>
      </div>
    </section>
  );
}
