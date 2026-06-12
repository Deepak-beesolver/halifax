"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle } from "lucide-react";

const enquiryTypes = [
  "General enquiry",
  "Services enquiry",
  "Tendering and procurement",
  "Partnership enquiry",
  "Hardware and systems advisory",
  "Policy and compliance",
  "Careers",
  "Other",
];

type Errors = Record<string, string>;

const field =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate/60 outline-none transition-colors focus:border-copper focus:ring-2 focus:ring-copper/20";
const label = "mb-1.5 block text-sm font-medium text-forest";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};

    if (!String(data.get("name") || "").trim()) next.name = "Please enter your full name.";
    const email = String(data.get("email") || "").trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!String(data.get("organisation") || "").trim())
      next.organisation = "Please enter your organisation.";
    if (!String(data.get("country") || "").trim()) next.country = "Please select your country.";
    if (!String(data.get("enquiryType") || "")) next.enquiryType = "Please select an enquiry type.";
    if (!String(data.get("message") || "").trim()) next.message = "Please enter a short message.";
    if (!data.get("consent")) next.consent = "Please confirm that you have read the Privacy Policy.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      form.reset();
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-tactical/30 bg-stone p-8 text-center">
        <CheckCircle2 className="mx-auto text-tactical" size={40} />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-forest">
          Thank you. Your message has been sent.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate">
          We will review your enquiry and respond as soon as reasonably possible. Please do not send
          classified information, controlled technical material or sensitive documents unless an
          appropriate handling process has been agreed.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-copper underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name}>
          <input id="name" name="name" type="text" className={field} placeholder="Your name" />
        </Field>
        <Field id="email" label="Work email address" required error={errors.email}>
          <input id="email" name="email" type="email" className={field} placeholder="you@organisation.com" />
        </Field>
        <Field id="organisation" label="Organisation" required error={errors.organisation}>
          <input id="organisation" name="organisation" type="text" className={field} placeholder="Organisation name" />
        </Field>
        <Field id="country" label="Country" required error={errors.country}>
          <input id="country" name="country" type="text" className={field} placeholder="Country / jurisdiction" />
        </Field>
        <Field id="phone" label="Telephone number" error={errors.phone}>
          <input id="phone" name="phone" type="tel" className={field} placeholder="Optional" />
        </Field>
        <Field id="enquiryType" label="Enquiry type" required error={errors.enquiryType}>
          <select id="enquiryType" name="enquiryType" className={field} defaultValue="">
            <option value="" disabled>
              Select an enquiry type
            </option>
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={field}
          placeholder="Please provide a short, high-level overview of your enquiry. Do not include classified information, controlled technical material or sensitive documents."
        />
      </Field>

      <Field id="file" label="Attachment (optional)">
        <input
          id="file"
          name="file"
          type="file"
          accept=".pdf,.doc,.docx"
          className="block w-full text-sm text-slate file:mr-4 file:rounded-md file:border-0 file:bg-olive/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-olive hover:file:bg-olive/15"
        />
        <p className="mt-1.5 text-xs text-slate">
          Please attach only non-sensitive documents. PDF preferred. Do not upload classified,
          restricted, controlled or confidential material.
        </p>
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-charcoal">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-copper" />
          <span>
            I have read the{" "}
            <Link href="/privacy" className="text-copper underline-offset-2 hover:underline">
              Privacy Policy
            </Link>{" "}
            and consent to Halifax Defence Consulting Limited using my information to respond to this
            enquiry.
          </span>
        </label>
        {errors.consent && <ErrorText>{errors.consent}</ErrorText>}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-copper px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-copper-dark hover:shadow-md sm:w-auto"
      >
        Send enquiry
      </button>

      <p className="text-xs leading-relaxed text-slate">
        We use the information you provide to review and respond to your enquiry and maintain
        appropriate business records. We do not ask for unnecessary personal data.
      </p>
    </form>
  );
}

function Field({
  id,
  label: labelText,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={label}>
        {labelText}
        {required && <span className="ml-0.5 text-copper">*</span>}
      </label>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
      <AlertCircle size={13} />
      {children}
    </p>
  );
}
