"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { FAMILY_HISTORY } from "@/lib/constants";

export default function FamilyHistory() {
  const paragraphs = FAMILY_HISTORY.narrative
    .split("\n\n")
    .filter((p) => p.trim());

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={28} className="text-gold-600" />
          <div>
            <h2 className="section-heading !mb-0">{FAMILY_HISTORY.title}</h2>
            <p className="text-warmGray-500 italic">
              {FAMILY_HISTORY.subtitle}
            </p>
          </div>
        </div>

        <div className="relative pl-6 border-l-2 border-gold-300 space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-warmGray-700 leading-relaxed text-base sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
