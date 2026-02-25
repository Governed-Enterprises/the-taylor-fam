import type { Metadata } from "next";
import FamilyHistory from "@/components/FamilyHistory";
import FamilyValues from "@/components/FamilyValues";
import PhotoTimeline from "@/components/PhotoTimeline";
import { CrossPageLinks } from "@/components/CrossPageNav";

export const metadata: Metadata = {
  title: "Our Legacy — The Taylor Family Story",
  description:
    "The history, values, and story of the Taylor family — a legacy written in love.",
  openGraph: {
    title: "Our Legacy — The Taylor Family Story",
    description:
      "The history, values, and story of the Taylor family — a legacy written in love.",
  },
  twitter: {
    card: "summary",
    title: "Our Legacy — The Taylor Family Story",
  },
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
      <section className="px-6">
        <FamilyValues />
      </section>

      {/* Photo Timeline */}
      <section className="section-container">
        <PhotoTimeline />
      </section>

      {/* Cross-page navigation */}
      <CrossPageLinks
        links={[
          { text: "Explore Our Lineage", href: "/family-tree" },
          { text: "See the Family Record", href: "/family-record" },
        ]}
      />
    </div>
  );
}
