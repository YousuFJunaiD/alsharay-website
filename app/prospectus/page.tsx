import { createMetadata } from "@/lib/metadata";
import { ProspectusDownloadCard } from "@/components/cards/ProspectusDownloadCard";
import { PageHero } from "@/components/sections/PageHero";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contactDetails } from "@/data/contact";

export const metadata = createMetadata({
  title: "Prospectus",
  description: "Access the Al Sharay prospectus presentation and download area.",
  path: "/prospectus"
});

export default function ProspectusPage() {
  return (
    <>
      <PageHero
        eyebrow="Institutional Document"
        title="Prospectus"
        description="A clean presentation page for the current prospectus, downloadable branch documents, and future admission material."
      />
      <SectionContainer className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
          <ProspectusDownloadCard />

          <Card className="flex h-full flex-col border-[var(--color-border)] bg-white/95">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Admission Guidance
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[var(--color-charcoal)]">
                Request the latest branch-wise prospectus and admission support.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                This panel intentionally balances the page on larger screens and gives families a clear next step while the final downloadable document set is being prepared.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-ivory)] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
                  Main Branch
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  {contactDetails.address}
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-ivory)] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
                  Admissions Contact
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Mobile: {contactDetails.admissionsPhone}
                </p>
                <p className="text-sm leading-7 text-[var(--color-muted)]">
                  Email: {contactDetails.email}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[28px] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,#fff9f0_0%,#f5ead7_100%)] p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
                Includes
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-muted)]">
                <li>- Program overview and institutional profile</li>
                <li>- Admission process and branch guidance</li>
                <li>- Hostel and student support summary</li>
                <li>- Contact details for admission follow-up</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Contact Admissions</Button>
              <Button href="/admission" variant="secondary">
                Admission Page
              </Button>
            </div>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
}
