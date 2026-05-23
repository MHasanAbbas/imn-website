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
            <select
              id="enquiryType"
              name="enquiryType"
              required
              defaultValue=""
              className={fieldClassName}
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
              onInput={clearFieldError}
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
              disabled={isSubmitting}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-imn-orange to-[#FF6B3D] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(240,77,36,0.85)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imn-orange/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>
            <p
              aria-live="polite"
              className={
                submissionState.type === "idle"
                  ? "text-xs text-white/50"
                  : submissionState.type === "success"
                    ? "text-sm text-[#FFD6C7]"
                    : "text-sm text-[#FFE0D6]"
              }
            >
              {submissionState.type === "idle"
                ? "Your enquiry will be sent directly to our new business team."
                : submissionState.message}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
