import SectionHeader from "@/components/SectionHeader";
import ContactEnquiryForm from "@/components/sections/ContactEnquiryForm";

export default function Contact() {
  return (
    <section
      id="contact"
      data-animate="section"
      className="section-fade section-offset relative overflow-hidden bg-imn-black text-imn-white"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[-6rem] top-24 h-48 w-48 rounded-full bg-imn-orange/12 blur-3xl" />
        <div className="absolute bottom-0 right-[-7rem] h-64 w-64 rounded-full bg-white/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs">
            Contact
          </p>
          <SectionHeader title="Contact us" highlight="Contact" />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <div className="space-y-6 lg:pr-4">
            <div className="contact-card rounded-[28px] p-7 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 md:text-xs">
                New Business
              </p>
              <div className="mt-5 max-w-2xl body-copy space-y-4 text-white/88">
                <p className="text-lg font-medium leading-relaxed text-white md:text-[21px]">
                  Ready to connect with multicultural Britain?
                </p>
                <p>
                  Whether you&apos;re looking to launch a campaign, explore a
                  partnership, or understand how we work, we&apos;re here to
                  help.
                </p>
                <p className="text-sm text-white/62">
                  Share a brief and our team will respond directly through the
                  website enquiry form.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="contact-card rounded-[24px] p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-imn-orange">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M3.75 6.75h16.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z" />
                      <path d="m3 8 9 6 9-6" />
                    </svg>
                  </span>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 md:text-xs">
                      Email
                    </p>
                    <p className="mt-3 break-all text-base font-medium text-white md:text-lg">
                      newbusiness@inclusivemedianetwork.com
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      For new business, partnerships, media planning, and
                      campaign enquiries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-card rounded-[24px] p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-imn-orange">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 21s6-5.18 6-11a6 6 0 1 0-12 0c0 5.82 6 11 6 11Z" />
                      <circle cx="12" cy="10" r="2.25" />
                    </svg>
                  </span>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 md:text-xs">
                      Office
                    </p>
                    <p className="mt-3 body-copy text-base text-white/90">
                      Building 2, 1st Floor
                      <br />
                      Croxley Business Park
                      <br />
                      WD18 8YA
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      Inclusive Media Network office for meetings and new
                      business conversations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex max-w-xl items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/62 shadow-[0_22px_70px_-52px_rgba(0,0,0,0.75)]">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-imn-orange/12 text-imn-orange">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <rect x="4.5" y="10.5" width="15" height="9" rx="2.25" />
                  <path d="M8.25 10.5V8.25a3.75 3.75 0 1 1 7.5 0v2.25" />
                </svg>
              </span>

              <p className="leading-6">
                Confidential &mdash; Not for Public Consumption or Distribution
              </p>
            </div>
          </div>

          <ContactEnquiryForm />
        </div>
      </div>
    </section>
  );
}
