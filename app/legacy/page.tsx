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
    <div className="page-container">
      {/* Page Header */}
      <section className="bg-warm-gradient py-16 sm:py-20">
        <div className="section-container text-center">
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-700 mb-4">
            Our Legacy
          </h1>
          <p className="text-warmGray-500 text-lg max-w-2xl mx-auto">
            Every family has a story worth telling. This is ours — a tapestry of
            faith, love, and perseverance woven across generations.
          </p>
          <div className="w-24 h-0.5 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Family History Narrative */}
      <section className="section-container">
        <FamilyHistory />
      </section>

      {/* Family Values */}
      <section className="bg-cream-100 py-4">
        <div className="section-container">
          <FamilyValues />
        </div>
      </section>

      {/* Photo Timeline */}
      <section className="section-container pb-16">
        <PhotoTimeline />
      </section>
    </div>
  );
}
