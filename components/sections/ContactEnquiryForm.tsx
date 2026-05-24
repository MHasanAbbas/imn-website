"use client";

import { FormEvent, useState } from "react";

const enquiryOptions = [
  "Media Planning & Buying",
  "Sponsorship & Partnerships",
  "Content Creation & Production",
  "Events",
  "Celebrities, Creators & Influencers",
  "General Enquiry",
] as const;

const successMessage =
  "Thank you. Your enquiry has been sent to our new business team.";
const errorMessage =
  "Sorry, something went wrong. Please try again or email newbusiness@inclusivemedianetwork.com directly.";

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export default function ContactEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<
    | { type: "idle"; message: "" }
    | { type: "success" | "error"; message: string }
  >({ type: "idle", message: "" });

  function clearFieldError(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    event.currentTarget.setCustomValidity("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullNameInput = form.elements.namedItem("fullName");
    const workEmailInput = form.elements.namedItem("workEmail");
    const requirementsInput = form.elements.namedItem("requirements");

    if (
      !(fullNameInput instanceof HTMLInputElement) ||
      !(workEmailInput instanceof HTMLInputElement) ||
      !(requirementsInput instanceof HTMLTextAreaElement)
    ) {
      setSubmissionState({ type: "error", message: errorMessage });
      return;
    }

    fullNameInput.setCustomValidity("");
    workEmailInput.setCustomValidity("");
    requirementsInput.setCustomValidity("");

    const payload = {
      fullName: getFieldValue(formData, "fullName"),
      company: getFieldValue(formData, "company"),
      workEmail: getFieldValue(formData, "workEmail"),
      phoneNumber: getFieldValue(formData, "phoneNumber"),
      enquiryType: getFieldValue(formData, "enquiryType"),
      requirements: getFieldValue(formData, "requirements"),
      budget: getFieldValue(formData, "budget"),
      timeline: getFieldValue(formData, "timeline"),
      companyWebsite: getFieldValue(formData, "companyWebsite"),
    };

    if (!payload.fullName) {
      fullNameInput.setCustomValidity("Full name is required.");
    }

    if (!payload.workEmail) {
      workEmailInput.setCustomValidity("Work email is required.");
    }

    if (!payload.requirements) {
      requirementsInput.setCustomValidity(
        "Campaign / project requirements are required.",
      );
    }

    if (!form.reportValidity()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionState({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result =
        (await response.json().catch(() => null)) as { ok?: boolean } | null;

      if (!response.ok || !result?.ok) {
        throw new Error("Contact form submission failed.");
      }

      form.reset();
      setSubmissionState({ type: "success", message: successMessage });
    } catch {
      setSubmissionState({ type: "error", message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClassName =
    "contact-field min-h-14 w-full rounded-2xl px-4 py-3.5 text-sm leading-6 transition-all duration-200";
  const labelClassName =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.28em] text-white/62 md:text-xs";
  const helperClassName = "mt-2 text-xs leading-5 text-white/45";
  const statusClassName =
    submissionState.type === "idle"
      ? "rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-xs leading-5 text-white/55"
      : submissionState.type === "success"
        ? "rounded-2xl border border-imn-orange/20 bg-imn-orange/10 px-4 py-3 text-sm leading-6 text-[#FFE0D4]"
        : "rounded-2xl border border-[#FFB79F]/25 bg-[#FFB79F]/10 px-4 py-3 text-sm leading-6 text-[#FFE6DD]";

  return (
    <div className="contact-card contact-shell relative overflow-hidden rounded-[28px] p-6 md:p-8 lg:p-9">
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-imn-orange/55 to-transparent md:inset-x-8 lg:inset-x-9"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-3.5rem] top-[-3.5rem] h-32 w-32 rounded-full bg-imn-orange/14 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 md:text-xs">
            New Business Enquiry
          </p>
          <h3 className="heading text-2xl font-bold text-white md:text-[32px]">
            Start the conversation
          </h3>
          <p className="max-w-2xl text-sm leading-7 text-white/68">
            Tell us about your brief, timeline, and priorities. Your enquiry is
            routed directly to the IMN new business team.
          </p>
        </div>

        <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
          <div
            className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="companyWebsite">Company Website</label>
            <input
              id="companyWebsite"
              name="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

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
              onInput={clearFieldError}
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
              onInput={clearFieldError}
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
            <div className="relative">
              <select
                id="enquiryType"
                name="enquiryType"
                required
                defaultValue=""
                className={`${fieldClassName} contact-select pr-12`}
                onInput={clearFieldError}
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
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/55">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="m5 7.5 5 5 5-5" />
                </svg>
              </span>
            </div>
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
              aria-describedby="requirements-help"
              className={`${fieldClassName} min-h-[176px] resize-y py-4`}
              onInput={clearFieldError}
            />
            <p id="requirements-help" className={helperClassName}>
              Include campaign objectives, audiences, channels, deliverables,
              and timing if available.
            </p>
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

          <div className="md:col-span-2 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-imn-orange via-[#FF6B3D] to-imn-orange px-7 py-3 text-sm font-semibold tracking-[0.02em] text-white shadow-[0_20px_44px_-20px_rgba(240,77,36,0.92)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_26px_56px_-24px_rgba(240,77,36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imn-orange/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0 sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>
            <p
              aria-live="polite"
              className={`max-w-xl ${statusClassName}`}
            >
              {submissionState.type === "idle"
                ? "Your enquiry is sent directly to our new business team via the website form."
                : submissionState.message}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
