"use client";

import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";
import { FAMILY_DIRECTORY } from "@/lib/constants";

export default function FamilyDirectory() {
  return (
    <section className="py-8">
      <h3 className="font-serif-display text-lg font-semibold text-tf-textPrimary mb-4 flex items-center gap-2">
        <Users size={20} className="text-tf-gold" />
        Family Directory
      </h3>
      <div className="space-y-3">
        {FAMILY_DIRECTORY.map((member, index) => (
          <motion.div
            key={member.email}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg bg-tf-backgroundAlt hover:bg-tf-borderLight transition-colors"
          >
            <div>
              <p className="font-medium text-tf-textPrimary">{member.name}</p>
              {member.role && (
                <p className="text-sm text-tf-textMuted">{member.role}</p>
              )}
            </div>
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-1 text-sm text-tf-goldDark hover:text-tf-gold transition-colors"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">{member.email}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
