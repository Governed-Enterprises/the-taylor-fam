"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FamilyCrest from "@/components/FamilyCrest";
import { PHOTO_TIMELINE } from "@/lib/constants";

const CARD_WIDTH = 280;
const CARD_WIDTH_MOBILE = 240;
const GAP = 24;

export default function PhotoTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = CARD_WIDTH + GAP;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="pb-24">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-serif-display text-2xl text-tf-textPrimary">
          Through the Years
        </h2>
        <p className="text-sm text-tf-textMuted mt-2">
          Moments that shaped the Taylor family
        </p>
      </div>

      {/* Timeline container with arrows */}
      <div className="relative mt-12">
        {/* Desktop left arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-[160px] z-10 w-10 h-10 items-center justify-center rounded-full bg-white text-tf-textSecondary hover:text-tf-textPrimary transition-colors"
            style={{ boxShadow: "0 2px 8px rgba(61,43,31,0.12)" }}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Desktop right arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-[160px] z-10 w-10 h-10 items-center justify-center rounded-full bg-white text-tf-textSecondary hover:text-tf-textPrimary transition-colors"
            style={{ boxShadow: "0 2px 8px rgba(61,43,31,0.12)" }}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-8 scroll-snap-x-mandatory hide-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {PHOTO_TIMELINE.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center flex flex-col items-center"
              style={{
                minWidth: `${CARD_WIDTH_MOBILE}px`,
                width: `${CARD_WIDTH}px`,
              }}
            >
              {/* Photo card */}
              <div
                className="w-full rounded-lg overflow-hidden bg-tf-backgroundAlt"
                style={{ height: 320 }}
              >
                {/* Placeholder — crest at low opacity + text */}
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="opacity-15">
                    <FamilyCrest size={64} animated={false} />
                  </div>
                  <p className="text-sm text-tf-textMuted mt-3">
                    Photo Coming Soon
                  </p>
                </div>
              </div>

              {/* Gold dot connecting to timeline line */}
              <div className="w-3 h-3 rounded-full bg-tf-gold mt-4" />

              {/* Year + Caption */}
              <div className="text-center mt-3">
                <p className="font-serif-display text-lg text-tf-gold font-semibold">
                  {item.year}
                </p>
                <p className="text-sm text-tf-textSecondary mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Thin gold horizontal timeline line behind the dots */}
        <div
          className="absolute left-8 right-8 h-px bg-tf-gold/30"
          style={{ top: `${320 + 22}px` }}
        />
      </div>
    </section>
  );
}
