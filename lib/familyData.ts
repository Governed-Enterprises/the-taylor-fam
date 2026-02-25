// ============================================
// The Taylor Fam — Family Tree Data Structure
// ============================================

export interface FamilyMember {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  role?: string;
  parentId?: string | null;
  spouseId?: string | null;
  generation: number;
  bio?: string;
  imageUrl?: string;
}

export interface FamilyRecord {
  id: string;
  memberId: string;
  type: "birth" | "marriage" | "milestone" | "memorial" | "reunion" | "other";
  date: string;
  title: string;
  description?: string;
  location?: string;
}

// Placeholder data — to be populated by the family
export const familyMembers: FamilyMember[] = [
  {
    id: "root",
    firstName: "Taylor",
    lastName: "Family",
    role: "Family Root",
    generation: 0,
    bio: "The foundation of our family tree.",
  },
];

export const familyRecords: FamilyRecord[] = [
  {
    id: "record-1",
    memberId: "root",
    type: "other",
    date: "",
    title: "Family Website Launched",
    description:
      "The Taylor Family digital home goes live — connecting us across generations.",
  },
];

// Helper to get children of a family member
export function getChildren(parentId: string): FamilyMember[] {
  return familyMembers.filter((m) => m.parentId === parentId);
}

// Helper to get a member by ID
export function getMember(id: string): FamilyMember | undefined {
  return familyMembers.find((m) => m.id === id);
}

// Helper to get all members of a generation
export function getGeneration(gen: number): FamilyMember[] {
  return familyMembers.filter((m) => m.generation === gen);
}
