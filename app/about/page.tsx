import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTABand from "@/components/CTABand";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Halifax Defence Consulting is a UK-based defence consulting and international liaison organisation built around clear thinking, disciplined documentation and professional restraint.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        intro={about.hero.sub}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Intro */}
      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="Who We Are" title="Order brought to complexity" />
          <div className="space-y-5">
            {about.intro.map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className="text-base leading-relaxed text-slate md:text-[1.05rem]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Purpose / Mission / Vision */}
      <Section tone="stone">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Purpose, mission and vision"
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-card border border-line bg-white p-8">
                <div className="h-1 w-12 rounded-full bg-copper" />
                <h3 className="mt-6 font-serif text-2xl font-semibold text-forest">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="Our Approach" title={about.approach.title} />
          <div className="space-y-5">
            {about.approach.body.map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className="text-base leading-relaxed text-slate md:text-[1.05rem]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="stone">
        <SectionHeading eyebrow="Our Values" title="The standards we hold" center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-card border border-line bg-white p-7">
                <h3 className="font-serif text-xl font-semibold text-forest">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Who we support */}
      <section className="bg-forest bg-diagonal-lines text-warm">
        <div className="container-x py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading
              eyebrow="Who We Support"
              title={about.whoWeSupport.title}
              intro={about.whoWeSupport.body}
              onDark
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {about.whoWeSupport.list.map((item, i) => (
                <Reveal key={item} delay={i * 60}>
                  <div className="flex items-start gap-3 rounded-lg border border-warm/10 bg-warm/[0.03] p-4">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/20 text-copper">
                      <Check size={14} />
                    </span>
                    <span className="text-sm text-warm/80">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Speak to Halifax about a serious decision"
        body="If your organisation requires structured support around defence strategy, procurement, risk, capability, hardware, technology, policy, compliance, training or international liaison, we can help you frame the next stage carefully."
      />
    </>
  );
}
