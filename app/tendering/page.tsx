import type { Metadata } from "next";
import { Check, Mail, Building2, Factory, Globe2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTABand from "@/components/CTABand";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tendering & Procurement Engagement",
  description:
    "How contracting authorities, defence primes, partners and procurement teams can engage Halifax Defence Consulting through tenders, proposals, bid partnerships or structured procurement routes.",
};

const routes = [
  "Direct advisory engagements",
  "Formal tender responses",
  "Request for proposal (RFP) processes",
  "Request for information (RFI) exercises",
  "Framework opportunities",
  "Subcontractor arrangements",
  "Consortium participation",
  "Specialist advisory support to a prime",
];

const firstStage = [
  "The name of your organisation",
  "The country or jurisdiction relevant to the opportunity",
  "A short description of the requirement",
  "The type of support requested from Halifax",
  "The expected deliverables",
  "The deadline for response or submission",
  "The procurement or tender route being used",
  "Any restrictions on communication or information sharing",
  "Whether an NDA or procurement portal is required",
  "Whether the opportunity involves international parties or regulated activity",
];

const principles = [
  ["Accurate", "We will not overstate our role, approvals, experience or authority. A proposal must be capable of being delivered as written."],
  ["Clear", "We define scope, assumptions, dependencies and exclusions so the client understands exactly what is proposed."],
  ["Realistic", "We do not promise impossible timelines or outcomes. Where a deadline is too compressed, we will say so."],
  ["Documented", "Tendering work should leave a clear record of decisions, assumptions, communications and responsibilities."],
  ["Compliance-aware", "Where a matter involves sensitive or regulated issues, those issues are considered before commitments are made."],
  ["Useful", "Our involvement should improve the quality of the tender or decision. If we cannot add value, we should not be involved."],
];

const workingWith = [
  {
    icon: Building2,
    title: "Contracting authorities",
    body: "We provide structured advisory support across strategy, procurement preparation, risk, capability, policy and compliance. We respect the process set by the authority and will not seek to bypass proper procurement rules.",
  },
  {
    icon: Factory,
    title: "Defence primes & partners",
    body: "We support requirements interpretation, proposal structure, capability narrative, procurement readiness, risk review and bid writing. Our role is always described accurately — advisory, liaison and governance, never exaggerated.",
  },
  {
    icon: Globe2,
    title: "Overseas partners",
    body: "We support international liaison with structure — defining parties, roles, purpose and information boundaries. We do not use this website to sell or supply controlled goods, and we do not encourage premature commitments.",
  },
];

export default function TenderingPage() {
  return (
    <>
      <PageHero
        eyebrow="Tendering & Procurement"
        title="Engaging Halifax through a tender or proposal"
        intro="Halifax supports structured advisory input, procurement preparation, bid support, specialist consulting and governance-focused programme assistance. Tendering in defence and security requires clarity from the beginning — and we approach it with that discipline."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Tendering", href: "/tendering" },
        ]}
      />

      {/* How to engage */}
      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="How to Engage"
            title="Start with a clear statement of need"
            intro="It need not be lengthy — explain what you are trying to achieve, the stage the matter has reached, the support being considered and the output required."
          />
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-slate">
              Early engagement should remain proportionate. We do not need classified material or
              highly sensitive information at the first stage. In most cases, an initial discussion
              can be based on the objective, the support required, the deliverables, the timescale
              and the procurement route.
            </p>
            <p className="text-base leading-relaxed text-slate">
              Once we understand the basic requirement, Halifax usually responds in one of four ways:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "We confirm the requirement appears suitable for discussion",
                "We ask for further clarification",
                "We provide a short capability statement or outline response",
                "We explain that the matter does not fall within our scope",
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-line bg-white p-4 text-sm text-slate">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15 font-serif text-xs font-semibold text-copper">
                    {i + 1}
                  </span>
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Working with */}
      <Section tone="stone">
        <SectionHeading eyebrow="Who We Work With" title="Engagement routes for every party" center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {workingWith.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="h-full rounded-card border border-line bg-white p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-olive/8 text-olive">
                  <w.icon strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-forest">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Routes + first stage */}
      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-forest">Tendering routes we support</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {routes.map((r) => (
                <div key={r} className="flex items-start gap-2.5 text-sm text-slate">
                  <Check size={16} className="mt-0.5 shrink-0 text-copper" />
                  {r}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-forest">What to send at the first stage</h2>
            <ul className="mt-6 space-y-2.5">
              {firstStage.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate">
                  <Check size={16} className="mt-0.5 shrink-0 text-copper" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <section className="bg-forest bg-diagonal-lines text-warm">
        <div className="container-x py-16 md:py-24">
          <SectionHeading eyebrow="Our Principles" title="How we approach tendering work" onDark />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 3) * 80}>
                <div className="h-full rounded-card border border-warm/10 bg-warm/[0.03] p-6">
                  <h3 className="font-serif text-lg font-semibold text-sand">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-warm/70">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tender contact */}
      <Section tone="stone">
        <div className="rounded-card border border-line bg-white p-8 md:p-10">
          <h2 className="font-serif text-2xl font-semibold text-forest">Contact for tendering enquiries</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
            Please contact us with a clear overview of the requirement and any relevant deadline. Use
            a clear subject line, for example <em>“Tender enquiry: [Organisation] – deadline [date]”</em>.
            Please do not send classified or highly sensitive documents unless an appropriate
            handling process has first been agreed.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`mailto:${company.emails.tenders}`}
              className="inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-copper-dark"
            >
              <Mail size={16} />
              {company.emails.tenders}
            </a>
            <a
              href={`mailto:${company.emails.general}`}
              className="inline-flex items-center gap-2 rounded-md border border-olive/25 px-5 py-3 text-sm font-medium text-olive transition-colors hover:bg-olive hover:text-warm"
            >
              <Mail size={16} />
              {company.emails.general}
            </a>
          </div>
        </div>
      </Section>

      <CTABand
        title="Preparing a tender or bid partnership?"
        body="Tell us what is being asked and the deadline you are working to. We will assess the requirement and confirm whether — and how — we can assist."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Explore our services", href: "/services" }}
      />
    </>
  );
}
