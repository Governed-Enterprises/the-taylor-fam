"use client";

import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FAMILY_RECORD,
  RECORD_CATEGORIES,
  type FamilyRecordEntry,
} from "@/lib/constants";
import FamilyCrest from "@/components/FamilyCrest";

type CategoryKey = keyof typeof RECORD_CATEGORIES;

interface FamilyRecordProps {
  sortOrder: "newest" | "oldest";
  activeCategories: CategoryKey[];
  onResetFilters: () => void;
}

// ── Year Marker ──────────────────────────────────────────────
function YearMarker({ year }: { year: string }) {
  return (
    <div className="relative flex items-center justify-center py-6">
      <span className="font-serif-display text-2xl font-bold text-tf-gold bg-tf-background px-4 relative z-10">
        {year}
      </span>
    </div>
  );
}

// ── Single Event Card ────────────────────────────────────────
function EventCard({
  entry,
  index,
  side,
}: {
  entry: FamilyRecordEntry;
  index: number;
  side: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const cat = RECORD_CATEGORIES[entry.category];

  const formatDate = (date: string) => {
    if (date.length === 4) return date;
    if (date.length === 7) {
      const [y, m] = date.split("-");
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return `${months[parseInt(m) - 1]} ${y}`;
    }
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-0 mb-8 ${
        side === "left"
          ? "md:flex-row-reverse md:text-right"
          : "md:flex-row md:text-left"
      }`}
    >
      {/* ── Mobile layout: dot + connector + card in a row ── */}
      {/* ── Desktop layout: card — connector — dot — connector — (empty) ── */}

      {/* Card side */}
      <motion.div
        initial={{
          opacity: 0,
          x: side === "left" ? 30 : -30,
        }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: side === "left" ? 30 : -30 }
        }
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="ml-10 md:ml-0 md:w-[calc(50%-28px)] max-w-[400px]"
      >
        <div
          className="bg-tf-card border border-tf-borderLight rounded-xl p-5"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
        >
          {/* Top row: category tag + date */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span
              className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                color: cat.color,
                backgroundColor: `${cat.color}18`,
              }}
            >
              {cat.icon} {cat.label}
            </span>
            <span className="text-xs text-tf-textMuted whitespace-nowrap">
              {formatDate(entry.date)}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif-display text-lg font-semibold text-tf-textPrimary mt-2">
            {entry.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-tf-textSecondary mt-2 leading-relaxed">
            {entry.description}
          </p>

          {/* Photo placeholder (if present) */}
          {entry.photo && (
            <div className="mt-3 rounded-lg overflow-hidden bg-tf-backgroundAlt h-[200px] flex items-center justify-center">
              <span className="text-tf-textMuted text-sm">Photo</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* ── Center dot + connector (desktop only) ── */}
      {/* On desktop the dot sits on the center line. On mobile it's absolutely positioned. */}

      {/* Desktop spacer for the other side */}
      <div className="hidden md:block md:w-[calc(50%-28px)]" />
    </div>
  );
}

// ── Main Timeline ────────────────────────────────────────────
export default function FamilyRecord({
  sortOrder,
  activeCategories,
  onResetFilters,
}: FamilyRecordProps) {
  // Filter & sort
  const entries = useMemo(() => {
    let filtered = [...FAMILY_RECORD];

    if (activeCategories.length > 0) {
      filtered = filtered.filter((e) =>
        activeCategories.includes(e.category as CategoryKey)
      );
    }

    filtered.sort((a, b) => {
      const yearA = parseInt(a.date.slice(0, 4));
      const yearB = parseInt(b.date.slice(0, 4));
      return sortOrder === "newest" ? yearB - yearA : yearA - yearB;
    });

    return filtered;
  }, [sortOrder, activeCategories]);

  // Build items with year markers injected
  const timelineItems = useMemo(() => {
    const items: { type: "year" | "event"; year?: string; entry?: FamilyRecordEntry; index: number }[] = [];
    let lastYear = "";
    let eventIndex = 0;

    for (const entry of entries) {
      const entryYear = entry.date.slice(0, 4);
      if (entryYear !== lastYear) {
        items.push({ type: "year", year: entryYear, index: 0 });
        lastYear = entryYear;
      }
      items.push({ type: "event", entry, index: eventIndex });
      eventIndex++;
    }

    return items;
  }, [entries]);

  // Determine side for alternating layout
  let eventCounter = 0;

  // Empty: entire record is empty (safety fallback)
  if (FAMILY_RECORD.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="opacity-15 mx-auto w-fit">
          <FamilyCrest size={100} animated={false} />
        </div>
        <p className="text-tf-textMuted text-base mt-6 max-w-[400px] mx-auto">
          The Family Record is just beginning. Milestones will be added as the
          family grows.
        </p>
      </div>
    );
  }

  // Empty: filters active but no matches
  if (entries.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-tf-textMuted text-base">
          No events match your current filters.
        </p>
        <button
          onClick={onResetFilters}
          className="mt-4 px-5 py-2 rounded-full text-sm font-medium bg-tf-gold text-tf-textPrimary hover:bg-tf-goldDark transition-colors duration-200"
        >
          Show All
        </button>
      </div>
    );
  }

  return (
    <div className="relative max-w-[900px] mx-auto">
      {/* ── The vertical center line ── */}
      {/* Mobile: left-aligned (20px from left). Desktop: centered. */}
      <div
        className="absolute top-0 bottom-0 left-[19px] md:left-1/2 md:-translate-x-[1px] w-[2px] bg-tf-border"
        aria-hidden="true"
      />

      {/* ── Timeline items ── */}
      {timelineItems.map((item, i) => {
        if (item.type === "year") {
          return (
            <div key={`year-${item.year}-${i}`} className="relative">
              {/* Mobile: offset from left line. Desktop: centered. */}
              <div className="ml-10 md:ml-0">
                <YearMarker year={item.year!} />
              </div>
            </div>
          );
        }

        const entry = item.entry!;
        const side: "left" | "right" = eventCounter % 2 === 0 ? "right" : "left";
        const currentIndex = eventCounter;
        eventCounter++;

        return (
          <div key={entry.id} className="relative">
            {/* ── Dot on the timeline ── */}
            {/* Mobile: at 20px from left. Desktop: centered. */}
            <div
              className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-[28px] z-10"
              aria-hidden="true"
            >
              <div
                className="w-4 h-4 rounded-full border-[3px] border-tf-background"
                style={{ backgroundColor: RECORD_CATEGORIES[entry.category].color }}
              />
            </div>

            {/* ── Horizontal connector line ── */}
            {/* Mobile: from dot (28px) to card (40px) */}
            <div
              className="absolute left-[27px] top-[34px] w-[13px] h-[2px] md:hidden"
              style={{ backgroundColor: RECORD_CATEGORIES[entry.category].color, opacity: 0.4 }}
              aria-hidden="true"
            />

            {/* Desktop: connector from dot to card side */}
            <div
              className={`hidden md:block absolute top-[34px] h-[2px] ${
                side === "right"
                  ? "left-[calc(50%+8px)] w-[20px]"
                  : "right-[calc(50%+8px)] w-[20px]"
              }`}
              style={{ backgroundColor: RECORD_CATEGORIES[entry.category].color, opacity: 0.4 }}
              aria-hidden="true"
            />

            <EventCard entry={entry} index={currentIndex} side={side} />
          </div>
        );
      })}
    </div>
  );
}
