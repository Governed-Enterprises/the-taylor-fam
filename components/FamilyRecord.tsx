"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function FamilyRecord() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16"
    >
      <div className="w-20 h-20 rounded-full bg-cream-200 flex items-center justify-center mx-auto mb-6">
        <FileText size={36} className="text-burgundy-400" />
      </div>
      <h2 className="font-serif-display text-2xl font-bold text-burgundy-700 mb-3">
        Family Record
      </h2>
      <p className="text-warmGray-500 max-w-md mx-auto">
        The family record will document milestones, events, and important dates
        for the Taylor family.
      </p>
      <div className="mt-8 inline-block px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-medium">
        Coming in Phase 2
      </div>
    </motion.div>
  );
}
