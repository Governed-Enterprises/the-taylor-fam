// ============================================
// The Taylor Family — Family Tree Data Structure
// ============================================
// PLACEHOLDER DATA — Replace with real family information

export interface FamilyMember {
  id: string;
  firstName: string;
  lastName: string;
  birthYear: number;
  deathYear?: number;
  gender: "male" | "female";
  generation: number;
  generationLabel: string;
  relationship: string;
  bio: string;
  email?: string;
  role?: string;
  photo?: string;
  spouseId?: string;
  parentIds: string[];
  childIds: string[];
}

export interface GenerationInfo {
  number: number;
  label: string;
  subtitle: string;
}

export const GENERATION_LABELS: Record<number, GenerationInfo> = {
  1: {
    number: 1,
    label: "The Roots",
    subtitle: "Our grandparents — where it all began",
  },
  2: {
    number: 2,
    label: "The Trunk",
    subtitle: "Our parents — who carried the family forward",
  },
  3: {
    number: 3,
    label: "The Branches",
    subtitle: "Our generation — building the future",
  },
  4: {
    number: 4,
    label: "The Growth",
    subtitle: "Our children — the next generation",
  },
  5: {
    number: 5,
    label: "The Fruit",
    subtitle: "Yet to come...",
  },
};

// ============================================
// Family Members
// ============================================

export const FAMILY_MEMBERS: FamilyMember[] = [
  // ── Generation 1: The Roots (Grandparents) ──

  {
    id: "james-taylor",
    firstName: "James",
    lastName: "Taylor",
    birthYear: 1942,
    deathYear: 2010,
    gender: "male",
    generation: 1,
    generationLabel: "The Roots",
    relationship: "Paternal Grandfather",
    bio: "James Taylor was a man of deep conviction and quiet strength. He worked with his hands, provided for his family, and taught his children the value of discipline and integrity.",
    parentIds: [],
    childIds: ["michael-taylor"],
    spouseId: "mary-taylor",
  },
  {
    id: "mary-taylor",
    firstName: "Mary",
    lastName: "Taylor",
    birthYear: 1945,
    gender: "female",
    generation: 1,
    generationLabel: "The Roots",
    relationship: "Paternal Grandmother",
    bio: "Mary Taylor held the family together with warmth, prayer, and an unwavering commitment to her household. Her faith became the spiritual foundation for generations to come.",
    parentIds: [],
    childIds: ["michael-taylor"],
    spouseId: "james-taylor",
  },
  {
    id: "robert-williams",
    firstName: "Robert",
    lastName: "Williams",
    birthYear: 1944,
    deathYear: 2015,
    gender: "male",
    generation: 1,
    generationLabel: "The Roots",
    relationship: "Maternal Grandfather",
    bio: "Robert Williams was a hardworking man who believed in building something from nothing. He instilled a sense of pride and self-reliance in everyone around him.",
    parentIds: [],
    childIds: ["sandra-taylor"],
    spouseId: "helen-williams",
  },
  {
    id: "helen-williams",
    firstName: "Helen",
    lastName: "Williams",
    birthYear: 1947,
    gender: "female",
    generation: 1,
    generationLabel: "The Roots",
    relationship: "Maternal Grandmother",
    bio: "Helen Williams was known for her generosity and her gift for bringing people together. Family gatherings always centered around her table and her wisdom.",
    parentIds: [],
    childIds: ["sandra-taylor"],
    spouseId: "robert-williams",
  },

  // ── Generation 2: The Trunk (Parents) ──

  {
    id: "michael-taylor",
    firstName: "Michael",
    lastName: "Taylor",
    birthYear: 1968,
    gender: "male",
    generation: 2,
    generationLabel: "The Trunk",
    relationship: "Father",
    bio: "Michael Taylor carried the weight of the family name with purpose. A provider and protector, he taught his sons that a man's word is his bond and that legacy is built one decision at a time.",
    parentIds: ["james-taylor", "mary-taylor"],
    childIds: ["terry-taylor"],
    spouseId: "sandra-taylor",
  },
  {
    id: "sandra-taylor",
    firstName: "Sandra",
    lastName: "Taylor",
    birthYear: 1970,
    gender: "female",
    generation: 2,
    generationLabel: "The Trunk",
    relationship: "Mother",
    bio: "Sandra Taylor brought love, structure, and faith into the home. She raised her children with firm guidance and gentle encouragement, shaping them into the people they are today.",
    parentIds: ["robert-williams", "helen-williams"],
    childIds: ["terry-taylor"],
    spouseId: "michael-taylor",
  },

  // ── Generation 3: The Branches (Current Generation) ──

  {
    id: "terry-taylor",
    firstName: "Terry",
    lastName: "Taylor",
    birthYear: 1992,
    gender: "male",
    generation: 3,
    generationLabel: "The Branches",
    relationship: "Self",
    bio: "Terry Taylor is the head of his household and the founder of Governed Enterprises. Rooted in faith, discipline, and generational purpose, he is building a legacy that will outlast him.",
    email: "terry@thetaylorfam.net",
    role: "Head of Household",
    parentIds: ["michael-taylor", "sandra-taylor"],
    childIds: ["son1-taylor", "son2-taylor", "son3-taylor"],
    spouseId: "wife-taylor",
  },
  {
    id: "wife-taylor",
    firstName: "[Wife]",
    lastName: "Taylor",
    birthYear: 1994,
    gender: "female",
    generation: 3,
    generationLabel: "The Branches",
    relationship: "Wife",
    bio: "A cornerstone of the Taylor household. Her strength, patience, and love hold the family together and push everyone to be better.",
    email: "wife@thetaylorfam.net",
    parentIds: [],
    childIds: ["son1-taylor", "son2-taylor", "son3-taylor", "stepchild1-taylor", "stepchild2-taylor"],
    spouseId: "terry-taylor",
  },

  // ── Generation 4: The Growth (Children) ──

  {
    id: "son1-taylor",
    firstName: "[Son 1]",
    lastName: "Taylor",
    birthYear: 2018,
    gender: "male",
    generation: 4,
    generationLabel: "The Growth",
    relationship: "Eldest Son",
    bio: "The firstborn — growing up strong, curious, and full of energy. Already showing signs of leadership.",
    parentIds: ["terry-taylor", "wife-taylor"],
    childIds: [],
  },
  {
    id: "son2-taylor",
    firstName: "[Son 2]",
    lastName: "Taylor",
    birthYear: 2020,
    gender: "male",
    generation: 4,
    generationLabel: "The Growth",
    relationship: "Second Son",
    bio: "The second son — kind-hearted, observant, and wise beyond his years.",
    parentIds: ["terry-taylor", "wife-taylor"],
    childIds: [],
  },
  {
    id: "son3-taylor",
    firstName: "[Son 3]",
    lastName: "Taylor",
    birthYear: 2022,
    gender: "male",
    generation: 4,
    generationLabel: "The Growth",
    relationship: "Third Son",
    bio: "The youngest son — bold, joyful, and the spark that lights up the room.",
    parentIds: ["terry-taylor", "wife-taylor"],
    childIds: [],
  },
  {
    id: "stepchild1-taylor",
    firstName: "[Stepchild 1]",
    lastName: "Taylor",
    birthYear: 2015,
    gender: "female",
    generation: 4,
    generationLabel: "The Growth",
    relationship: "Stepdaughter",
    bio: "A bright and creative spirit. She brings balance and perspective to the household.",
    parentIds: ["wife-taylor"],
    childIds: [],
  },
  {
    id: "stepchild2-taylor",
    firstName: "[Stepchild 2]",
    lastName: "Taylor",
    birthYear: 2017,
    gender: "male",
    generation: 4,
    generationLabel: "The Growth",
    relationship: "Stepson",
    bio: "Resilient and determined. He is growing into a young man the family is proud of.",
    parentIds: ["wife-taylor"],
    childIds: [],
  },
];

// ============================================
// Family Record Events
// ============================================

export interface FamilyRecord {
  id: string;
  memberId?: string;
  type: "birth" | "marriage" | "milestone" | "memorial" | "reunion" | "other";
  date: string;
  title: string;
  description?: string;
  location?: string;
}

export const FAMILY_RECORDS: FamilyRecord[] = [
  {
    id: "record-1",
    type: "other",
    date: "2025",
    title: "Family Website Launched",
    description:
      "The Taylor Family digital home goes live — connecting us across generations.",
  },
];

// ============================================
// Helper Functions
// ============================================

export function getMember(id: string): FamilyMember | undefined {
  return FAMILY_MEMBERS.find((m) => m.id === id);
}

export function getGeneration(gen: number): FamilyMember[] {
  return FAMILY_MEMBERS.filter((m) => m.generation === gen);
}

export function getChildren(memberId: string): FamilyMember[] {
  return FAMILY_MEMBERS.filter((m) => m.parentIds.includes(memberId));
}

export function getSpouse(memberId: string): FamilyMember | undefined {
  const member = getMember(memberId);
  if (!member?.spouseId) return undefined;
  return getMember(member.spouseId);
}

export function getParents(memberId: string): FamilyMember[] {
  const member = getMember(memberId);
  if (!member) return [];
  return member.parentIds
    .map((id) => getMember(id))
    .filter((m): m is FamilyMember => m !== undefined);
}
