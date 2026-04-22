import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-[var(--color-border)] bg-[radial-gradient(circle_at_top,rgba(195,154,61,0.18),transparent_35%),linear-gradient(180deg,#fdf9f1_0%,#f6edde_100%)] py-16 sm:py-20">
      <SectionContainer>
        <Breadcrumbs />
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <h1 className="gold-divider mt-4 max-w-4xl font-serif text-4xl leading-tight text-[var(--color-charcoal)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      </SectionContainer>
    </div>
  );
}
