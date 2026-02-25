import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Taylor Fam namespace — all design tokens from COLOR_PALETTE
        tf: {
          background: "#faf8f4",
          backgroundAlt: "#f3f0e8",
          card: "#ffffff",
          textPrimary: "#3d2b1f",
          textSecondary: "#6b5a4e",
          textMuted: "#9c8b7e",
          gold: "#c9a84c",
          goldLight: "#e0d5a0",
          goldDark: "#a08a3a",
          sage: "#7a8c6e",
          sageMuted: "#a3b297",
          border: "#e5ddd3",
          borderLight: "#f0ebe3",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-inter)", "Inter", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
