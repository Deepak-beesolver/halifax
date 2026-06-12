export default function Eyebrow({
  children,
  onDark = false,
  className = "",
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] ${
        onDark ? "text-sand" : "text-copper"
      } ${className}`}
    >
      <span className="h-px w-8 bg-copper/60" aria-hidden />
      {children}
    </span>
  );
}
