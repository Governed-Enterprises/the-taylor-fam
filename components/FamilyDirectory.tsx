"use client";

import { motion } from "framer-motion";
import { FAMILY_DIRECTORY } from "@/lib/constants";

export default function FamilyDirectory() {
  return (
    <div className="max-w-[480px] mx-auto">
      {FAMILY_DIRECTORY.map((member, index) => (
        <motion.div
          key={member.email}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
          className={`py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 ${
            index < FAMILY_DIRECTORY.length - 1
              ? "border-b border-tf-borderLight"
              : ""
          }`}
        >
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif-display text-base font-medium text-tf-textPrimary">
              {member.name}
            </span>
            {member.role && (
              <span className="hidden sm:inline text-sm text-tf-textMuted italic">
                ({member.role})
              </span>
            )}
            {member.role && (
              <span className="sm:hidden text-sm text-tf-textMuted italic block">
                {member.role}
              </span>
            )}
          </div>
          <a
            href={`mailto:${member.email}`}
            className="text-sm font-mono text-tf-gold hover:text-tf-goldDark hover:underline transition-colors duration-200"
          >
            {member.email}
          </a>
        </motion.div>
      ))}
    </div>
  );
}
