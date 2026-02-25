"use client";

import { motion } from "framer-motion";
import { COLOR_PALETTE } from "@/lib/constants";

interface FamilyCrestProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

function CrestSVG({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Taylor Family Crest"
    >
      {/* Left olive branch */}
      <g opacity="0.9">
        <path
          d="M38 170 Q30 150 35 130 Q38 120 42 112"
          stroke={COLOR_PALETTE.sage}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Leaves — left side */}
        <ellipse cx="32" cy="128" rx="6" ry="3" transform="rotate(-30 32 128)" fill={COLOR_PALETTE.sage} />
        <ellipse cx="30" cy="140" rx="6" ry="3" transform="rotate(-45 30 140)" fill={COLOR_PALETTE.sageMuted} />
        <ellipse cx="33" cy="152" rx="6" ry="3" transform="rotate(-40 33 152)" fill={COLOR_PALETTE.sage} />
        <ellipse cx="35" cy="163" rx="5" ry="2.5" transform="rotate(-50 35 163)" fill={COLOR_PALETTE.sageMuted} />
        {/* Leaves — right side of left branch */}
        <ellipse cx="42" cy="122" rx="6" ry="3" transform="rotate(20 42 122)" fill={COLOR_PALETTE.sageMuted} />
        <ellipse cx="40" cy="135" rx="5" ry="2.5" transform="rotate(10 40 135)" fill={COLOR_PALETTE.sage} />
        <ellipse cx="39" cy="148" rx="5" ry="2.5" transform="rotate(15 39 148)" fill={COLOR_PALETTE.sageMuted} />
        {/* Small olives */}
        <circle cx="36" cy="133" r="2" fill={COLOR_PALETTE.goldDark} opacity="0.6" />
        <circle cx="37" cy="156" r="1.8" fill={COLOR_PALETTE.goldDark} opacity="0.6" />
      </g>

      {/* Right olive branch (mirrored) */}
      <g opacity="0.9">
        <path
          d="M162 170 Q170 150 165 130 Q162 120 158 112"
          stroke={COLOR_PALETTE.sage}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Leaves — right side */}
        <ellipse cx="168" cy="128" rx="6" ry="3" transform="rotate(30 168 128)" fill={COLOR_PALETTE.sage} />
        <ellipse cx="170" cy="140" rx="6" ry="3" transform="rotate(45 170 140)" fill={COLOR_PALETTE.sageMuted} />
        <ellipse cx="167" cy="152" rx="6" ry="3" transform="rotate(40 167 152)" fill={COLOR_PALETTE.sage} />
        <ellipse cx="165" cy="163" rx="5" ry="2.5" transform="rotate(50 165 163)" fill={COLOR_PALETTE.sageMuted} />
        {/* Leaves — left side of right branch */}
        <ellipse cx="158" cy="122" rx="6" ry="3" transform="rotate(-20 158 122)" fill={COLOR_PALETTE.sageMuted} />
        <ellipse cx="160" cy="135" rx="5" ry="2.5" transform="rotate(-10 160 135)" fill={COLOR_PALETTE.sage} />
        <ellipse cx="161" cy="148" rx="5" ry="2.5" transform="rotate(-15 161 148)" fill={COLOR_PALETTE.sageMuted} />
        {/* Small olives */}
        <circle cx="164" cy="133" r="2" fill={COLOR_PALETTE.goldDark} opacity="0.6" />
        <circle cx="163" cy="156" r="1.8" fill={COLOR_PALETTE.goldDark} opacity="0.6" />
      </g>

      {/* Outer shield — classic heraldic shape */}
      <path
        d="M100 8 L182 48 L182 110 Q182 148 160 170 Q138 192 100 200 Q62 192 40 170 Q18 148 18 110 L18 48 Z"
        fill={COLOR_PALETTE.textPrimary}
        stroke={COLOR_PALETTE.gold}
        strokeWidth="3"
      />

      {/* Inner shield border — gold inset line */}
      <path
        d="M100 20 L172 55 L172 110 Q172 144 153 163 Q134 182 100 189 Q66 182 47 163 Q28 144 28 110 L28 55 Z"
        fill="none"
        stroke={COLOR_PALETTE.gold}
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Inner shield field */}
      <path
        d="M100 26 L168 58 L168 110 Q168 142 150 160 Q132 178 100 185 Q68 178 50 160 Q32 142 32 110 L32 58 Z"
        fill={COLOR_PALETTE.textSecondary}
      />

      {/* Horizontal divider line across shield */}
      <line
        x1="45"
        y1="90"
        x2="155"
        y2="90"
        stroke={COLOR_PALETTE.gold}
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Top decorative corner flourishes */}
      <path
        d="M60 48 Q70 42 80 46"
        stroke={COLOR_PALETTE.goldLight}
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M140 48 Q130 42 120 46"
        stroke={COLOR_PALETTE.goldLight}
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />

      {/* Small diamond accents flanking the T */}
      <rect x="56" y="98" width="8" height="8" rx="1" transform="rotate(45 60 102)" fill={COLOR_PALETTE.gold} opacity="0.5" />
      <rect x="136" y="98" width="8" height="8" rx="1" transform="rotate(45 140 102)" fill={COLOR_PALETTE.gold} opacity="0.5" />

      {/* Stylized serif 'T' — the centerpiece */}
      {/* T crossbar */}
      <rect x="72" y="62" width="56" height="10" rx="2" fill={COLOR_PALETTE.gold} />
      {/* T crossbar serifs */}
      <rect x="68" y="60" width="8" height="14" rx="1.5" fill={COLOR_PALETTE.gold} />
      <rect x="124" y="60" width="8" height="14" rx="1.5" fill={COLOR_PALETTE.gold} />
      {/* T vertical stem */}
      <rect x="93" y="72" width="14" height="52" rx="2" fill={COLOR_PALETTE.gold} />
      {/* T stem base serif */}
      <rect x="86" y="120" width="28" height="8" rx="1.5" fill={COLOR_PALETTE.gold} />

      {/* Small star above the T */}
      <polygon
        points="100,38 102,44 108,44 103,48 105,54 100,50 95,54 97,48 92,44 98,44"
        fill={COLOR_PALETTE.goldLight}
      />

      {/* Banner ribbon at bottom of shield */}
      <path
        d="M40 172 L55 165 L75 170 L100 162 L125 170 L145 165 L160 172 L150 180 L125 176 L100 183 L75 176 L50 180 Z"
        fill={COLOR_PALETTE.gold}
      />
      {/* Banner ribbon shadow/fold */}
      <path
        d="M40 172 L50 180"
        stroke={COLOR_PALETTE.goldDark}
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M160 172 L150 180"
        stroke={COLOR_PALETTE.goldDark}
        strokeWidth="1"
        opacity="0.4"
      />

      {/* "TAYLOR" text on banner */}
      <text
        x="100"
        y="175"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Playfair Display, Georgia, serif"
        fontWeight="600"
        fontSize="9"
        letterSpacing="3"
        fill={COLOR_PALETTE.textPrimary}
      >
        TAYLOR
      </text>

      {/* Bottom accent — three dots under the banner */}
      <circle cx="90" cy="195" r="2" fill={COLOR_PALETTE.goldLight} opacity="0.7" />
      <circle cx="100" cy="198" r="2.5" fill={COLOR_PALETTE.gold} opacity="0.8" />
      <circle cx="110" cy="195" r="2" fill={COLOR_PALETTE.goldLight} opacity="0.7" />

      {/* Motto arc beneath */}
      <text
        x="100"
        y="214"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontWeight="400"
        fontStyle="italic"
        fontSize="8"
        letterSpacing="1.5"
        fill={COLOR_PALETTE.textMuted}
      >
        Govern &middot; Build &middot; Pass Down
      </text>
    </svg>
  );
}

export default function FamilyCrest({
  size = 120,
  className = "",
  animated = true,
}: FamilyCrestProps) {
  if (!animated) {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <CrestSVG size={size} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <CrestSVG size={size} />
    </motion.div>
  );
}
