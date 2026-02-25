import type { Metadata } from "next";
import FamilyRecord from "@/components/FamilyRecord";

export const metadata: Metadata = {
  title: "Family Record",
  description:
    "The Taylor family record — milestones, events, and important dates.",
};

export default function FamilyRecordPage() {
  return (
    <div className="page-container">
      <section className="bg-warm-gradient py-16 sm:py-20">
        <div className="section-container text-center">
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-tf-textPrimary mb-4">
            Family Record
          </h1>
          <p className="text-tf-textMuted text-lg max-w-2xl mx-auto">
            Documenting our family milestones, events, and cherished moments.
          </p>
          <div className="w-24 h-0.5 bg-tf-gold mx-auto mt-6" />
        </div>
      </section>

      <section className="section-container py-16">
        <FamilyRecord />
      </section>
    </div>
  );
}
