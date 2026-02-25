"use client";

import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FamilyCrest from "@/components/FamilyCrest";

const COMING_SOON_FEATURES = [
  { icon: "\u2601\uFE0F", label: "Family Cloud" },
  { icon: "\uD83D\uDCC5", label: "Family Calendar" },
  { icon: "\uD83D\uDCAC", label: "Family Messages" },
  { icon: "\uD83D\uDD10", label: "Password Vault" },
  { icon: "\uD83D\uDEE1\uFE0F", label: "Family VPN" },
  { icon: "\uD83E\uDD16", label: "Family AI" },
];

export default function PortalLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAccessMsg, setShowAccessMsg] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <div className="max-w-[360px] mx-auto mt-12">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="portal-email" className="block text-sm text-tf-textMuted mb-1.5">
              Email
            </label>
            <input
              id="portal-email"
              type="email"
              placeholder="name@thetaylorfam.net"
              className="w-full px-4 py-3 text-base rounded-lg border border-tf-border bg-tf-background text-tf-textPrimary placeholder:text-tf-textMuted focus:outline-none focus:border-tf-gold focus:ring-1 focus:ring-tf-gold/40 transition-colors duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="portal-password" className="block text-sm text-tf-textMuted mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                id="portal-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-12 text-base rounded-lg border border-tf-border bg-tf-background text-tf-textPrimary placeholder:text-tf-textMuted focus:outline-none focus:border-tf-gold focus:ring-1 focus:ring-tf-gold/40 transition-colors duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-tf-textMuted hover:text-tf-textSecondary transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="w-full py-3 bg-tf-gold hover:bg-tf-goldDark text-tf-textPrimary rounded-lg font-serif-display text-base font-semibold transition-colors duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Request Access */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setShowAccessMsg(!showAccessMsg)}
            className="text-sm text-tf-gold hover:text-tf-goldDark transition-colors duration-200"
          >
            Request Access
          </button>
          {showAccessMsg && (
            <p className="mt-2 text-sm text-tf-textMuted">
              Contact the Family Administrator to request access.
            </p>
          )}
        </div>
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30"
              onClick={() => setShowModal(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              onClick={() => setShowModal(false)}
            >
              <div
                className="bg-white rounded-xl p-8 max-w-sm w-full card-shadow"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col items-center text-center">
                  <FamilyCrest size={48} animated={false} />
                  <h3 className="font-serif-display text-2xl text-tf-textPrimary mt-4">
                    Coming Soon
                  </h3>
                  <p className="text-sm text-tf-textSecondary mt-3 max-w-[320px]">
                    The Family Portal is currently in development. Soon, this
                    will be your family&apos;s private space for cloud storage,
                    messaging, calendars, and more.
                  </p>

                  {/* Feature preview grid */}
                  <div className="grid grid-cols-3 gap-3 mt-6 w-full">
                    {COMING_SOON_FEATURES.map((feature) => (
                      <div
                        key={feature.label}
                        className="flex flex-col items-center justify-center w-full aspect-square rounded-lg border border-tf-borderLight"
                      >
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="text-xs text-tf-textMuted mt-1.5">
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Close */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="mt-6 flex items-center gap-1.5 px-6 py-2.5 text-sm text-tf-textSecondary hover:text-tf-textPrimary border border-tf-border rounded-lg transition-colors duration-200"
                  >
                    <X size={14} />
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
