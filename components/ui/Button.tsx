import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper/60 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-copper text-white shadow-sm hover:bg-copper-dark hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "border border-olive/25 text-olive hover:bg-olive hover:text-warm hover:border-olive",
  ghost:
    "text-olive hover:text-copper underline-offset-4 decoration-copper/40 hover:decoration-copper",
  onDark:
    "border border-warm/30 text-warm hover:bg-warm hover:text-forest hover:border-warm",
};

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {withArrow && <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (!href) {
    return <span className={cls}>{inner}</span>;
  }

  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={`group ${cls}`}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={`group ${cls}`}>
      {inner}
    </a>
  );
}
