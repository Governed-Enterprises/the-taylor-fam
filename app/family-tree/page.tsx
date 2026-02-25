"use client";

import { useState } from "react";
import { GitBranch, List } from "lucide-react";
import FamilyTree from "@/components/FamilyTree";
import { GENERATION_LABELS } from "@/lib/familyData";
import { CrossPageLinks } from "@/components/CrossPageNav";

const generations = Object.values(GENERATION_LABELS).filter((g) => g.number <= 4);

export default function FamilyTreePage() {
  const [activeGen, setActiveGen] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"tree" | "list">("list");

  const scrollToGeneration = (gen: number) => {
    setActiveGen(gen);
    const el = document.getElementById(`generation-${gen}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="page-container pb-24">
      {/* Page Header */}
      <section className="pt-20 px-6 text-center">
        <h1 className="font-serif-display text-4xl font-bold text-tf-textPrimary">
          The Taylor Lineage
        </h1>
        <p className="text-base text-tf-textSecondary max-w-[500px] mx-auto mt-3">
          From the roots to the branches — our family, connected across
          generations.
        </p>
      </section>

      {/* Controls bar */}
      <div className="mt-8 px-6">
        {/* Generation jump buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {generations.map((gen) => (
            <button
              key={gen.number}
              onClick={() => scrollToGeneration(gen.number)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 ${
                activeGen === gen.number
                  ? "bg-tf-gold text-tf-textPrimary"
                  : "border border-tf-border text-tf-textSecondary hover:border-tf-gold hover:text-tf-textPrimary"
              }`}
            >
              {gen.label}
            </button>
          ))}
        </div>

        {/* View mode toggle — mobile/tablet only */}
        <div className="flex justify-center gap-1 mt-4 lg:hidden">
          <button
            onClick={() => setViewMode("tree")}
            className={`p-2 rounded-md transition-colors duration-200 ${
              viewMode === "tree"
                ? "bg-tf-gold text-tf-textPrimary"
                : "text-tf-textMuted hover:text-tf-textPrimary"
            }`}
            aria-label="Tree view"
          >
            <GitBranch size={18} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md transition-colors duration-200 ${
              viewMode === "list"
                ? "bg-tf-gold text-tf-textPrimary"
                : "text-tf-textMuted hover:text-tf-textPrimary"
            }`}
            aria-label="List view"
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Family Tree */}
      <section className="mt-12 px-4 sm:px-6">
        <FamilyTree viewMode={viewMode} />
      </section>

      {/* Cross-page navigation */}
      <CrossPageLinks
        links={[
          { text: "Read Our Story", href: "/legacy" },
          { text: "View the Family Record", href: "/family-record" },
        ]}
      />
    </div>
  );
}
