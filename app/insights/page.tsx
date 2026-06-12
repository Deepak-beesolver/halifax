import type { Metadata } from "next";
import { Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTABand from "@/components/CTABand";
import { insightNotes, insightsIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical commentary from Halifax Defence Consulting on defence advisory, procurement, risk, compliance, hardware systems, capability development and responsible international liaison.",
};

const futureTopics = [
  ["Procurement readiness in defence-facing work", "Preparing clearer requirements, stronger supplier questions and better evaluation structures before formal procurement begins."],
  ["Hardware advisory and capability fit", "Why equipment decisions should be considered alongside training, sustainment, integration and long-term operational need."],
  ["Risk assessment for multi-party programmes", "How to identify, prioritise and manage risk when several stakeholders, suppliers or jurisdictions are involved."],
  ["Responsible international liaison", "Why cross-border engagement should be structured carefully, documented properly and kept within clear information boundaries."],
  ["Governance for new defence-facing companies", "The policies, controls and disciplines that help new organisations build credibility in sensitive sectors."],
  ["Technology integration and readiness", "Why new systems require more than technical selection, and how to prepare for adoption and long-term use."],
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical thinking on complex defence-facing work"
        intro={insightsIntro[0]}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
        ]}
      />

      <Section tone="warm">
        <SectionHeading
          eyebrow="Initial Notes"
          title="Six principles that guide our work"
          intro={insightsIntro[1]}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {insightNotes.map((note, i) => (
            <Reveal key={note.title} delay={(i % 2) * 80}>
              <article className="h-full rounded-card border border-line bg-white p-7 transition-all hover:border-copper/30 hover:shadow-lg hover:shadow-forest/5">
                <span className="font-serif text-sm font-semibold text-copper">
                  Note {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-forest">{note.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{note.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <SectionHeading eyebrow="Coming Soon" title="Future publications" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2">
          {futureTopics.map(([title, body], i) => (
            <Reveal key={title} delay={(i % 2) * 70} className="bg-warm">
              <div className="h-full p-7">
                <h3 className="font-serif text-lg font-semibold text-forest">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-lg border border-line bg-white p-5 text-sm leading-relaxed text-slate">
          <Info size={18} className="mt-0.5 shrink-0 text-copper" />
          <span>
            Content published in this Insights section is for general information only. It does not
            constitute legal, regulatory or procurement advice, or a substitute for specialist
            professional advice. Matters involving controlled goods, sensitive technology, export
            controls, sanctions or classified information should be reviewed through the appropriate
            official process.
          </span>
        </div>
      </Section>

      <CTABand
        title="Want to discuss a specific challenge?"
        body="Our insights are general — your situation is not. Contact us with a short overview and we will respond with a suitable next step."
      />
    </>
  );
}
