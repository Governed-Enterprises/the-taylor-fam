import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Family Record — Taylor Family Milestones",
  description:
    "A living chronicle of the Taylor family — milestones, moments, and the events that shaped our legacy.",
  openGraph: {
    title: "The Family Record — Taylor Family Milestones",
    description:
      "Milestones, moments, and the events that shaped the Taylor family legacy.",
  },
  twitter: {
    card: "summary",
    title: "The Family Record — Taylor Family Milestones",
  },
};

export default function FamilyRecordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
