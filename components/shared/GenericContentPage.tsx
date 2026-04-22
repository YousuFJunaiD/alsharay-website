import { CTASection } from "@/components/sections/CTASection";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { PageHero } from "@/components/sections/PageHero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { EmptyState } from "@/components/shared/EmptyState";
import { Card } from "@/components/ui/card";
import { pageContent } from "@/lib/page-content";

export function GenericContentPage({ path }: { path: string }) {
  const content = pageContent[path];

  if (!content) {
    return (
      <>
        <PageHero
          title="Page content is being prepared"
          description="This route has been scaffolded and can now be enriched with approved institutional copy, imagery, and documents."
        />
        <SectionContainer className="py-16">
          <EmptyState
            title="Content placeholder"
            description="The page structure is live and ready for the final college-approved text, photography, and downloadable assets."
          />
        </SectionContainer>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <SectionContainer className="py-16">
        {content.stats?.length ? <StatsStrip stats={content.stats} /> : null}
      </SectionContainer>

      <SectionContainer className="pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {content.sections?.map((section) => (
            <Card key={section.title}>
              <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {section.body}
              </p>
              {section.items?.length ? (
                <ul className="mt-5 space-y-2 text-sm leading-7 text-[var(--color-muted)]">
                  {section.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pb-16">
        <ImageBanner alt={content.title} />
      </SectionContainer>

      {content.cta ? (
        <CTASection
          title={content.cta.title}
          description={content.cta.description}
          primary={content.cta.primary}
          secondary={content.cta.secondary}
        />
      ) : null}
    </>
  );
}
