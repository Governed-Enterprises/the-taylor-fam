"use client";

import { motion } from "framer-motion";

interface FamilyCrestProps {
  size?: number;
  className?: string;
}

export default function FamilyCrest({
  size = 120,
  className = "",
}: FamilyCrestProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Taylor Family Crest"
      >
        {/* Outer shield */}
        <path
          d="M100 10 L180 50 L180 120 Q180 170 100 195 Q20 170 20 120 L20 50 Z"
          fill="#8B1A3A"
          stroke="#D4A84B"
          strokeWidth="3"
        />
        {/* Inner shield */}
        <path
          d="M100 25 L168 58 L168 118 Q168 160 100 182 Q32 160 32 118 L32 58 Z"
          fill="#6E1430"
          stroke="#D4A84B"
          strokeWidth="1.5"
        />
        {/* Decorative cross / plus shape */}
        <rect x="92" y="50" width="16" height="80" rx="3" fill="#D4A84B" />
        <rect x="65" y="77" width="70" height="16" rx="3" fill="#D4A84B" />
        {/* Letter T */}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Playfair Display, Georgia, serif"
          fontWeight="700"
          fontSize="36"
          fill="#FFFDF7"
        >
          T
        </text>
        {/* Banner ribbon at bottom */}
        <path
          d="M45 145 L70 138 L100 148 L130 138 L155 145 L145 155 L130 150 L100 160 L70 150 L55 155 Z"
          fill="#D4A84B"
        />
        {/* Stars */}
        <circle cx="60" cy="55" r="4" fill="#FFE484" />
        <circle cx="140" cy="55" r="4" fill="#FFE484" />
        <circle cx="100" cy="170" r="3" fill="#FFE484" />
      </svg>
    </motion.div>
  );
}
