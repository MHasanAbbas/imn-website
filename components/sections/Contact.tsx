import SectionHeader from "@/components/SectionHeader";
import ContactEnquiryForm from "@/components/sections/ContactEnquiryForm";

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

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-8">
            <div className="max-w-3xl body-copy space-y-4 text-white/90">
              <p>Ready to connect with Multicultural Britain?</p>
              <p>
                Whether you&apos;re looking to launch a campaign, explore a partnership, or understand how we work, we&apos;re here to help.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_22px_80px_-52px_rgba(0,0,0,0.65)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 md:text-xs">
                  Email
                </p>
                <a
                  href="mailto:newbusiness@inclusivemedianetwork.com"
                  className="mt-3 inline-flex text-lg font-medium text-white transition-colors duration-200 hover:text-imn-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imn-orange/80 focus-visible:ring-offset-2 focus-visible:ring-offset-imn-black"
                >
                  newbusiness@inclusivemedianetwork.com
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_22px_80px_-52px_rgba(0,0,0,0.65)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 md:text-xs">
                  Office
                </p>
                <p className="mt-3 body-copy text-base text-white/90">
                  Building 2, 1st Floor, Croxley Business Park, WD18 8YA
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70">
              Confidential - Not for Public Consumption or Distribution
            </p>
          </div>

          <ContactEnquiryForm />
        </div>
      </div>
    </section>
  );
}
