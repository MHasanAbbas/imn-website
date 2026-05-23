import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const enquiryOptions = new Set([
  "Media Planning & Buying",
  "Sponsorship & Partnerships",
  "Content Creation & Production",
  "Events",
  "Celebrities, Creators & Influencers",
  "General Enquiry",
]);

const defaultEnquiryType = "General Enquiry";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactFormPayload = {
  fullName: string;
  company: string;
  workEmail: string;
  phoneNumber: string;
  enquiryType: string;
  requirements: string;
  budget: string;
  timeline: string;
  companyWebsite: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getStringValue(record: Record<string, unknown>, key: string) {
  const value = record[key];
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return emailPattern.test(email);
}

function parseRecipients(value: string | undefined) {
  return (value ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function formatOptionalValue(value: string) {
  return value || "Not provided";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMultilineHtml(value: string) {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function buildTextEmail(payload: ContactFormPayload) {
  return [
    "A new enquiry has been submitted through the Inclusive Media Network website.",
    "",
    `Full Name: ${payload.fullName}`,
    `Company / Organisation: ${formatOptionalValue(payload.company)}`,
    `Work Email: ${payload.workEmail}`,
    `Phone Number: ${formatOptionalValue(payload.phoneNumber)}`,
    `Type of Enquiry: ${payload.enquiryType}`,
    `Estimated Budget: ${formatOptionalValue(payload.budget)}`,
    `Preferred Timeline: ${formatOptionalValue(payload.timeline)}`,
    "",
    "Campaign / Project Requirements:",
    payload.requirements,
  ].join("\n");
}

function buildHtmlEmail(payload: ContactFormPayload) {
  const detailRows = [
    ["Full Name", payload.fullName],
    ["Company / Organisation", formatOptionalValue(payload.company)],
    ["Work Email", payload.workEmail],
    ["Phone Number", formatOptionalValue(payload.phoneNumber)],
    ["Type of Enquiry", payload.enquiryType],
    ["Estimated Budget", formatOptionalValue(payload.budget)],
    ["Preferred Timeline", formatOptionalValue(payload.timeline)],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 0 0 14px; vertical-align: top; width: 220px;">
            <p style="margin: 0; color: #6b7280; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
              ${escapeHtml(label)}
            </p>
          </td>
          <td style="padding: 0 0 14px; vertical-align: top;">
            <p style="margin: 0; color: #111827; font-size: 15px; line-height: 1.65;">
              ${escapeHtml(value)}
            </p>
          </td>
        </tr>`,
    )
    .join("");

  return `
    <div style="margin: 0; padding: 24px; background: #f3f4f6; font-family: Arial, Helvetica, sans-serif;">
      <div style="max-width: 720px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 18px; overflow: hidden;">
        <div style="padding: 28px 32px; background: #111111;">
          <p style="margin: 0; color: #f97316; font-size: 12px; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase;">
            Inclusive Media Network
          </p>
          <h1 style="margin: 12px 0 0; color: #ffffff; font-size: 28px; line-height: 1.25;">
            New website enquiry
          </h1>
        </div>

        <div style="padding: 32px;">
          <p style="margin: 0 0 24px; color: #111827; font-size: 15px; line-height: 1.7;">
            A new enquiry has been submitted through the Inclusive Media Network website.
          </p>

          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
            ${detailRows}
          </table>

          <div style="margin-top: 16px;">
            <p style="margin: 0 0 12px; color: #6b7280; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
              Campaign / Project Requirements
            </p>
            <div style="padding: 18px 20px; border: 1px solid #e5e7eb; border-radius: 14px; background: #f9fafb; color: #111827; font-size: 15px; line-height: 1.7;">
              ${formatMultilineHtml(payload.requirements)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function normalizePayload(body: Record<string, unknown>): ContactFormPayload {
  const enquiryType = getStringValue(body, "enquiryType");

  return {
    fullName: getStringValue(body, "fullName"),
    company: getStringValue(body, "company"),
    workEmail: getStringValue(body, "workEmail"),
    phoneNumber: getStringValue(body, "phoneNumber"),
    enquiryType: enquiryOptions.has(enquiryType)
      ? enquiryType
      : defaultEnquiryType,
    requirements: getStringValue(body, "requirements"),
    budget: getStringValue(body, "budget"),
    timeline: getStringValue(body, "timeline"),
    companyWebsite: getStringValue(body, "companyWebsite"),
  };
}

export async function POST(request: Request) {
  const recipients = parseRecipients(process.env.CONTACT_FORM_TO_EMAILS);
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (
    !resendApiKey ||
    !fromEmail ||
    recipients.length === 0 ||
    recipients.some((email) => !isValidEmail(email))
  ) {
    console.error("Contact form email configuration is missing or invalid.");

    return NextResponse.json(
      { ok: false, error: "Contact form configuration error." },
      { status: 500 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!isRecord(body)) {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload = normalizePayload(body);

  if (payload.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  if (!payload.fullName || !payload.workEmail || !payload.requirements) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(payload.workEmail)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address." },
      { status: 400 },
    );
  }

  const resend = new Resend(resendApiKey);
  const subject = `New IMN Website Enquiry - ${payload.enquiryType}`;
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: recipients,
    replyTo: payload.workEmail,
    subject,
    text: buildTextEmail(payload),
    html: buildHtmlEmail(payload),
  });

  if (error) {
    console.error("Failed to send IMN contact form email.", error);

    return NextResponse.json(
      { ok: false, error: "Email delivery failed." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
