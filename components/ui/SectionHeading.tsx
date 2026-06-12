import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  onDark = false,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  onDark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <div className={center ? "flex justify-center" : ""}>
          <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-5 font-serif text-3xl font-semibold leading-tight tracking-tight md:text-[2.6rem] ${
          onDark ? "text-warm" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${onDark ? "text-warm/75" : "text-slate"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
