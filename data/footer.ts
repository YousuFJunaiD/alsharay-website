import { contactDetails } from "@/data/contact";

export const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "/about" },
      { label: "Admission", href: "/admission" },
      { label: "Academics", href: "/academics" },
      { label: "Campus Life", href: "/campus-life" }
    ]
  },
  {
    title: "Results",
    links: [
      { label: "PUC Results 2024", href: "/results/puc-result-2024" },
      { label: "PUC Results 2025", href: "/results/puc-results-2025" },
      { label: "NEET Toppers", href: "/results/neet-toppers" },
      { label: "Gold Medalist", href: "/results/gold-medalist" }
    ]
  },
  {
    title: "Benefaction",
    links: [
      {
        label: "A Gift To The Community",
        href: "/benefaction/gift-to-the-community"
      },
      { label: "Adopt A Student", href: "/benefaction/adopt-a-student" },
      {
        label: "Become A Philanthropist",
        href: "/benefaction/become-a-philanthropist"
      },
      { label: "Prospectus", href: "/prospectus" }
    ]
  }
];

export const footerContact = {
  address: contactDetails.address,
  phone: contactDetails.mobile,
  email: contactDetails.email
};
