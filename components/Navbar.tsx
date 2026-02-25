"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FamilyCrest from "@/components/FamilyCrest";
import { NAV_LINKS, SITE_CONTENT } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-tf-background h-16 flex items-center px-6"
        style={{ boxShadow: "0 1px 3px rgba(61,43,31,0.08)" }}
      >
        {/* Left — Crest + Family Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <FamilyCrest size={32} animated={false} />
          <span className="hidden md:inline font-serif-display text-lg font-semibold text-tf-textPrimary group-hover:text-tf-goldDark transition-colors duration-200">
            {SITE_CONTENT.familyName}
          </span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-1.5 px-3 py-2 font-serif-display text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-tf-gold"
                    : "text-tf-textSecondary hover:text-tf-textPrimary"
                }`}
              >
                {"icon" in link && link.icon === "Lock" && (
                  <Lock size={13} />
                )}
                {link.label}
                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-tf-gold"
                    style={{ bottom: "-2px" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-md text-tf-textSecondary hover:text-tf-textPrimary transition-colors duration-200"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/30"
              onClick={() => setIsOpen(false)}
              aria-hidden
            />

            {/* Panel — slides in from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-72 bg-tf-background flex flex-col"
              style={{ boxShadow: "-4px 0 20px rgba(61,43,31,0.12)" }}
            >
              {/* Close button */}
              <div className="flex items-center justify-between h-16 px-6">
                <span className="font-serif-display text-lg font-semibold text-tf-textPrimary">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-tf-textSecondary hover:text-tf-textPrimary transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-6 pt-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 py-4 font-serif-display text-lg border-b border-tf-borderLight transition-colors duration-200 ${
                        isActive
                          ? "text-tf-gold"
                          : "text-tf-textSecondary hover:text-tf-textPrimary"
                      }`}
                    >
                      {"icon" in link && link.icon === "Lock" && (
                        <Lock size={16} />
                      )}
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
