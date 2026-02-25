"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FAMILY_VALUES } from "@/lib/constants";

function ValueStatement({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="mb-12 flex flex-col items-center text-center"
    >
      {/* Small vertical gold accent line */}
      <div className="w-[3px] h-4 bg-tf-gold mb-4" />
      <p className="font-serif-display text-lg sm:text-xl text-tf-textPrimary italic max-w-lg">
        {text}
      </p>
    </motion.div>
  );
}

export default function FamilyValues() {
  return (
    <section className="pb-16">
      {/* Gold divider */}
      <div className="mx-auto mt-16" style={{ width: "60%", maxWidth: "480px" }}>
        <div className="h-px bg-tf-gold/30" />
      </div>

      {/* Heading */}
      <h2 className="font-serif-display text-2xl text-tf-textPrimary text-center mt-16">
        Our Principles
      </h2>

      {/* Values */}
      <div className="mt-12">
        {FAMILY_VALUES.map((value, index) => (
          <ValueStatement key={index} text={value} index={index} />
        ))}
      </div>
    </section>
  );
}
