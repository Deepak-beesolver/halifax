// Typographic wordmark that echoes the logo's engraved serif lockup.
// Used on dark backgrounds (footer) where the full-colour logo would not sit well.
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col ${className}`}>
      <span className="font-serif text-2xl font-semibold tracking-[0.22em] text-warm">
        HALIFAX
      </span>
      <span className="mt-1 flex items-center gap-2 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-sand">
        <span className="h-px w-4 bg-copper/70" aria-hidden />
        Defence Consulting
        <span className="h-px w-4 bg-copper/70" aria-hidden />
      </span>
    </span>
  );
}
