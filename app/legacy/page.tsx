import type { Metadata } from "next";
import FamilyHistory from "@/components/FamilyHistory";
import FamilyValues from "@/components/FamilyValues";
import PhotoTimeline from "@/components/PhotoTimeline";

export const metadata: Metadata = {
  title: "Our Legacy",
  description:
    "The history, values, and story of the Taylor family — a legacy written in love.",
};

export default function LegacyPage() {
  return (
    <div className="page-container pb-16">
      {/* Page Header */}
      <section className="pt-20 px-6 text-center">
        <h1 className="font-serif-display text-4xl font-bold text-tf-textPrimary">
          Our Legacy
        </h1>
        <p className="text-lg text-tf-textSecondary max-w-[500px] mx-auto mt-4">
          The story of the Taylor family — where we come from, what we stand
          for, and where we are going.
        </p>
      </section>

      {/* Section A — Family History */}
      <section className="px-6">
        <FamilyHistory />
      </section>

      {/* Family Values */}
      <section className="bg-tf-backgroundAlt py-4">
        <div className="section-container">
          <FamilyValues />
        </div>
      </section>

      {/* Photo Timeline */}
      <section className="section-container">
        <PhotoTimeline />
      </section>
    </div>
  );
}
