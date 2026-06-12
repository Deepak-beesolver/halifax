import type { Metadata } from "next";
import { Mail, MapPin, Clock, ShieldAlert } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Halifax Defence Consulting for defence advisory, procurement support, hardware and systems advisory, risk assessment, policy and compliance, technology integration, tendering and international liaison enquiries.",
};

const channels = [
  { label: "General enquiries", email: company.emails.general, note: "Services, collaborations, advisory requirements and general business." },
  { label: "Tendering & procurement", email: company.emails.tenders, note: "Tenders, bid support and formal proposals — include any deadline." },
  { label: "Careers", email: company.emails.careers, note: "Speculative applications — send a CV (PDF) and short cover email." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a serious, structured conversation"
        intro="We welcome enquiries from government bodies, defence primes, specialist suppliers, security organisations, technology companies, procurement teams and international partners seeking structured, compliance-aware advisory support."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="bg-warm">
        <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Left: details */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-forest">Contact channels</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Please keep initial enquiries at a high level. Do not submit classified information,
              controlled technical material, restricted documents or commercially sensitive data
              through the website. If your enquiry needs careful handling, tell us briefly what it
              relates to and we will agree an appropriate next step.
            </p>

            <div className="mt-8 space-y-4">
              {channels.map((c) => (
                <div key={c.email} className="rounded-card border border-line bg-white p-5">
                  <div className="flex items-center gap-2 text-forest">
                    <Mail size={16} className="text-copper" />
                    <span className="font-semibold">{c.label}</span>
                  </div>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-1 block text-sm font-medium text-copper hover:underline"
                  >
                    {c.email}
                  </a>
                  <p className="mt-1.5 text-xs text-slate">{c.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-line bg-stone p-5">
                <div className="flex items-center gap-2 text-forest">
                  <MapPin size={16} className="text-copper" />
                  <span className="text-sm font-semibold">Registered office</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {company.address.line1}
                  <br />
                  {company.address.city}, {company.address.region}
                  <br />
                  {company.address.postcode}
                </p>
                <p className="mt-2 text-xs text-slate">
                  Company no. {company.companyNumber}. Meetings by prior arrangement only.
                </p>
              </div>
              <div className="rounded-card border border-line bg-stone p-5">
                <div className="flex items-center gap-2 text-forest">
                  <Clock size={16} className="text-copper" />
                  <span className="text-sm font-semibold">Response time</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  We aim to respond to suitable enquiries {company.responseTime}. Response times may
                  vary depending on the complexity of the matter.
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="rounded-card border border-line bg-white p-7 md:p-9">
              <h2 className="font-serif text-2xl font-semibold text-forest">Send an enquiry</h2>
              <p className="mt-2 text-sm text-slate">
                A short, clear summary is more useful than a large volume of documents.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info handling notice */}
      <section className="bg-forest bg-diagonal-lines text-warm">
        <div className="container-x py-12">
          <div className="flex items-start gap-4 rounded-card border border-warm/10 bg-warm/[0.03] p-6">
            <ShieldAlert size={22} className="mt-0.5 shrink-0 text-sand" />
            <div className="text-sm leading-relaxed text-warm/75">
              <p className="font-semibold text-warm">Information-handling notice</p>
              <p className="mt-2">
                Please do not submit classified material, controlled technical information, restricted
                security documents, export-controlled material, confidential supplier information, or
                documents you are not authorised to share. If your matter involves sensitive
                information, describe the issue only at a high level and ask us to confirm the
                appropriate next step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
