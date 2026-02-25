import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Taylor Lineage — Family Tree",
  description:
    "Explore the Taylor family tree — our lineage across generations, from the roots to the growth.",
  openGraph: {
    title: "The Taylor Lineage — Family Tree",
    description:
      "Explore the Taylor family tree across four generations.",
  },
  twitter: {
    card: "summary",
    title: "The Taylor Lineage — Family Tree",
  },
};

export default function FamilyTreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
