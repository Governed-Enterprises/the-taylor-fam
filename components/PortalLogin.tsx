"use client";

import { motion } from "framer-motion";
import { Lock, Mail, KeyRound } from "lucide-react";

export default function PortalLogin() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-burgundy-50 flex items-center justify-center mx-auto mb-4">
          <Lock size={28} className="text-burgundy-500" />
        </div>
        <h2 className="font-serif-display text-2xl font-bold text-burgundy-700 mb-2">
          Family Portal
        </h2>
        <p className="text-warmGray-500 text-sm">
          Sign in to access private family content
        </p>
      </div>

      <div className="bg-white rounded-xl card-shadow border border-cream-300 p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Portal authentication coming soon!");
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-warmGray-700 mb-1"
            >
              Email
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-warmGray-400"
              />
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-warmGray-800 placeholder:text-warmGray-400 focus:outline-none focus:ring-2 focus:ring-burgundy-300 focus:border-burgundy-300 transition-colors"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-warmGray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <KeyRound
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-warmGray-400"
              />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-warmGray-800 placeholder:text-warmGray-400 focus:outline-none focus:ring-2 focus:ring-burgundy-300 focus:border-burgundy-300 transition-colors"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-burgundy-500 hover:bg-burgundy-600 text-white rounded-lg font-medium transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-warmGray-400">
          Portal access is for Taylor family members only.
        </p>
      </div>
    </motion.div>
  );
}
