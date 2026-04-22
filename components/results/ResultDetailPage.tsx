import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { ResultHighlightCard } from "@/components/cards/ResultHighlightCard";
import { TopperCard } from "@/components/cards/TopperCard";
import { YearSelector } from "@/components/results/YearSelector";
import { AchievementBadge } from "@/components/cards/AchievementBadge";
import { resultEntries } from "@/data/results";

export function ResultDetailPage({ slug }: { slug: string }) {
  const entry = resultEntries.find((item) => item.slug === slug);

  if (!entry) {
    return null;
  }

  return (
    <>
      <PageHero
        eyebrow="Academic Excellence"
        title={entry.title}
        description={entry.summary}
      />

      <SectionContainer className="py-10">
        <YearSelector />
      </SectionContainer>

      <SectionContainer className="pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {entry.highlights.map((highlight) => (
            <ResultHighlightCard
              key={highlight.label}
              label={highlight.label}
              value={highlight.value}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pb-16">
        <div className="rounded-[36px] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,#fff9f0_0%,#f5ead7_100%)] p-8 shadow-[var(--shadow-soft)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-gold)]">
            Achievement Strip
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl text-[var(--color-charcoal)]">
            Year {entry.year} stands as a proud expression of Al Sharay's merit culture.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
            Every result page is structured to celebrate high performance with dignity through clear merit bands, featured achievers, and refined academic presentation.
          </p>
          <div className="mt-4 flex flex-wrap">
            {entry.highlights.map((highlight) => (
              <AchievementBadge
                key={`${entry.slug}-${highlight.label}`}
                label={`${highlight.label}: ${highlight.value}`}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="pb-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-gold)]">
            Featured Toppers
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--color-charcoal)]">
            Distinguished achievers presented with the formality of an institutional honor roll.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {entry.toppers.map((topper) => (
            <TopperCard key={topper.name} {...topper} />
          ))}
        </div>
      </SectionContainer>

      <CTASection
        title="Explore more result years and achievement pages"
        description="The results section is designed to become a signature strength of the website, with room for approved student photographs, PDFs, and future annual updates."
        primary={{ label: "Back to Results", href: "/results" }}
        secondary={{ label: "Contact Admissions", href: "/contact" }}
      />
    </>
  );
}
