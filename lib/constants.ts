// ============================================
// The Taylor Fam — Constants & Content
// ============================================

export const SITE_CONFIG = {
  name: "The Taylor Family",
  tagline: "Faith, Family, Legacy",
  url: "https://thetaylorfam.net",
  description:
    "The official home of the Taylor family — celebrating our legacy, honoring our roots, and staying connected across generations.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Legacy", href: "/legacy" },
  { label: "Family Tree", href: "/family-tree" },
  { label: "Family Record", href: "/family-record" },
  { label: "QR Code", href: "/qr" },
  { label: "Portal", href: "/portal" },
] as const;

export const COLORS = {
  burgundy: "#8B1A3A",
  burgundyLight: "#B8486A",
  burgundyDark: "#6E1430",
  gold: "#D4A84B",
  goldLight: "#FFE484",
  goldDark: "#8A6D23",
  cream: "#FFF9E8",
  creamLight: "#FFFDF7",
  warmGray: "#8A8275",
  warmGrayLight: "#F0EEEA",
  warmGrayDark: "#504B43",
} as const;

export const FAMILY_VALUES = [
  {
    title: "Faith",
    description:
      "Our foundation is built on faith. We trust in God's plan and lean on His strength in all we do.",
    icon: "Heart",
  },
  {
    title: "Unity",
    description:
      "We stand together through every season — celebrating victories and carrying each other through trials.",
    icon: "Users",
  },
  {
    title: "Legacy",
    description:
      "We honor those who came before us and build a path for those who will follow.",
    icon: "Crown",
  },
  {
    title: "Love",
    description:
      "Love is the thread that holds us together — unconditional, unwavering, and always present.",
    icon: "Sparkles",
  },
  {
    title: "Resilience",
    description:
      "Through hardship and change, we persevere. Our family's strength is forged in adversity.",
    icon: "Shield",
  },
  {
    title: "Growth",
    description:
      "We pursue knowledge, embrace change, and encourage each generation to reach higher.",
    icon: "TrendingUp",
  },
] as const;

export const FAMILY_HISTORY = {
  title: "Our Story",
  subtitle: "A Legacy Written in Love",
  narrative: `The Taylor family story is one of faith, perseverance, and unbreakable bonds. Our roots run deep, nourished by the values passed down through generations — values of hard work, devotion to family, and trust in God's plan.

From humble beginnings, our family has grown and flourished. Each generation has added its own chapter to our story, carrying forward the traditions that define us while forging new paths of their own.

Today, the Taylor family stands as a testament to the power of love and unity. Spread across cities and states, we remain connected by the invisible threads of shared memories, common values, and an unwavering commitment to one another.

This site is our digital gathering place — a space to celebrate who we are, remember where we came from, and look forward to where we're going together.`,
};

export const FAMILY_DIRECTORY = [
  {
    name: "Taylor Family Group",
    email: "family@thetaylorfam.net",
    role: "Family Group",
  },
] as const;

export const PHOTO_TIMELINE = [
  {
    year: "The Beginning",
    caption: "Where it all started",
    placeholder: true,
  },
  {
    year: "Growing Together",
    caption: "Building our foundation",
    placeholder: true,
  },
  {
    year: "New Generations",
    caption: "The family continues to grow",
    placeholder: true,
  },
  {
    year: "Celebrations",
    caption: "Moments that brought us together",
    placeholder: true,
  },
  {
    year: "Today",
    caption: "Our family, stronger than ever",
    placeholder: true,
  },
] as const;
