"use client";

import { useState } from "react";
import { Edit3 } from "lucide-react";
import FamilyRecord from "@/components/FamilyRecord";
import { RECORD_CATEGORIES } from "@/lib/constants";
import { CrossPageLinks } from "@/components/CrossPageNav";

type CategoryKey = keyof typeof RECORD_CATEGORIES;
const allCategories = Object.keys(RECORD_CATEGORIES) as CategoryKey[];

export default function FamilyRecordPage() {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [activeCategories, setActiveCategories] = useState<CategoryKey[]>([]);

  const toggleCategory = (cat: CategoryKey) => {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const resetCategories = () => setActiveCategories([]);

  return (
    <div className="page-container pb-24">
      {/* Page Header */}
      <section className="pt-20 px-6 text-center">
        <h1 className="font-serif-display text-4xl font-bold text-tf-textPrimary">
          The Family Record
        </h1>
        <p className="text-base text-tf-textSecondary max-w-[540px] mx-auto mt-3">
          A living chronicle of the Taylor family — our milestones, our moments,
          our legacy.
        </p>
      </section>

      {/* Controls Bar */}
      <div className="mt-8 px-6 max-w-[700px] mx-auto">
        {/* Sort toggle */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setSortOrder("newest")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
              sortOrder === "newest"
                ? "bg-tf-gold text-tf-textPrimary"
                : "border border-tf-border text-tf-textMuted hover:border-tf-gold hover:text-tf-textPrimary"
            }`}
          >
            Newest First
          </button>
          <button
            onClick={() => setSortOrder("oldest")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
              sortOrder === "oldest"
                ? "bg-tf-gold text-tf-textPrimary"
                : "border border-tf-border text-tf-textMuted hover:border-tf-gold hover:text-tf-textPrimary"
            }`}
          >
            Oldest First
          </button>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <button
            onClick={resetCategories}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
              activeCategories.length === 0
                ? "bg-tf-gold text-tf-textPrimary"
                : "border border-tf-border text-tf-textMuted hover:border-tf-gold hover:text-tf-textPrimary"
            }`}
          >
            All
          </button>
          {allCategories.map((cat) => {
            const config = RECORD_CATEGORIES[cat];
            const isActive = activeCategories.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-tf-gold text-tf-textPrimary"
                    : "border border-tf-border text-tf-textMuted hover:border-tf-gold hover:text-tf-textPrimary"
                }`}
              >
                {config.icon} {config.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Admin note */}
      <div className="mt-4 px-6 max-w-[700px] mx-auto">
        <div className="bg-tf-backgroundAlt rounded-lg px-4 py-3 flex items-center justify-center gap-2 text-center">
          <Edit3 size={14} className="text-tf-textMuted shrink-0" />
          <p className="text-xs text-tf-textMuted">
            Family events are recorded by the Family Administrator. To add a
            milestone, contact{" "}
            <a
              href="mailto:terry@thetaylorfam.net"
              className="text-tf-gold hover:underline"
            >
              terry@thetaylorfam.net
            </a>
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="mt-12 px-4 sm:px-6">
        <FamilyRecord
          sortOrder={sortOrder}
          activeCategories={activeCategories}
          onResetFilters={resetCategories}
        />
      </section>

      {/* Cross-page navigation */}
      <CrossPageLinks
        links={[
          { text: "Explore the Family Tree", href: "/family-tree" },
          { text: "Read Our Legacy", href: "/legacy" },
        ]}
      />
    </div>
  );
}
