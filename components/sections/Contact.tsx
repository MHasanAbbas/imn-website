import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      data-animate="section"
      className="section-fade section-offset bg-imn-black text-imn-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
            Contact
          </p>
          <SectionHeader title="Contact us" highlight="Contact" />
        </div>

        <div className="mt-8 max-w-3xl body-copy space-y-4 text-white">
          <p>Ready to connect with Multicultural Britain?</p>
          <p>
            Whether you&apos;re looking to launch a campaign, explore a partnership, or just want to understand how we work-we&apos;re here.
          </p>
          <div className="space-y-2">
            <p>Email:</p>
            <p>Phone:</p>
            <p>Office: Building 2, 1st Floor , Croxley Business Park , WD18 8 YA</p>
          </div>
          <p className="text-white/70 text-sm">
            Confidential - Not for Public Consumption or Distribution
          </p>
        </div>
      </div>
    </section>
  );
}
