type Tone = "warm" | "stone" | "olive" | "white";

const tones: Record<Tone, string> = {
  warm: "bg-warm text-charcoal",
  stone: "bg-stone text-charcoal",
  white: "bg-white text-charcoal",
  olive: "bg-forest text-warm bg-diagonal-lines",
};

export default function Section({
  children,
  tone = "warm",
  className = "",
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="container-x py-16 md:py-24">{children}</div>
    </section>
  );
}
