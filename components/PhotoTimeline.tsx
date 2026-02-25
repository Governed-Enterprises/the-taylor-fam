"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { PHOTO_TIMELINE } from "@/lib/constants";

export default function PhotoTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Camera size={28} className="text-tf-gold" />
            <h2 className="section-heading !mb-0">Through the Years</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-tf-backgroundAlt hover:bg-tf-borderLight text-tf-textSecondary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-tf-backgroundAlt hover:bg-tf-borderLight text-tf-textSecondary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "thin" }}
        >
          {PHOTO_TIMELINE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-72 snap-center"
            >
              <div className="rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 bg-tf-card border border-tf-borderLight">
                {/* Photo placeholder */}
                <div className="relative w-full h-48 bg-gradient-to-br from-tf-backgroundAlt to-tf-borderLight">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera
                        size={32}
                        className="mx-auto text-tf-textMuted mb-2"
                      />
                      <p className="text-xs text-tf-textMuted">
                        Add family photo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-serif-display text-lg font-semibold text-tf-goldDark">
                    {item.year}
                  </p>
                  <p className="text-sm text-tf-textMuted mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
