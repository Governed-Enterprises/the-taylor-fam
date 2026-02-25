"use client";

import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";
import { FAMILY_DIRECTORY } from "@/lib/constants";

export default function FamilyDirectory() {
  return (
    <section className="py-8">
      <h3 className="font-serif-display text-lg font-semibold text-burgundy-700 mb-4 flex items-center gap-2">
        <Users size={20} className="text-gold-600" />
        Family Directory
      </h3>
      <div className="space-y-3">
        {FAMILY_DIRECTORY.map((member, index) => (
          <motion.div
            key={member.email}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg bg-cream-100 hover:bg-cream-200 transition-colors"
          >
            <div>
              <p className="font-medium text-warmGray-800">{member.name}</p>
              <p className="text-sm text-warmGray-500">{member.role}</p>
            </div>
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-1 text-sm text-burgundy-500 hover:text-burgundy-600 transition-colors"
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
