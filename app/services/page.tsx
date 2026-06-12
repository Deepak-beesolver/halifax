import type { Metadata } from "next";
import { ShieldCheck, FileLock2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Advisory, liaison and support services for organisations operating in defence, security, public-sector procurement and related international markets.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="A connected range of defence advisory services"
        intro="Each service can stand alone, but they are designed to work together where a client requires a wider advisory pathway — bringing clarity, order and commercial seriousness to complex work."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Principles */}
      <Section tone="warm">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full gap-5 rounded-card border border-line bg-white p-7">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-olive/8 text-olive">
                <ShieldCheck strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-forest">
                  Compliance-first operating principle
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  In defence-related work, proper process is part of credibility. We identify the
                  nature of the opportunity, the parties, the purpose, the jurisdictions and any
                  legal or regulatory issues early — not after commitments have been made.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full gap-5 rounded-card border border-line bg-white p-7">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-olive/8 text-olive">
                <FileLock2 strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-forest">
                  Data and privacy discipline
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  We do not ask for unnecessary personal data, and we do not encourage visitors to
                  submit sensitive material through public forms. Where a matter requires careful
                  handling, we agree the appropriate route before detailed information is shared.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Service grid */}
      <Section tone="stone">
        <SectionHeading
          eyebrow="Core Services"
          title="Nine ways Halifax brings structure to defence-facing decisions"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Supporting services note */}
        <div className="mt-12 rounded-card border border-line bg-white p-8">
          <h3 className="font-serif text-xl font-semibold text-forest">Supporting services</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate">
            In addition to our core service areas, Halifax also supports tendering, bid preparation,
            international liaison, supplier engagement, documentation and governance. These areas
            often sit across several services rather than being isolated activities — and Halifax's
            value lies in helping clients connect them into one coherent process.
          </p>
        </div>
      </Section>

      <CTABand
        title="Ready for a serious, structured conversation?"
        body="If you would like to discuss a requirement, opportunity or potential collaboration, contact us with a clear overview of what you are trying to achieve. We will respond with a suitable next step, a request for further information, or an honest view if the matter is outside our scope."
        secondary={{ label: "Tendering & procurement", href: "/tendering" }}
      />
    </>
  );
}
