import { ContactInfoCard } from "@/components/cards/ContactInfoCard";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { contactDetails } from "@/data/contact";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact Al Sharay PU College through the main branch, admissions desk, and structured inquiry pathways.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Al Sharay"
        title="Contact Us"
        description="Reach the institution through clearly organized branch information, admissions contacts, and a premium inquiry experience."
      />
      <SectionContainer className="py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {contactDetails.branches.map((branch) => (
            <ContactInfoCard
              key={branch.name}
              title={branch.name}
              lines={[branch.address, ...branch.phones]}
            />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="pb-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Admission Contact"
              title="Admissions, office support, and branch-level guidance."
              description="Use this page to highlight admissions contacts, office support, and other approved institutional communication channels."
            />
            <div className="mt-8 grid gap-4">
              <ContactInfoCard
                title="Primary Office"
                lines={[
                  `Office: ${contactDetails.officePhone}`,
                  `Mobile: ${contactDetails.mobile}`,
                  `Email: ${contactDetails.email}`
                ]}
              />
              <ContactInfoCard
                title="Admissions Lines"
                lines={[...contactDetails.admissionsContacts]}
              />
              <ContactInfoCard
                title="Map Placeholder"
                lines={[
                  "Embed a Google Map or approved location frame here.",
                  contactDetails.address
                ]}
              />
            </div>
          </div>
          <InquiryForm />
        </div>
      </SectionContainer>
      <CTASection
        title="Plan a visit or speak with our team"
        description="Families, students, and well-wishers can use the contact structure here as a polished starting point for every conversation."
        primary={{ label: "Admission Page", href: "/admission" }}
        secondary={{ label: "Prospectus", href: "/prospectus" }}
      />
    </>
  );
}
