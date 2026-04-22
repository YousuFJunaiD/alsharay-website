import { aboutHighlights, leadership } from "@/data/about";
import { academicFeatures, academicPrograms } from "@/data/academics";
import { benefactionPrograms } from "@/data/benefaction";
import { contactDetails } from "@/data/contact";
import { eventHighlights } from "@/data/events";
import { facilities } from "@/data/facilities";
import { resultEntries } from "@/data/results";

export type GenericPageContent = {
  title: string;
  description: string;
  eyebrow?: string;
  stats?: { label: string; value: string }[];
  sections?: {
    title: string;
    body: string;
    items?: string[];
  }[];
  cta?: {
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};

export const pageContent: Record<string, GenericPageContent> = {
  "/about": {
    title: "A heritage institution shaped by purpose and academic resolve",
    description:
      "Al Sharay PU College combines disciplined academics, values-based mentoring, and a commitment to student progress within a respected educational environment.",
    eyebrow: "About Al Sharay",
    stats: [
      { label: "Established", value: "2005" },
      { label: "Academic Culture", value: "Results-led" },
      { label: "Location", value: "Central Gulbarga" }
    ],
    sections: aboutHighlights.map((item) => ({
      title: item.title,
      body: item.description
    })),
    cta: {
      title: "Begin your Al Sharay journey",
      description:
        "Explore admission pathways, campus support, and the institutional environment that helps students grow with confidence.",
      primary: { label: "Admission", href: "/admission" },
      secondary: { label: "Contact Us", href: "/contact" }
    }
  },
  "/about/president-message": {
    title: "President Message",
    description:
      "A message of conviction, service, and educational responsibility from the leadership of Al Sharay.",
    sections: [
      {
        title: "A vision for meaningful education",
        body:
          "By the grace of Allah Almighty, AL-SHARAY has grown into a comprehensive institution on modern lines while remaining grounded in community needs, disciplined learning, and human development."
      },
      {
        title: "Excellence and values",
        body:
          "The institution believes that academic rigor must be accompanied by values, maturity, and responsibility. Each program is designed to shape not only results, but also character."
      }
    ],
    cta: {
      title: "Meet the wider institutional vision",
      description:
        "Continue through the pages that explain our mission, location, leadership, and guiding principles.",
      primary: { label: "What Drives Us", href: "/about/what-drives-us" }
    }
  },
  "/about/what-drives-us": {
    title: "What Drives Us",
    description:
      "A disciplined belief in educational quality, student upliftment, and purposeful service to society.",
    sections: [
      {
        title: "Values-based progress",
        body:
          "The college is driven by the conviction that academic success gains meaning when it is rooted in ethics, service, and personal discipline."
      },
      {
        title: "Student-first institution building",
        body:
          "Every effort in teaching, mentoring, and student support is oriented toward helping young learners develop confidence, clarity, and aspiration."
      }
    ]
  },
  "/about/strategic-location-mission": {
    title: "Strategic Location & Mission",
    description:
      "Positioned in the heart of the city, the college offers access, convenience, and a mission-centered learning environment.",
    sections: [
      {
        title: "Strategic location",
        body:
          "The campus is centrally located, enabling students from across the city and surrounding areas to access classes conveniently and safely."
      },
      {
        title: "Mission",
        body:
          "The mission is to cultivate disciplined habits of mind, body, and spirit, while fostering solidarity, leadership, scholarship, and service to the larger community.",
        items: [
          "Character",
          "Commitment",
          "Conviction",
          "Courtesy",
          "Courage"
        ]
      }
    ]
  },
  "/about/at-a-glance": {
    title: "At A Glance",
    description:
      "An overview of the institution's journey, educational standards, and long-term commitment to quality.",
    sections: [
      {
        title: "Institutional foundation",
        body:
          "Established in 2005 under the leadership of Alhaj Gulam Rabbani, the college has built a respected reputation in pre-university education."
      },
      {
        title: "Academic ecosystem",
        body:
          "Al Sharay continuously upgrades resources, processes, and student support in pursuit of high academic standards and all-round development."
      }
    ]
  },
  "/about/pioneering-leadership": {
    title: "Pioneering Leadership",
    description:
      "Institutional progress guided by visionaries who treat education as both responsibility and service.",
    sections: leadership.map((item) => ({
      title: `${item.name} - ${item.role}`,
      body: item.description
    }))
  },
  "/admission": {
    title: "Admissions designed for ambitious learners and supportive families",
    description:
      "Clear admission guidance, a strong academic environment, and a welcoming process for students seeking disciplined progress.",
    stats: [
      { label: "Process", value: "Simple" },
      { label: "Mentoring", value: "Personal" },
      { label: "Prospectus", value: "Available" }
    ],
    sections: [
      {
        title: "Why choose Al Sharay",
        body:
          "Families choose Al Sharay for its reputation in results, its structured learning environment, and its commitment to student development."
      },
      {
        title: "Admission steps",
        body:
          "Begin with an inquiry, review program fit and eligibility, prepare the required documents, and complete branch-level admission formalities with the admissions team.",
        items: [
          "Submit an inquiry",
          "Discuss program fit",
          "Prepare required documents",
          "Complete admission confirmation"
        ]
      },
      {
        title: "Required documents",
        body:
          "A professionally organized checklist can be maintained here for marks cards, transfer certificates, identity documents, photographs, and category-specific records."
      }
    ],
    cta: {
      title: "Speak with admissions",
      description:
        "Get guidance on eligibility, branch options, hostel support, and the next step for enrollment.",
      primary: { label: "Contact Admissions", href: "/contact" },
      secondary: { label: "View Prospectus", href: "/prospectus" }
    }
  },
  "/hostel-nri-hostel": {
    title: "Hostel & NRI Hostel",
    description:
      "Residential support that complements disciplined study, student safety, and everyday convenience.",
    sections: [
      {
        title: "Structured residential life",
        body:
          "Hostel support is designed to provide students with a dependable routine, supervision, and proximity to campus resources."
      },
      {
        title: "Student wellbeing",
        body:
          "Families can expect a secure, academically aligned environment with support for study rhythm, comfort, and essential care."
      }
    ]
  },
  "/memories": {
    title: "Memories & Institutional Moments",
    description:
      "A curated look at the celebratory, cultural, and excellence-driven memories that shape campus identity.",
    sections: eventHighlights.map((item) => ({
      title: item.title,
      body: item.description
    }))
  },
  "/memories/excellence": {
    title: "Memories of Excellence",
    description:
      "Awards, felicitations, and achievement ceremonies that honor the institution's strongest academic moments."
  },
  "/memories/cultural": {
    title: "Cultural Memories",
    description:
      "A graceful record of student participation, creative expression, and community spirit within the Al Sharay experience."
  },
  "/campus-life": {
    title: "Campus Life",
    description:
      "A campus experience that balances academic seriousness with belonging, support, and healthy student engagement.",
    sections: facilities.map((item) => ({
      title: item.title,
      body: item.description
    }))
  },
  "/results": {
    title: "Results that strengthen trust, aspiration, and institutional credibility",
    description:
      "Explore year-wise result presentations, toppers, achievement highlights, and the academic excellence that defines Al Sharay.",
    stats: [
      { label: "Top Band", value: "96%+" },
      { label: "85% to 90%", value: "73" },
      { label: "100/100", value: "21" }
    ]
  },
  "/academics": {
    title: "Academics built on rigor, clarity, and guided progression",
    description:
      "Academic programs at Al Sharay emphasize conceptual learning, examination readiness, and a disciplined culture of performance.",
    sections: [
      ...academicPrograms.map((item) => ({
        title: item.title,
        body: item.description
      })),
      {
        title: "Academic strengths",
        body:
          "The academic ecosystem can be extended and refined over time using modular content data without rewriting layout code.",
        items: academicFeatures
      }
    ]
  },
  "/sports": {
    title: "Sports",
    description:
      "Sports and physical activity contribute to confidence, teamwork, and discipline across campus life."
  },
  "/sports/gallery": {
    title: "Sports Gallery",
    description:
      "A visual archive area for tournaments, team moments, and energetic campus participation."
  },
  "/benefaction": {
    title: "Benefaction",
    description:
      "Educational upliftment through philanthropy, social responsibility, and meaningful institutional support.",
    sections: benefactionPrograms.map((item) => ({
      title: item.title,
      body: item.description
    }))
  },
  "/benefaction/gift-to-the-community": {
    title: "A Gift To The Community",
    description:
      "Education as a community service mission, creating pathways of opportunity through institutional commitment."
  },
  "/benefaction/adopt-a-student": {
    title: "Adopt A Student",
    description:
      "A direct and human-centered giving pathway that supports deserving students in continuing their education."
  },
  "/benefaction/become-a-philanthropist": {
    title: "Become A Philanthropist",
    description:
      "A formal invitation to participate in the long-term educational growth of students and the wider community."
  },
  "/fest": {
    title: "Fest & Events",
    description:
      "Celebratory institutional events that build memory, belonging, and student expression within a disciplined campus environment."
  },
  "/fest/freshers-party-2016": {
    title: "Freshers Party 2016",
    description:
      "A welcoming milestone in the student memory archive, presented with a more polished and premium event format."
  },
  "/fest/sports": {
    title: "Fest Sports",
    description:
      "A dedicated event page for sports-based fest participation, achievement, and student engagement."
  },
  "/fest/competitions": {
    title: "Competitions",
    description:
      "A formal showcase for inter-student competitions, confidence-building activities, and campus recognition."
  },
  "/prospectus": {
    title: "Prospectus",
    description:
      "A clean prospectus presentation with space for downloadable institutional material and admissions guidance."
  },
  "/trustees": {
    title: "Trustees",
    description:
      "Meet the leadership community behind the educational and charitable vision of Al Sharay.",
    sections: leadership.map((item) => ({
      title: item.name,
      body: item.description
    }))
  },
  "/faculty": {
    title: "Faculty",
    description:
      "Dedicated educators who combine competence, mentorship, and seriousness of purpose in the classroom.",
    sections: [
      {
        title: "Academic dedication",
        body:
          "Al Sharay's faculty represent a closely knit team of qualified and committed teachers who support both conceptual understanding and examination success."
      },
      {
        title: "Student-centered teaching",
        body:
          "Teaching is reinforced by monitoring, mentoring, and a clear sense of academic responsibility toward every student."
      }
    ]
  },
  "/students": {
    title: "Students",
    description:
      "A student-centered overview of support, discipline, opportunity, and campus experience at Al Sharay."
  },
  "/alumni": {
    title: "Alumni",
    description:
      "A space to celebrate graduates, professional journeys, and the continuing legacy of Al Sharay learners."
  },
  "/triumphs": {
    title: "Triumphs",
    description:
      "A collective showcase of academic, cultural, and institutional triumphs across years."
  },
  "/visitors": {
    title: "Visitors",
    description:
      "A welcoming institutional page for guests, families, and community members seeking to know the campus better."
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Reach Al Sharay PU College through clearly organized branch information, admission contacts, and direct inquiry options.",
    sections: contactDetails.branches.map((branch) => ({
      title: branch.name,
      body: branch.address,
      items: [...branch.phones]
    }))
  }
};

for (const result of resultEntries) {
  pageContent[`/results/${result.slug}`] = {
    title: result.title,
    description: result.summary,
    stats: result.highlights
  };
}
