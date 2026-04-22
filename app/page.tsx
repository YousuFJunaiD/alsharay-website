import Image from "next/image";
import Link from "next/link";

import { AcademicProgramCard } from "@/components/cards/AcademicProgramCard";
import { AnnouncementCard } from "@/components/cards/AnnouncementCard";
import { ContactInfoCard } from "@/components/cards/ContactInfoCard";
import { EventCard } from "@/components/cards/EventCard";
import { FacilityCard } from "@/components/cards/FacilityCard";
import { LeadershipCard } from "@/components/cards/LeadershipCard";
import { ResultHighlightCard } from "@/components/cards/ResultHighlightCard";
import { StudentSupportCard } from "@/components/cards/StudentSupportCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { TopperCard } from "@/components/cards/TopperCard";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { leadership } from "@/data/about";
import { academicPrograms } from "@/data/academics";
import { benefactionPrograms } from "@/data/benefaction";
import { contactDetails } from "@/data/contact";
import { eventHighlights } from "@/data/events";
import { facilities } from "@/data/facilities";
import { heroContent, announcements, whyAlSharay } from "@/data/home";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Home",
  description:
    "Discover the premium redesigned digital experience for Al Sharay PU College with academics, results, admissions, benefaction, and campus life."
});

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <SectionContainer className="py-16">
        <StatsStrip stats={heroContent.metrics} />
      </SectionContainer>

      <SectionContainer className="py-8">
        <SectionHeading
          eyebrow="Why Al Sharay"
          title="A disciplined institution with academic seriousness, values, and visible outcomes."
          description="Every section is refined to feel closer to the crest itself: dignified maroon, thoughtful gold detail, and a formal academic rhythm."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {whyAlSharay.map((item) => (
            <StudentSupportCard key={item.title} {...item} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-16">
        <SectionHeading
          eyebrow="Academic Excellence"
          title="Results remain one of the institution's most powerful public signatures."
          description="The results presentation now uses a more ceremonial academic language with stronger merit surfaces, richer hierarchy, and dignified emphasis."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <ResultHighlightCard label="96% & Above" value="007" />
          <ResultHighlightCard label="85% to 90%" value="073" />
          <ResultHighlightCard label="100 / 100" value="021" />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <TopperCard name="Bibi Safya" score="District Topper" note="Featured from the 2025 result showcase with a polished merit presentation." />
          <TopperCard name="Syeda Amtul R." score="587 - 97.83%" note="A top featured achiever from the documented 2024 performance set." />
          <TopperCard name="Future Doctors Batch" score="NEET 2025" note="A dedicated results pathway for medical aspirants and NEET achievers." />
        </div>
      </SectionContainer>

      <SectionContainer className="py-16">
        <SectionHeading
          eyebrow="Academics"
          title="Programs shaped by rigor, guidance, and steady progression."
          description="The academic system is presented with stronger institutional polish while keeping the tone formal, readable, and parent-friendly."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {academicPrograms.map((program) => (
            <AcademicProgramCard key={program.title} {...program} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-16">
        <SectionHeading
          eyebrow="Facilities & Campus Life"
          title="A balanced campus experience designed to support serious learning."
          description="Facilities, residential support, and student spaces now sit within a warmer and more cohesive institutional visual system."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} {...facility} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Hostel Support"
              title="Residential care that complements discipline, safety, and academic focus."
              description="The hostel and NRI hostel pages are now framed with greater parental confidence, clearer hierarchy, and a more refined institutional tone."
            />
            <div className="mt-8 grid gap-4">
              <StudentSupportCard
                title="Structured routines"
                description="Residential support designed around study rhythm, wellbeing, and dependable daily structure."
              />
              <StudentSupportCard
                title="Family confidence"
                description="A clean way to communicate safety, mentoring, and branch-level hostel support to parents and guardians."
              />
            </div>
          </div>
          <div className="rounded-[34px] border border-[var(--color-border-strong)] bg-white p-6 shadow-[var(--shadow-soft)]">
            <Image
              src="/images/campus-placeholder.svg"
              alt="Hostel and student support placeholder"
              width={1600}
              height={900}
              className="rounded-[24px]"
            />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-16">
        <SectionHeading
          eyebrow="News & Announcements"
          title="Timely updates with a more dignified editorial structure."
          description="The announcements zone is refined to feel institutionally trustworthy rather than crowded or promotional."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.title} {...announcement} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-16">
        <SectionHeading
          eyebrow="Events & Memories"
          title="Institutional moments presented with dignity, memory, and warmth."
          description="From excellence awards to fest memories, the structure now supports a more archival and ceremonial presentation."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {eventHighlights.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Benefaction"
              title="A benefaction experience shaped by mission, trust, and educational purpose."
              description="These pages support educational philanthropy with stronger formal language, cleaner surfaces, and a more premium institutional feel."
            />
            <div className="mt-8 space-y-4">
              {benefactionPrograms.map((program) => (
                <Link
                  key={program.href}
                  href={program.href}
                  className="block rounded-[26px] border border-[var(--color-border-strong)] bg-white p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-[var(--color-charcoal)]">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {program.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <LeadershipCard {...leadership[0]} />
            <TestimonialCard
              quote="Our aim is to nurture disciplined minds, confident learners, and students who carry values into every ambition."
              name="Institutional Voice"
              role="Leadership Preview"
            />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-16">
        <SectionHeading
          eyebrow="Contact"
          title="Clear access to the campus, admissions team, and institutional contacts."
          description="The contact experience is now organized with greater confidence, stronger hierarchy, and better visual consistency."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <ContactInfoCard
            title="Main Branch"
            lines={[contactDetails.address, `Office: ${contactDetails.officePhone}`]}
          />
          <ContactInfoCard
            title="Admissions"
            lines={[`Mobile: ${contactDetails.admissionsPhone}`, contactDetails.email]}
          />
          <ContactInfoCard
            title="Other Branches"
            lines={contactDetails.branches.slice(1).map((branch) => branch.name)}
          />
        </div>
      </SectionContainer>

      <CTASection
        title="Experience Al Sharay through a more distinguished digital identity"
        description="Explore admissions, results, academics, and benefaction through a website that stays recognizably Al Sharay while feeling far more premium and crest-inspired."
        primary={{ label: "Visit Admission", href: "/admission" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
