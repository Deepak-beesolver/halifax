import Link from "next/link";
import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import { home } from "@/lib/content";
import { company } from "@/lib/site";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-forest text-warm">
        <div className="absolute inset-0 bg-diagonal-lines" aria-hidden />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full bg-copper/15 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-olive/40 blur-[120px]"
          aria-hidden
        />
        <div className="container-x relative py-24 md:py-32 lg:py-36">
          <div className="max-w-4xl">
            <Eyebrow onDark>{home.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.06] tracking-tight md:text-6xl lg:text-[4.2rem]">
              {home.hero.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-warm/80 md:text-lg">
              {home.hero.sub}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm/65">
              {home.hero.support}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" withArrow>
                Contact us
              </Button>
              <Button href="/services" variant="onDark">
                Explore our services
              </Button>
            </div>
            <p className="mt-10 flex flex-wrap items-center gap-2 text-sm text-warm/60">
              <Mail size={15} className="text-copper" />
              For enquiries, please contact:
              <a
                href={`mailto:${company.emails.general}`}
                className="font-medium text-sand underline-offset-4 hover:underline"
              >
                {company.emails.general}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- INTRO / WHO WE ARE ---------- */}
      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>{home.intro.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-forest md:text-[2.6rem]">
              {home.intro.title}
            </h2>
            <div className="mt-8 hidden lg:block">
              <Button href="/about" variant="secondary" withArrow>
                More about Halifax
              </Button>
            </div>
          </div>
          <div className="space-y-5">
            {home.intro.body.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base leading-relaxed text-slate md:text-[1.05rem]">{p}</p>
              </Reveal>
            ))}
            <div className="pt-2 lg:hidden">
              <Button href="/about" variant="secondary" withArrow>
                More about Halifax
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- MEASURES ---------- */}
      <section className="bg-olive bg-diagonal-lines text-warm">
        <div className="container-x grid grid-cols-2 gap-8 py-14 md:grid-cols-4 md:py-16">
          {home.measures.map((m, i) => (
            <Reveal key={i} delay={i * 80} className="text-center md:text-left">
              <div className="font-serif text-4xl font-semibold text-sand md:text-5xl">{m.value}</div>
              <div className="mt-2 text-sm leading-snug text-warm/70">{m.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- WHAT WE DO / SERVICES ---------- */}
      <Section tone="stone">
        <SectionHeading
          eyebrow={home.whatWeDo.eyebrow}
          title={home.whatWeDo.title}
          intro={home.whatWeDo.body}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- WHY HALIFAX ---------- */}
      <Section tone="warm">
        <SectionHeading
          eyebrow="Why Halifax"
          title="A serious decision should be capable of being explained, evidenced and defended"
          intro="Defence and security-facing work requires more than contacts, confidence or technical language. It requires judgement, documentation, restraint and governance."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {home.whyPillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-card border border-line bg-white p-8">
                <span className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-copper">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-forest">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- PROCESS ---------- */}
      <section className="bg-forest bg-diagonal-lines text-warm">
        <div className="container-x py-16 md:py-24">
          <SectionHeading
            eyebrow="Our Process"
            title="How we work"
            intro="A disciplined path from broad ambition to decisions that can be reviewed and defended."
            onDark
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-warm/10 bg-warm/10 md:grid-cols-4">
            {home.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 80} className="bg-forest">
                <div className="h-full p-7">
                  <div className="font-serif text-4xl font-semibold text-copper/70">{step.step}</div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-warm">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm/65">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/where-we-add-value"
              className="text-sm font-medium text-sand underline-offset-4 hover:underline"
            >
              See where Halifax can add value →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTABand title={home.cta.title} body={home.cta.body} />
    </>
  );
}
