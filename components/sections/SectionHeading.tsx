import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="gold-divider mt-4 font-serif text-3xl leading-tight text-[var(--color-charcoal)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{description}</p>
      ) : null}
    </div>
  );
}
