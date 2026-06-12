import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTABand from "@/components/CTABand";
import { scenarios } from "@/lib/content";

export const metadata: Metadata = {
  title: "Where We Add Value",
  description:
    "Illustrative scenarios showing how Halifax Defence Consulting supports defence, security and public-sector-facing organisations across strategy, procurement, risk, compliance, hardware advisory, technology and international liaison.",
};

export default function WhereWeAddValuePage() {
  return (
    <>
      <PageHero
        eyebrow="Example Engagement Scenarios"
        title="Where Halifax can add value"
        intro="Defence and security-facing work rarely fails because one issue was missed. It becomes difficult because several issues have not been brought together early enough. These illustrative scenarios show the types of situations our services are designed to address."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Where We Add Value", href: "/where-we-add-value" },
        ]}
      />

      <Section tone="warm">
        <div className="rounded-card border border-line bg-stone p-6 text-sm leading-relaxed text-slate">
          <strong className="font-semibold text-forest">Please note:</strong> The scenarios below
          are illustrative examples — not completed case studies, client references or claims of
          previous delivery. Halifax is a newly incorporated company, and these examples are
          intended to help visitors understand the types of issues our services address.
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {scenarios.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 80}>
              <div className="group flex h-full flex-col rounded-card border border-line bg-white p-7 transition-all hover:border-copper/30 hover:shadow-lg hover:shadow-forest/5">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-3xl font-semibold text-copper/40">
                    {String(s.n).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg font-semibold leading-snug text-forest">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">{s.body}</p>
                <Link
                  href={s.service.href}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-olive/8 px-3 py-1.5 text-xs font-medium text-olive transition-colors group-hover:bg-copper group-hover:text-white"
                >
                  {s.service.label}
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <SectionHeading
          eyebrow="How These Scenarios Are Used"
          title="A starting point, not a replacement for a scoping discussion"
          intro="Every engagement depends on the client's objective, the parties involved, the jurisdictions concerned, the information being shared and the level of sensitivity attached to the matter. Where the matter is suitable, we will propose a clear next step. Where it requires legal, regulatory or specialist approval outside our role, we will identify that need. Where it is outside our scope, we will say so."
        />
      </Section>

      <CTABand
        title="Facing a complex defence or security issue?"
        body="Contact us with a short overview of what you are trying to achieve. Do not send classified information, controlled technical material or sensitive documents through the website contact form — describe the matter at a high level and we will agree an appropriate next step."
      />
    </>
  );
}
