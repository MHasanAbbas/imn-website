"use client";

const enquiryOptions = [
  "Media Planning & Buying",
  "Sponsorship & Partnerships",
  "Content Creation & Production",
  "Events",
  "Celebrities, Creators & Influencers",
  "General Enquiry",
] as const;

const destinationEmail = "newbusiness@inclusivemedianetwork.com";
const emailSubject = "New Business Enquiry - Inclusive Media Network";

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export default function ContactEnquiryForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const mailtoBody = [
      "New Business Enquiry",
      "",
      `Full Name: ${getFieldValue(formData, "fullName")}`,
      `Company / Organisation: ${getFieldValue(formData, "company")}`,
      `Work Email: ${getFieldValue(formData, "workEmail")}`,
      `Phone Number: ${getFieldValue(formData, "phoneNumber") || "Not provided"}`,
      `Type of Enquiry: ${getFieldValue(formData, "enquiryType")}`,
      `Estimated Budget: ${getFieldValue(formData, "budget") || "Not provided"}`,
      `Preferred Timeline: ${getFieldValue(formData, "timeline") || "Not provided"}`,
      "",
      "Campaign / Project Requirements:",
      getFieldValue(formData, "requirements"),
    ].join("\n");

    const mailtoHref =
      `mailto:${destinationEmail}?subject=${encodeURIComponent(emailSubject)}` +
      `&body=${encodeURIComponent(mailtoBody)}`;

    window.location.href = mailtoHref;
  }

  const fieldClassName =
    "w-full rounded-xl border border-white/10 bg-imn-black/40 px-4 py-3.5 text-sm text-white placeholder:text-white/35 transition-colors duration-200 focus-visible:border-imn-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imn-orange/70";
  const labelClassName =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 md:text-xs";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_22px_80px_-52px_rgba(0,0,0,0.65)] md:p-8">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] via-transparent to-transparent"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-imn-orange/45 to-transparent md:inset-x-8" aria-hidden="true" />

      <div className="relative">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 md:text-xs">
            New Business Enquiry
          </p>
          <h3 className="heading text-2xl font-bold text-white md:text-[30px]">
            Start the conversation
          </h3>
        </div>

        <form
          className="mt-8 grid gap-5 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div>
            <label className={labelClassName} htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className={fieldClassName}
            />
          </div>

          <div>
            <label className={labelClassName} htmlFor="company">
              Company / Organisation
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              required
              className={fieldClassName}
            />
          </div>

          <div>
            <label className={labelClassName} htmlFor="workEmail">
              Work Email
            </label>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              autoComplete="email"
              required
              className={fieldClassName}
            />
          </div>

          <div>
            <label className={labelClassName} htmlFor="phoneNumber">
              Phone Number (optional)
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              className={fieldClassName}
            />
          </div>

          <div className="md:col-span-2">
            <label className={labelClassName} htmlFor="enquiryType">
              Type of Enquiry
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              required
              defaultValue=""
              className={fieldClassName}
            >
              <option value="" disabled>
                Select an enquiry type
              </option>
              {enquiryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className={labelClassName} htmlFor="requirements">
              Campaign / Project Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows={6}
              required
              className={`${fieldClassName} resize-y py-4`}
            />
          </div>

          <div>
            <label className={labelClassName} htmlFor="budget">
              Estimated Budget (optional)
            </label>
            <input
              id="budget"
              name="budget"
              type="text"
              inputMode="text"
              className={fieldClassName}
            />
          </div>

          <div>
            <label className={labelClassName} htmlFor="timeline">
              Preferred Timeline (optional)
            </label>
            <input
              id="timeline"
              name="timeline"
              type="text"
              inputMode="text"
              className={fieldClassName}
            />
          </div>

          <div className="md:col-span-2 space-y-3 pt-2">
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-imn-orange to-[#FF6B3D] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(240,77,36,0.85)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imn-orange/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Submit Enquiry
            </button>
            <p className="text-xs text-white/50">
              Submitting opens your email client with your enquiry pre-filled for our new business team.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
