"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FAMILY_HISTORY } from "@/lib/constants";

const sections = [
  { label: "THE ROOTS", key: "roots" as const },
  { label: "THE PRESENT", key: "present" as const },
  { label: "THE FUTURE", key: "future" as const },
];

function HistorySection({
  label,
  text,
  isLast,
}: {
  label: string;
  text: string;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs text-tf-gold uppercase tracking-widest mb-4">
          {label}
        </p>
        <p
          className="text-base text-tf-textPrimary"
          style={{ lineHeight: 1.8, textIndent: "2em" }}
        >
          {text}
        </p>
      </motion.div>

      {/* Three-dot divider between subsections */}
      {!isLast && (
        <div className="flex items-center justify-center gap-2 mb-16">
          <span className="w-1.5 h-1.5 rounded-full bg-tf-gold/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-tf-gold" />
          <span className="w-1.5 h-1.5 rounded-full bg-tf-gold/50" />
        </div>
      )}
    </>
  );
}

export default function FamilyHistory() {
  return (
    <div className="max-w-[680px] mx-auto mt-16">
      {sections.map((section, index) => (
        <HistorySection
          key={section.key}
          label={section.label}
          text={FAMILY_HISTORY[section.key]}
          isLast={index === sections.length - 1}
        />
      ))}
    </div>
  );
}
