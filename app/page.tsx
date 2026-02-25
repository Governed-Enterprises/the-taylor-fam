"use client";

import { motion } from "framer-motion";
import FamilyCrest from "@/components/FamilyCrest";
import FamilyDirectory from "@/components/FamilyDirectory";
import { SITE_CONTENT } from "@/lib/constants";

export default function Home() {
  return (
    <div className="page-container pb-24">
      {/* Section A — Hero */}
      <section className="flex flex-col items-center text-center pt-16 sm:pt-24 px-6">
        {/* Crest */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <FamilyCrest size={120} className="mx-auto" />
        </motion.div>

        {/* Family Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-serif-display text-3xl sm:text-4xl font-bold text-tf-textPrimary uppercase mt-6"
          style={{ letterSpacing: "0.08em" }}
        >
          {SITE_CONTENT.familyName}
        </motion.h1>

        {/* Motto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="font-script text-lg text-tf-gold mt-3"
        >
          {SITE_CONTENT.motto}
        </motion.p>
      </section>

      {/* Section B — The Statement */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-16 px-8 max-w-[600px] mx-auto text-center"
      >
        <p className="text-lg text-tf-textSecondary leading-relaxed">
          {SITE_CONTENT.homeStatement}
        </p>
      </motion.section>

      {/* Section C — Family Directory */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-20 px-6"
      >
        {/* Gold divider */}
        <div className="mx-auto" style={{ width: "60%", maxWidth: "480px" }}>
          <div className="h-px bg-tf-gold/30" />
        </div>

        {/* Heading */}
        <h2 className="font-serif-display text-xl text-tf-textPrimary text-center mt-8">
          Family Directory
        </h2>

        {/* Directory list */}
        <div className="mt-6">
          <FamilyDirectory />
        </div>
      </motion.section>
    </div>
  );
}
