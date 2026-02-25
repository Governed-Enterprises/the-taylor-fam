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

// 7. Photo Timeline
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
