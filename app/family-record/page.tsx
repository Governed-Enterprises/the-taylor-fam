import type { Metadata } from "next";
import FamilyRecord from "@/components/FamilyRecord";

export const metadata: Metadata = {
  title: "Family Record",
  description:
    "The Taylor family record — milestones, events, and important dates.",
};

export default function FamilyRecordPage() {
  return (
    <div className="page-container pb-24">
      <section className="pt-20 px-6 text-center">
        <h1 className="font-serif-display text-4xl font-bold text-tf-textPrimary">
          Family Record
        </h1>
        <p className="text-lg text-tf-textSecondary max-w-[500px] mx-auto mt-4">
          Documenting our family milestones, events, and cherished moments.
        </p>
      </section>

      <section className="section-container mt-8">
        <FamilyRecord />
      </section>
    </div>
  );
}
