import Link from "next/link";

import { ResultHighlightCard } from "@/components/cards/ResultHighlightCard";
import { TopperCard } from "@/components/cards/TopperCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { YearSelector } from "@/components/results/YearSelector";
import { resultEntries } from "@/data/results";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Results",
  description: "Explore Al Sharay's result showcases, toppers, merit highlights, and year-wise excellence pages.",
  path: "/results"
});

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Signature Strength"
        title="Results that communicate trust, consistency, and academic ambition."
        description="This section is intentionally designed as one of the strongest destinations in the entire rebuild, with year-wise pages, topper highlights, and room for approved media assets."
      />
      <SectionContainer className="py-10">
        <YearSelector />
      </SectionContainer>
      <SectionContainer className="pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          <ResultHighlightCard label="96% & Above" value="007" />
          <ResultHighlightCard label="85% to 90%" value="073" />
          <ResultHighlightCard label="100 / 100" value="021" />
        </div>
      </SectionContainer>
      <SectionContainer className="pb-16">
        <SectionHeading
          eyebrow="Year-Wise Showcase"
          title="Open a dedicated results page for each featured academic year and achievement story."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {resultEntries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/results/${entry.slug}`}
              className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
                {entry.year}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-charcoal)]">
                {entry.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {entry.summary}
              </p>
            </Link>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="pb-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {resultEntries[7].toppers.map((topper) => (
            <TopperCard key={topper.name} {...topper} />
          ))}
        </div>
      </SectionContainer>
      <CTASection
        title="Need verified admission guidance after reviewing our results?"
        description="Families can move directly from academic credibility to the next admission conversation without losing context."
        primary={{ label: "Explore Admission", href: "/admission" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
