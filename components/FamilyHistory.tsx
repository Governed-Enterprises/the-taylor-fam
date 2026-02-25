"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { FAMILY_HISTORY } from "@/lib/constants";

const sections = [
  { label: "Our Roots", key: "roots" as const },
  { label: "The Present", key: "present" as const },
  { label: "The Future", key: "future" as const },
];

export default function FamilyHistory() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <BookOpen size={28} className="text-tf-gold" />
          <div>
            <h2 className="section-heading !mb-0">Our Story</h2>
            <p className="font-script text-lg text-tf-textMuted">
              A Legacy Written in Love
            </p>
          </div>
        </div>

        <div className="relative pl-6 border-l-2 border-tf-goldLight space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-tf-gold border-2 border-tf-background" style={{ marginTop: "4px" }} />
              <h3 className="font-serif-display text-xl font-semibold text-tf-textPrimary mb-3">
                {section.label}
              </h3>
              <p className="text-tf-textSecondary leading-relaxed text-base sm:text-lg">
                {FAMILY_HISTORY[section.key]}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
