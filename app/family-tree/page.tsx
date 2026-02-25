import type { Metadata } from "next";
import FamilyTree from "@/components/FamilyTree";

export const metadata: Metadata = {
  title: "Family Tree",
  description:
    "Explore the Taylor family tree — our connections across generations.",
};

export default function FamilyTreePage() {
  return (
    <div className="page-container pb-24">
      <section className="pt-20 px-6 text-center">
        <h1 className="font-serif-display text-4xl font-bold text-tf-textPrimary">
          Family Tree
        </h1>
        <p className="text-lg text-tf-textSecondary max-w-[500px] mx-auto mt-4">
          A visual map of the Taylor family across generations.
        </p>
      </section>

      <section className="section-container mt-8">
        <FamilyTree />
      </section>
    </div>
  );
}
