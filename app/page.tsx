"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, MapPin, QrCode } from "lucide-react";
import Link from "next/link";
import FamilyCrest from "@/components/FamilyCrest";
import FamilyDirectory from "@/components/FamilyDirectory";
import { SITE_CONTENT } from "@/lib/constants";

export default function Home() {
  return (
    <div className="page-container">
      {/* Hero Section — Family Card */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-warm-gradient" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-tf-goldLight/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-tf-sageMuted/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative section-container py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            {/* Family Crest */}
            <FamilyCrest size={140} className="mx-auto mb-8" />

            {/* Family Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif-display text-5xl sm:text-6xl lg:text-7xl font-bold text-tf-textPrimary mb-4"
            >
              {SITE_CONTENT.familyName}
            </motion.h1>

            {/* Motto */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl sm:text-2xl text-tf-textSecondary font-script mb-3"
            >
              {SITE_CONTENT.motto}
            </motion.p>

            {/* Established */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm text-tf-textMuted tracking-widest uppercase mb-8"
            >
              {SITE_CONTENT.established}
            </motion.p>

            {/* Decorative divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="w-24 h-0.5 bg-tf-gold mx-auto mb-8"
            />

            {/* Home Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-tf-textSecondary text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              {SITE_CONTENT.homeStatement}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/legacy"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-tf-textPrimary hover:bg-tf-textSecondary text-white rounded-lg font-medium transition-colors"
              >
                Our Legacy
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/qr"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-tf-gold text-tf-goldDark hover:bg-tf-goldLight/20 rounded-lg font-medium transition-colors"
              >
                Share with Family
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-tf-card card-shadow border border-tf-borderLight text-center"
          >
            <Heart size={28} className="mx-auto text-tf-gold mb-3" />
            <h3 className="font-serif-display text-lg font-semibold text-tf-textPrimary mb-2">
              Our Story
            </h3>
            <p className="text-sm text-tf-textMuted mb-4">
              Discover the history and values that define the Taylor family.
            </p>
            <Link
              href="/legacy"
              className="text-sm text-tf-goldDark hover:text-tf-gold font-medium"
            >
              Read more &rarr;
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="p-6 rounded-xl bg-tf-card card-shadow border border-tf-borderLight text-center"
          >
            <MapPin size={28} className="mx-auto text-tf-sage mb-3" />
            <h3 className="font-serif-display text-lg font-semibold text-tf-textPrimary mb-2">
              Family Tree
            </h3>
            <p className="text-sm text-tf-textMuted mb-4">
              Explore our family connections across generations.
            </p>
            <Link
              href="/family-tree"
              className="text-sm text-tf-goldDark hover:text-tf-gold font-medium"
            >
              Coming soon &rarr;
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-tf-card card-shadow border border-tf-borderLight text-center"
          >
            <QrCode size={28} className="mx-auto text-tf-sage mb-3" />
            <h3 className="font-serif-display text-lg font-semibold text-tf-textPrimary mb-2">
              Stay Connected
            </h3>
            <p className="text-sm text-tf-textMuted mb-4">
              Share our site and keep the family in the loop.
            </p>
            <Link
              href="/qr"
              className="text-sm text-tf-goldDark hover:text-tf-gold font-medium"
            >
              Get QR code &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Family Directory */}
      <section className="section-container pb-16">
        <div className="max-w-2xl mx-auto bg-tf-card rounded-xl card-shadow border border-tf-borderLight p-6">
          <FamilyDirectory />
        </div>
      </section>
    </div>
  );
}
