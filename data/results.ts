export type ResultEntry = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  highlights: { label: string; value: string }[];
  toppers: {
    name: string;
    score: string;
    note: string;
  }[];
};

export const resultEntries: ResultEntry[] = [
  {
    slug: "puc-results-2020",
    title: "PUC Results 2020",
    year: "2020",
    summary:
      "A milestone year reflecting disciplined preparation and a sustained culture of achievement.",
    highlights: [
      { label: "Pass Percentage", value: "96%" },
      { label: "Distinctions", value: "100+" },
      { label: "First Class", value: "216" }
    ],
    toppers: [
      { name: "Merit Scholar A", score: "96.8%", note: "Science stream topper" },
      { name: "Merit Scholar B", score: "95.9%", note: "PCB distinction" },
      { name: "Merit Scholar C", score: "95.1%", note: "Academic excellence award" }
    ]
  },
  {
    slug: "toppers-2021",
    title: "Toppers 2021",
    year: "2021",
    summary:
      "Celebrating toppers whose consistency, discipline, and aspiration reflected the institution's standards.",
    highlights: [
      { label: "Top Band", value: "95%+" },
      { label: "Merit Profiles", value: "12" },
      { label: "High Scorers", value: "50+" }
    ],
    toppers: [
      { name: "Topper Profile 1", score: "97.2%", note: "District-level performance" },
      { name: "Topper Profile 2", score: "96.7%", note: "PCB high distinction" },
      { name: "Topper Profile 3", score: "96.3%", note: "Consistent academic performer" }
    ]
  },
  {
    slug: "neet-toppers",
    title: "NEET Toppers",
    year: "2025",
    summary:
      "Recognizing future doctors shaped through focused mentorship, conceptual clarity, and perseverance.",
    highlights: [
      { label: "NEET Focus", value: "Integrated" },
      { label: "Medical Aspirants", value: "Growing" },
      { label: "Mentored Preparation", value: "Year-Round" }
    ],
    toppers: [
      { name: "Future Doctor 1", score: "Top Rank", note: "Strong conceptual discipline" },
      { name: "Future Doctor 2", score: "Qualified", note: "Steady year-long preparation" },
      { name: "Future Doctor 3", score: "Qualified", note: "Mentored pathway to medicine" }
    ]
  },
  {
    slug: "gold-medalist",
    title: "Gold Medalist",
    year: "Achievement Spotlight",
    summary:
      "A focused showcase for exceptional individual recognition that uplifts the institution's culture of excellence.",
    highlights: [
      { label: "Recognition", value: "Gold Medal" },
      { label: "Institutional Pride", value: "High" },
      { label: "Legacy Marker", value: "Prestigious" }
    ],
    toppers: [
      { name: "Gold Medal Scholar", score: "Elite", note: "Institutional distinction" }
    ]
  },
  {
    slug: "puc-results-2022",
    title: "PUC Results 2022",
    year: "2022",
    summary:
      "Another year of credible results, balanced performance, and distinction-driven outcomes.",
    highlights: [
      { label: "Pass Percentage", value: "95%" },
      { label: "Distinctions", value: "80+" },
      { label: "Top Scores", value: "90%+" }
    ],
    toppers: [
      { name: "Scholar 2022 A", score: "96.4%", note: "PCB distinction" },
      { name: "Scholar 2022 B", score: "95.6%", note: "Merit scholar" },
      { name: "Scholar 2022 C", score: "94.9%", note: "High academic standing" }
    ]
  },
  {
    slug: "neet-toppers-2022",
    title: "NEET Toppers 2022",
    year: "2022",
    summary:
      "A year that affirmed the institution's commitment to supporting ambitious medical aspirants.",
    highlights: [
      { label: "Qualified Candidates", value: "Featured" },
      { label: "Mentorship", value: "Focused" },
      { label: "Preparation Model", value: "Structured" }
    ],
    toppers: [
      { name: "NEET Achiever 1", score: "Qualified", note: "Medical pathway success" },
      { name: "NEET Achiever 2", score: "Qualified", note: "Discipline and resilience" }
    ]
  },
  {
    slug: "puc-result-2024",
    title: "PUC Result 2024",
    year: "2024",
    summary:
      "Built around the documented 2024 result highlights, this page celebrates a remarkable cohort of high achievers.",
    highlights: [
      { label: "95% and Above", value: "21" },
      { label: "Top Score", value: "97.83%" },
      { label: "100 in Subjects", value: "Multiple" }
    ],
    toppers: [
      { name: "Syeda Amtul R.", score: "587 - 97.83%", note: "Top featured scholar" },
      { name: "Shafiya Tahreem", score: "584 - 97.33%", note: "Outstanding distinction" },
      { name: "Sambreen", score: "583 - 97.17%", note: "Academic excellence" }
    ]
  },
  {
    slug: "puc-results-2025",
    title: "PUC Results 2025",
    year: "2025",
    summary:
      "A premium results presentation for one of the institution's most visible strengths: consistent academic performance.",
    highlights: [
      { label: "District Topper Spotlight", value: "Featured" },
      { label: "Distinction Culture", value: "100+" },
      { label: "Future Doctors", value: "Celebrated" }
    ],
    toppers: [
      { name: "Bibi Safya", score: "District Topper", note: "Gulbarga district spotlight" },
      { name: "Merit Scholar 2025 A", score: "96%+", note: "Top merit band" },
      { name: "Merit Scholar 2025 B", score: "95%+", note: "Academic distinction" }
    ]
  }
];
