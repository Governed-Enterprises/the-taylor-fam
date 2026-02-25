"use client";

import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

export default function FamilyTree() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16"
    >
      <div className="w-20 h-20 rounded-full bg-tf-backgroundAlt flex items-center justify-center mx-auto mb-6">
        <GitBranch size={36} className="text-tf-gold" />
      </div>
      <h2 className="font-serif-display text-2xl font-bold text-tf-textPrimary mb-3">
        Family Tree
      </h2>
      <p className="text-tf-textMuted max-w-md mx-auto">
        Our interactive family tree is coming soon. This will be a visual map of
        the Taylor family across generations.
      </p>
      <div className="mt-8 inline-block px-4 py-2 rounded-full bg-tf-goldLight/40 text-tf-goldDark text-sm font-medium">
        Coming in Phase 2
      </div>
    </motion.div>
  );
}
