export type NavItem = {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
};

export const utilityLinks = [
  { title: "Trustees", href: "/trustees" },
  { title: "Faculty", href: "/faculty" },
  { title: "Students", href: "/students" },
  { title: "Alumni", href: "/alumni" },
  { title: "Contact", href: "/contact" }
];

export const mainNavigation: NavItem[] = [
  {
    title: "About",
    href: "/about",
    children: [
      { title: "President Message", href: "/about/president-message" },
      { title: "What Drives Us", href: "/about/what-drives-us" },
      {
        title: "Strategic Location & Mission",
        href: "/about/strategic-location-mission"
      },
      { title: "At A Glance", href: "/about/at-a-glance" },
      {
        title: "Pioneering Leadership",
        href: "/about/pioneering-leadership"
      }
    ]
  },
  { title: "Admission", href: "/admission" },
  { title: "Hostel / NRI Hostel", href: "/hostel-nri-hostel" },
  {
    title: "Memories",
    href: "/memories",
    children: [
      { title: "Excellence", href: "/memories/excellence" },
      { title: "Cultural", href: "/memories/cultural" }
    ]
  },
  { title: "Campus Life", href: "/campus-life" },
  {
    title: "Results",
    href: "/results",
    children: [
      { title: "PUC Results 2020", href: "/results/puc-results-2020" },
      { title: "Toppers 2021", href: "/results/toppers-2021" },
      { title: "NEET Toppers", href: "/results/neet-toppers" },
      { title: "Gold Medalist", href: "/results/gold-medalist" },
      { title: "PUC Results 2022", href: "/results/puc-results-2022" },
      {
        title: "NEET Toppers 2022",
        href: "/results/neet-toppers-2022"
      },
      { title: "PUC Result 2024", href: "/results/puc-result-2024" },
      { title: "PUC Results 2025", href: "/results/puc-results-2025" }
    ]
  },
  { title: "Academics", href: "/academics" },
  {
    title: "Sports",
    href: "/sports",
    children: [{ title: "Gallery", href: "/sports/gallery" }]
  },
  {
    title: "Benefaction",
    href: "/benefaction",
    children: [
      {
        title: "A Gift To The Community",
        href: "/benefaction/gift-to-the-community"
      },
      {
        title: "Adopt A Student",
        href: "/benefaction/adopt-a-student"
      },
      {
        title: "Become A Philanthropist",
        href: "/benefaction/become-a-philanthropist"
      }
    ]
  },
  {
    title: "Fest / Events",
    href: "/fest",
    children: [
      { title: "Freshers Party 2016", href: "/fest/freshers-party-2016" },
      { title: "Sports", href: "/fest/sports" },
      { title: "Competitions", href: "/fest/competitions" }
    ]
  },
  { title: "Prospectus", href: "/prospectus" }
];
