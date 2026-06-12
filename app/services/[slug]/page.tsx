import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CTABand from "@/components/CTABand";
import ServiceIcon from "@/components/ServiceIcon";
import { services, getService, serviceSlugs } from "@/lib/services";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.seoTitle,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => services.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        intro={service.intro[0]}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle, href: `/services/${service.slug}` },
        ]}
      />

      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* Main content */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-olive/8 text-olive">
                <ServiceIcon name={service.icon} size={28} />
              </span>
              <p className="font-serif text-xl text-forest">{service.tagline}</p>
            </div>

            <div className="space-y-5">
              {service.intro.slice(1).map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-slate md:text-[1.05rem]">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {service.sections.map((sec, i) => (
                <Reveal key={i}>
                  <div className="border-l-2 border-copper/30 pl-6">
                    <h2 className="font-serif text-2xl font-semibold text-forest">{sec.heading}</h2>
                    <div className="mt-4 space-y-4">
                      {sec.body.map((p, j) => (
                        <p key={j} className="text-base leading-relaxed text-slate">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-card border border-line bg-white p-7">
              <h3 className="font-serif text-lg font-semibold text-forest">What Halifax delivers</h3>
              <ul className="mt-4 space-y-3">
                {service.delivers.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-slate">
                    <Check size={16} className="mt-0.5 shrink-0 text-copper" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-card border border-line bg-stone p-7">
              <div className="flex items-center gap-2 text-forest">
                <Users size={18} className="text-copper" />
                <h3 className="font-serif text-lg font-semibold">Who this is for</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate">{service.forWho}</p>
            </div>

            <div className="mt-6 rounded-card bg-forest bg-diagonal-lines p-7 text-warm">
              <h3 className="font-serif text-lg font-semibold">Discuss this service</h3>
              <p className="mt-2 text-sm text-warm/70">
                Tell us what you are trying to achieve and we will suggest a suitable next step.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-copper px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-copper-dark"
              >
                Contact us
                <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      {/* Related services */}
      {related.length > 0 && (
        <Section tone="stone">
          <h2 className="font-serif text-2xl font-semibold text-forest">Related services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group flex items-center gap-4 rounded-card border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-copper/40 hover:shadow-lg hover:shadow-forest/5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-olive/8 text-olive transition-colors group-hover:bg-copper group-hover:text-white">
                  <ServiceIcon name={r.icon} size={20} />
                </span>
                <div>
                  <span className="block font-serif font-semibold text-forest">{r.shortTitle}</span>
                  <span className="mt-0.5 block text-xs text-slate">{r.tagline}</span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABand
        title="Bring structure to your next decision"
        body="Tell us where the complexity sits and what decision needs to be supported. We will review your enquiry and respond with a suitable next step."
      />
    </>
  );
}
