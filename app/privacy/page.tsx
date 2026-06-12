import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Halifax Defence Consulting Limited — how we collect, use, protect and retain personal information submitted through our website and business communications.",
};

type Block = { heading: string; paras?: string[]; list?: string[] };

const sections: Block[] = [
  {
    heading: "Our approach to privacy",
    paras: [
      "We operate in a sector where confidentiality, discretion and information discipline matter. We therefore take a careful and proportionate approach to personal information.",
      "We do not ask visitors to provide unnecessary personal data, and we do not encourage the submission of classified information, controlled technical material, restricted documents or confidential third-party information through public website forms.",
      "If a matter requires more careful handling, we ask that you provide only a high-level description at the first stage. We can then agree an appropriate route for further communication.",
    ],
  },
  {
    heading: "Personal information we may collect",
    paras: [
      "The information we collect depends on how you interact with us. If you contact us, we may collect your name, work email, organisation, country, telephone number, enquiry type and message content.",
      "If you contact us about tendering or partnership opportunities, we may collect your role, professional correspondence, tender-related information and deadline details. If you apply for a role, we may collect your CV, cover email, employment history, qualifications and any writing samples you provide.",
      "If you visit our website, we may collect basic technical information such as IP address, browser type, device information and pages visited, depending on the analytics and cookie settings used on the site.",
    ],
  },
  {
    heading: "Information you should not send through the website",
    list: [
      "Classified information",
      "Controlled or export-controlled technical material",
      "Restricted security documents",
      "Sensitive defence or security documents",
      "Confidential tender documents (unless an appropriate process has been agreed)",
      "Personal data that is not necessary for your enquiry",
      "Documents belonging to a third party where you do not have authority to share them",
    ],
  },
  {
    heading: "How we use personal information",
    list: [
      "To respond to enquiries and assess whether we can assist",
      "To communicate with clients, partners, suppliers, applicants and professional contacts",
      "To manage business relationships and review tendering or partnership enquiries",
      "To assess job applications and speculative careers enquiries",
      "To prepare proposals, capability statements or engagement documents where appropriate",
      "To maintain business records and manage website security and performance",
      "To comply with legal, regulatory, accounting or administrative obligations",
    ],
  },
  {
    heading: "Lawful bases for processing",
    paras: [
      "Depending on the circumstances, we may rely on legitimate interests (responding to business enquiries and managing professional relationships, balanced against your rights), the need to take steps before entering a contract, compliance with a legal obligation, consent (for example, non-essential cookies, which you may withdraw at any time), or recruitment purposes.",
    ],
  },
  {
    heading: "Special category and criminal offence data",
    paras: [
      "We do not usually ask for special category data (such as health, ethnicity, political opinions or biometric data) or criminal offence data through our website. Please do not send special category data unless it is necessary and specifically requested through an appropriate process.",
    ],
  },
  {
    heading: "Cookies and website analytics",
    paras: [
      "Our website may use cookies and similar technologies. Some cookies may be essential for the website to function. Others, such as analytics cookies, should only be used with appropriate consent. Essential cookies may be exempt where they are necessary to provide a service you have requested.",
    ],
  },
  {
    heading: "Who we share personal information with",
    paras: ["We do not sell personal information. We may share it where necessary with:"],
    list: [
      "Website hosting, IT and email service providers",
      "Professional advisers such as accountants, solicitors or compliance advisers",
      "Recruitment or HR support providers, where relevant",
      "Tendering or procurement platforms, where required by a process you are involved in",
      "Public authorities or regulators where legally required",
    ],
  },
  {
    heading: "International transfers",
    paras: [
      "Because Halifax may engage with international partners, enquiries may sometimes involve organisations outside the United Kingdom. Where personal information is transferred outside the UK, we will seek to ensure appropriate safeguards are in place where required by data protection law. We will not transfer personal information internationally in a careless or unnecessary way.",
    ],
  },
  {
    heading: "How long we keep personal information",
    list: [
      "General enquiries: up to 2 years after the last meaningful contact, unless a longer period is required",
      "Client and business relationship records: up to 6 years after the end of the relationship",
      "Tendering and procurement records: up to 6 years, or longer where required by the process or contract",
      "Recruitment applications: usually up to 12 months after the process ends, unless you agree we may keep your details",
      "Website analytics data: according to the analytics tool settings and our cookie policy",
    ],
  },
  {
    heading: "Your data protection rights",
    paras: ["Depending on the circumstances, you may have the following rights under UK data protection law:"],
    list: [
      "The right to be informed about how your information is used",
      "The right of access to your personal information",
      "The right to request correction of inaccurate information",
      "The right to request erasure in certain circumstances",
      "The right to request restriction of processing in certain circumstances",
      "The right to object to processing, including an absolute right to object to direct marketing",
      "The right to data portability in certain circumstances",
    ],
  },
  {
    heading: "How we protect personal information",
    paras: [
      "We take appropriate steps to protect personal information against unauthorised access, loss, misuse, alteration or disclosure. These may include access controls, password protection, secure email practices and limited access to files. No electronic communication method is completely risk-free — please do not send sensitive, classified or controlled material through ordinary website forms.",
    ],
  },
  {
    heading: "Complaints",
    paras: [
      "If you have a concern about how we handle personal information, please contact us first so that we can review the matter. If you are unhappy with our response, you have the right to complain to the Information Commissioner's Office (ICO).",
    ],
  },
  {
    heading: "Changes to this Privacy Policy",
    paras: [
      "We may update this Privacy Policy from time to time to reflect changes in our website, services, legal requirements or business operations. The latest version will be published on this page with an updated date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`Halifax Defence Consulting Limited respects privacy and is committed to handling personal information responsibly, lawfully and transparently. Last updated: ${company.privacyUpdated}.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="bg-warm">
        <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-[1fr_2.4fr]">
          {/* Controller details */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-card border border-line bg-stone p-6 text-sm">
              <h2 className="font-serif text-lg font-semibold text-forest">Data controller</h2>
              <div className="mt-4 space-y-1 text-slate">
                <p className="font-medium text-charcoal">{company.legalName}</p>
                <p>{company.address.line1}</p>
                <p>
                  {company.address.city}, {company.address.region} {company.address.postcode}
                </p>
                <p className="pt-2">Company no. {company.companyNumber}</p>
                <p>Registered in {company.registered}</p>
              </div>
              <div className="mt-5 border-t border-line pt-4">
                <p className="text-xs uppercase tracking-wide text-slate">Privacy enquiries</p>
                <a
                  href={`mailto:${company.emails.privacy}`}
                  className="mt-1 block font-medium text-copper hover:underline"
                >
                  {company.emails.privacy}
                </a>
              </div>
            </div>
          </aside>

          {/* Body */}
          <div className="max-w-3xl space-y-10">
            <p className="text-base leading-relaxed text-slate">
              This Privacy Policy explains how we collect, use, store and protect personal
              information when you visit our website, contact us, submit an enquiry, apply for a role
              or otherwise engage with {company.legalName}. For the purposes of UK data protection
              law, {company.legalName} is the data controller for the personal information we collect.
            </p>

            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-serif text-2xl font-semibold text-forest">{s.heading}</h2>
                {s.paras?.map((p, i) => (
                  <p key={i} className="mt-4 text-base leading-relaxed text-slate">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-slate">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="rounded-card border border-line bg-stone p-6">
              <h2 className="font-serif text-xl font-semibold text-forest">How to exercise your rights</h2>
              <p className="mt-3 text-base leading-relaxed text-slate">
                To exercise your rights, or for any privacy enquiry, please contact{" "}
                <a href={`mailto:${company.emails.privacy}`} className="text-copper hover:underline">
                  {company.emails.privacy}
                </a>
                . Please include enough information for us to identify you and understand your
                request. We may need to verify your identity before responding, and will respond to
                valid requests within the applicable legal timescales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
