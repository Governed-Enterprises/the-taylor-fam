"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Crown,
  Sparkles,
  Shield,
  TrendingUp,
} from "lucide-react";
import { FAMILY_VALUES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Users,
  Crown,
  Sparkles,
  Shield,
  TrendingUp,
};

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FAMILY_VALUES.map((value, index) => {
            const Icon = iconMap[value.icon] || Heart;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-6 rounded-xl bg-white card-shadow hover:card-shadow-hover transition-all duration-300 border border-cream-300"
              >
                <div className="w-12 h-12 rounded-full bg-burgundy-50 flex items-center justify-center mb-4 group-hover:bg-burgundy-100 transition-colors">
                  <Icon size={24} className="text-burgundy-500" />
                </div>
                <h3 className="font-serif-display text-xl font-semibold text-burgundy-700 mb-2">
                  {value.title}
                </h3>
                <p className="text-warmGray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
