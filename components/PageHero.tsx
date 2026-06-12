import Link from "next/link";
import Eyebrow from "./ui/Eyebrow";

export default function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-forest bg-diagonal-lines text-warm">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-copper/10 blur-3xl"
        aria-hidden
      />
      <div className="container-x relative py-16 md:py-24">
        {breadcrumb && (
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-warm/60">
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-warm/30">/</span>}
                <Link href={b.href} className="transition-colors hover:text-sand">
                  {b.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <Eyebrow onDark>{eyebrow}</Eyebrow>}
        <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-warm/80 md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
