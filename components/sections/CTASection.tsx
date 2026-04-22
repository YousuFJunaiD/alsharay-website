import { SectionContainer } from "@/components/shared/SectionContainer";
import { Button } from "@/components/ui/button";

export function CTASection({
  title,
  description,
  primary,
  secondary
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <SectionContainer className="py-16 sm:py-20">
      <div className="rounded-[38px] border border-[rgba(195,154,61,0.24)] bg-[radial-gradient(circle_at_top,rgba(195,154,61,0.14),transparent_28%),linear-gradient(135deg,var(--color-maroon-dark)_0%,var(--color-maroon)_48%,var(--color-maroon-dark)_100%)] px-8 py-10 text-white shadow-[0_28px_90px_rgba(63,10,17,0.24)] sm:px-10 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-[rgba(255,247,232,0.78)]">
            Take the next step
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-[rgba(255,247,232,0.84)]">
            {description}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
          <Button href={primary.href}>{primary.label}</Button>
          {secondary ? (
            <Button
              href={secondary.href}
              variant="secondary"
              className="border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white"
            >
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </SectionContainer>
  );
}
