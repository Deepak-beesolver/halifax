import type { Metadata } from "next";
import { Mail, FileText, PenLine, AlertTriangle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore future career opportunities with Halifax Defence Consulting. We look for people with clear judgement, strong writing, discretion and the ability to work responsibly in defence and security-facing environments.",
};

const qualities = [
  ["Clear writing", "Writing is how decisions are supported, risks are explained and clients understand their options."],
  ["Structured thinking", "Complex problems must be broken into parts that can be understood, tested and acted upon."],
  ["Discretion", "Sensitive work must be handled carefully, and professional boundaries respected."],
  ["Evidence", "Claims should be supported, assumptions identified and conclusions capable of being explained."],
  ["Calm judgement", "Defence work involves pressure and uncertainty. We need people who can stay grounded."],
  ["Accountability", "If you own a task, you should understand what is expected and follow it through."],
  ["Curiosity", "The best consultants ask better questions and learn quickly — not pretend to know everything."],
];

const areas = [
  "Strategy advisory",
  "Risk & threat assessment",
  "Procurement support",
  "Capability development",
  "Policy & compliance",
  "Cyber & intelligence support",
  "Hardware & systems advisory",
  "Technology integration",
  "Tendering & bid writing",
  "Research & project coordination",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="A focused advisory firm for high-trust work"
        intro="Halifax is being developed as a serious, disciplined defence consulting organisation. Our work sits in environments where judgement matters, communication must be careful and advice must be supported by evidence, structure and professional responsibility."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      />

      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="The People We Look For"
            title="Thoughtful, reliable and professionally mature"
          />
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-slate md:text-[1.05rem]">
              You do not need to know everything before you join us. One of the qualities we respect
              most is the ability to say, “I do not know yet,” and then go and find out properly.
            </p>
            <p className="text-base leading-relaxed text-slate md:text-[1.05rem]">
              We value people who can research carefully, analyse information, write well and
              communicate with clarity — people who take pride in a well-written briefing note, a
              clear risk summary or a carefully structured proposal. In consulting, credibility is
              built through the quality of the details.
            </p>
            <p className="text-base leading-relaxed text-slate md:text-[1.05rem]">
              We also value discretion. Much of our work may involve early-stage discussions,
              commercial plans, international engagement or information that should not be handled
              casually.
            </p>
          </div>
        </div>
      </Section>

      {/* Qualities */}
      <Section tone="stone">
        <SectionHeading eyebrow="Qualities We Value" title="What good work depends on" center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map(([title, body], i) => (
            <Reveal key={title} delay={(i % 3) * 70}>
              <div className="h-full rounded-card border border-line bg-white p-6">
                <h3 className="font-serif text-lg font-semibold text-forest">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Areas + vacancies */}
      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-forest">Areas of future opportunity</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              As Halifax develops, we expect to consider people across several areas of work. Some
              roles may require prior experience in defence, government, procurement, law, compliance
              or technology; others may suit strong analysts, writers or project-support
              professionals who can learn quickly.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {areas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-line bg-stone px-3.5 py-1.5 text-xs font-medium text-olive"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-card border border-line bg-stone p-7">
            <h2 className="font-serif text-2xl font-semibold text-forest">Current vacancies</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Halifax is a newly established organisation, and specific vacancies will be published
              here as roles are opened. At this stage, we welcome expressions of interest from
              suitable professionals. Submitting an expression of interest does not guarantee a role,
              interview or immediate response — we review approaches carefully and contact candidates
              where there appears to be a relevant fit.
            </p>
          </div>
        </div>
      </Section>

      {/* How to apply */}
      <section className="bg-forest bg-diagonal-lines text-warm">
        <div className="container-x py-16 md:py-24">
          <SectionHeading eyebrow="How to Apply" title="Send a clear, concise application" onDark />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-card border border-warm/10 bg-warm/[0.03] p-7">
              <FileText className="text-copper" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-warm">CV</h3>
              <p className="mt-2.5 text-sm text-warm/70">Please send your CV as a PDF.</p>
            </div>
            <div className="rounded-card border border-warm/10 bg-warm/[0.03] p-7">
              <PenLine className="text-copper" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-warm">Short cover email</h3>
              <p className="mt-2.5 text-sm text-warm/70">
                Around 5–10 lines explaining why you fit Halifax and the work you are interested in.
              </p>
            </div>
            <div className="rounded-card border border-warm/10 bg-warm/[0.03] p-7">
              <FileText className="text-copper" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-warm">Writing sample</h3>
              <p className="mt-2.5 text-sm text-warm/70">
                Optional — a sample that demonstrates clear, structured, professional work.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${company.emails.careers}`}
              className="inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-copper-dark"
            >
              <Mail size={16} />
              {company.emails.careers}
            </a>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-lg border border-copper/30 bg-copper/10 p-5 text-sm leading-relaxed text-warm/80">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-sand" />
            <span>
              Please do not send classified, restricted or controlled information, or confidential
              material from a current or former employer, client or third party. If your experience
              relates to sensitive work, describe it responsibly and at an appropriate level.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
