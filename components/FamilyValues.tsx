"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { FAMILY_VALUES } from "@/lib/constants";

export default function FamilyValues() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading text-center">Our Values</h2>
        <p className="section-subheading text-center">
          The principles that guide our family
        </p>

        <div className="max-w-2xl mx-auto space-y-4">
          {FAMILY_VALUES.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-tf-card card-shadow hover:card-shadow-hover transition-all duration-300 border border-tf-borderLight"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tf-goldLight/40 flex items-center justify-center mt-0.5">
                <Shield size={18} className="text-tf-goldDark" />
              </div>
              <p className="font-script text-lg text-tf-textSecondary leading-relaxed">
                &ldquo;{value}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
