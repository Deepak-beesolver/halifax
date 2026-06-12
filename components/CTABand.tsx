import Button from "./ui/Button";
import Eyebrow from "./ui/Eyebrow";

export default function CTABand({
  title,
  body,
  primary = { label: "Contact us", href: "/contact" },
  secondary = { label: "Explore our services", href: "/services" },
}: {
  title: string;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-forest bg-diagonal-lines text-warm">
      <div className="container-x py-16 md:py-20">
        <div className="relative overflow-hidden rounded-2xl border border-warm/10 bg-gradient-to-br from-olive/40 to-forest px-8 py-12 md:px-14 md:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-copper/15 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <Eyebrow onDark>Speak to Halifax</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-warm/75 md:text-lg">{body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={primary.href} variant="primary" withArrow>
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="onDark">
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
