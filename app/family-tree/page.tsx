import type { Metadata } from "next";
import FamilyTree from "@/components/FamilyTree";

export const metadata: Metadata = {
  title: "Family Tree",
  description:
    "Explore the Taylor family tree — our connections across generations.",
};

export default function FamilyTreePage() {
  return (
    <div className="page-container">
      <section className="bg-warm-gradient py-16 sm:py-20">
        <div className="section-container text-center">
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-tf-textPrimary mb-4">
            Family Tree
          </h1>
          <p className="text-tf-textMuted text-lg max-w-2xl mx-auto">
            A visual map of the Taylor family across generations.
          </p>
          <div className="w-24 h-0.5 bg-tf-gold mx-auto mt-6" />
        </div>
      </section>

      <section className="section-container py-16">
        <FamilyTree />
      </section>
    </div>
  );
}
