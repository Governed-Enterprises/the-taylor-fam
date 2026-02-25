// ============================================
// The Taylor Family — Design Tokens & Content
// ============================================

// 1. Color Palette
export const COLOR_PALETTE = {
  background: "#faf8f4",
  backgroundAlt: "#f3f0e8",
  cardBackground: "#ffffff",
  textPrimary: "#3d2b1f",
  textSecondary: "#6b5a4e",
  textMuted: "#9c8b7e",
  gold: "#c9a84c",
  goldLight: "#e0d5a0",
  goldDark: "#a08a3a",
  sage: "#7a8c6e",
  sageMuted: "#a3b297",
  border: "#e5ddd3",
  borderLight: "#f0ebe3",
} as const;

// 2. Typography
export const TYPOGRAPHY = {
  headingFont: "Playfair Display",
  bodyFont: "Inter",
  scriptFont: "Cormorant Garamond",
} as const;

// 3. Site Content
export const SITE_CONTENT = {
  familyName: "The Taylor Family",
  motto: "Govern. Build. Pass Down.",
  homeStatement:
    "The Taylor family is rooted in faith, discipline, and generational purpose. We believe in governing ourselves, building with our own hands, and passing down what matters to those who come after us. This is our home — our history, our family, and our future.",
  established: "Established 2019",
  footerPoweredBy: "Powered by Governed Enterprises",
} as const;

// Keep SITE_CONFIG for backward compat (Navbar, Footer, QR, etc.)
export const SITE_CONFIG = {
  name: SITE_CONTENT.familyName,
  tagline: SITE_CONTENT.motto,
  url: "https://thetaylorfam.net",
  description: SITE_CONTENT.homeStatement,
};

// Navigation
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Legacy", href: "/legacy" },
  { label: "Family Tree", href: "/family-tree" },
  { label: "Family Record", href: "/family-record" },
  { label: "Family Portal", href: "/portal", icon: "Lock" },
] as const;

// 4. Family Directory
export const FAMILY_DIRECTORY = [
  {
    name: "Terry Taylor",
    email: "terry@thetaylorfam.net",
    role: "Head of Household",
  },
  {
    name: "[Wife Name] Taylor",
    email: "wife@thetaylorfam.net",
    role: "",
  },
  {
    name: "[Son 1] Taylor",
    email: "son1@thetaylorfam.net",
    role: "",
  },
  {
    name: "[Son 2] Taylor",
    email: "son2@thetaylorfam.net",
    role: "",
  },
  {
    name: "[Son 3] Taylor",
    email: "son3@thetaylorfam.net",
    role: "",
  },
] as const;

// 5. Family History
export const FAMILY_HISTORY = {
  roots:
    "The Taylor family story begins with the generations before us — men and women who worked hard, kept faith, and laid the groundwork for everything we have today. From grandparents who built with their hands and believed in the power of discipline, our roots are deep and strong. Their sacrifices echo in every decision we make and every value we hold.",
  present:
    "Today, the Taylor family stands firm. Based and building, we are a family driven by purpose. Faith is our foundation, discipline is our daily practice, and love is the bond that holds it all together. We are raising sons to be men of character, creating a home that reflects who we are, and building something that will outlast us.",
  future:
    "We are not just living — we are building a legacy. Every business we launch, every lesson we teach our children, every covenant we honor is a brick in the foundation of something generational. The Taylor name will carry weight because we gave it weight. This is our vision: govern, build, pass down.",
};

// 6. Family Values
export const FAMILY_VALUES = [
  "We govern ourselves before we govern anything else.",
  "We build what we own.",
  "We pass down knowledge, not just wealth.",
  "We honor the covenant.",
  "We protect the family name.",
] as const;

// 7. Family Record — Category Config & Entries

export interface FamilyRecordEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  category:
    | "birth"
    | "home"
    | "education"
    | "business"
    | "legal"
    | "agriculture"
    | "faith"
    | "marriage";
  photo?: string;
}

export const RECORD_CATEGORIES = {
  birth: { icon: "👶", color: "#7ba7c4", label: "Birth" },
  home: { icon: "🏠", color: "#7a8c6e", label: "Home & Move" },
  education: { icon: "🎓", color: "#c9a84c", label: "Education" },
  business: { icon: "💼", color: "#b8860b", label: "Business" },
  legal: { icon: "⚖️", color: "#a9a9a9", label: "Legal Victory" },
  agriculture: { icon: "🌾", color: "#8b7355", label: "Land & Agriculture" },
  faith: { icon: "✡️", color: "#d4af37", label: "Faith Milestone" },
  marriage: { icon: "💍", color: "#c48a8a", label: "Marriage & Family" },
} as const;

export const FAMILY_RECORD: FamilyRecordEntry[] = [
  // ── Grandparents Era ──
  {
    id: "rec-01",
    date: "1942",
    title: "[Placeholder] James Taylor Born",
    description:
      "The patriarch of the Taylor line was born. His life would lay the groundwork for everything the family would become.",
    category: "birth",
  },
  {
    id: "rec-02",
    date: "1945",
    title: "[Placeholder] Mary Taylor Born",
    description:
      "The matriarch whose faith and warmth would hold the family together for decades.",
    category: "birth",
  },
  {
    id: "rec-03",
    date: "1964",
    title: "[Placeholder] James & Mary Married",
    description:
      "A union built on love, faith, and shared vision. Their marriage set the standard for generations to follow.",
    category: "marriage",
  },
  {
    id: "rec-04",
    date: "1965",
    title: "[Placeholder] First Family Home Purchased",
    description:
      "James and Mary purchased their first home — the house that would become the gathering place for the entire family.",
    category: "home",
  },
  {
    id: "rec-05",
    date: "1970",
    title: "[Placeholder] Family Land Acquired",
    description:
      "A parcel of land was acquired by the family. A foundation for generational wealth and self-sufficiency.",
    category: "agriculture",
  },

  // ── Parents Era ──
  {
    id: "rec-06",
    date: "1968",
    title: "[Placeholder] Michael Taylor Born",
    description:
      "The firstborn son of James and Mary. He would carry the family name with purpose and conviction.",
    category: "birth",
  },
  {
    id: "rec-07",
    date: "1970",
    title: "[Placeholder] Sandra Williams Born",
    description:
      "Born to Robert and Helen Williams. Her strength and faith would become pillars of the Taylor household.",
    category: "birth",
  },
  {
    id: "rec-08",
    date: "1990",
    title: "[Placeholder] Michael & Sandra Married",
    description:
      "Two families joined together. Their union produced the next generation of Taylors.",
    category: "marriage",
  },

  // ── Current Generation ──
  {
    id: "rec-09",
    date: "1992",
    title: "Terry Taylor Born",
    description:
      "The son who would go on to build Governed Enterprises and establish the Taylor family digital legacy.",
    category: "birth",
  },
  {
    id: "rec-10",
    date: "2010",
    title: "[Placeholder] First College Graduate",
    description:
      "A milestone in the family's educational journey — the first Taylor to earn a college degree.",
    category: "education",
  },
  {
    id: "rec-11",
    date: "2015",
    title: "[Placeholder] Faith Covenant Established",
    description:
      "A defining spiritual moment for the family. A covenant was made that would guide every decision going forward.",
    category: "faith",
  },
  {
    id: "rec-12",
    date: "2018",
    title: "[Placeholder] First Son Born",
    description:
      "The eldest son arrived — the beginning of Generation 4. A new chapter in the Taylor story.",
    category: "birth",
  },
  {
    id: "rec-13",
    date: "2019",
    title: "[Placeholder] Terry & [Wife] Married",
    description:
      "A covenant union. Together they would build the Taylor household and raise the next generation.",
    category: "marriage",
  },
  {
    id: "rec-14",
    date: "2020",
    title: "[Placeholder] Second Son Born",
    description:
      "The family grew again. Kind-hearted and wise beyond his years from the start.",
    category: "birth",
  },
  {
    id: "rec-15",
    date: "2022",
    title: "[Placeholder] Third Son Born",
    description:
      "The youngest son — bold, joyful, and the spark that lights up the room.",
    category: "birth",
  },
  {
    id: "rec-16",
    date: "2023",
    title: "[Placeholder] Legal Victory",
    description:
      "A significant legal milestone for the family. Justice prevailed and the family stood stronger for it.",
    category: "legal",
  },
  {
    id: "rec-17",
    date: "2024",
    title: "Governed Enterprises Founded",
    description:
      "Terry officially launched Governed Enterprises — the business arm of the Taylor family legacy.",
    category: "business",
  },
  {
    id: "rec-18",
    date: "2025",
    title: "Taylor Family Website Launched",
    description:
      "The digital home of the Taylor family goes live — connecting generations past, present, and future.",
    category: "business",
  },
];

// 8. Photo Timeline
export const PHOTO_TIMELINE = [
  {
    year: "2019",
    caption: "First family home",
    image: "/images/family/placeholder-1.jpg",
  },
  {
    year: "2020",
    caption: "Growing the family",
    image: "/images/family/placeholder-2.jpg",
  },
  {
    year: "2022",
    caption: "[Son] born",
    image: "/images/family/placeholder-3.jpg",
  },
  {
    year: "2024",
    caption: "Governed Enterprises founded",
    image: "/images/family/placeholder-4.jpg",
  },
  {
    year: "2025",
    caption: "Building the future",
    image: "/images/family/placeholder-5.jpg",
  },
] as const;
