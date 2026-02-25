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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Warm design system
        cream: {
          50: "#FFFDF7",
          100: "#FFF9E8",
          200: "#FFF3D1",
          300: "#FFEAB0",
          400: "#FFE08F",
          500: "#F5D680",
        },
        burgundy: {
          50: "#FDF2F4",
          100: "#F5D0D8",
          200: "#E8A1B1",
          300: "#D4728A",
          400: "#B8486A",
          500: "#8B1A3A",
          600: "#6E1430",
          700: "#520F24",
          800: "#3A0A1A",
          900: "#220610",
        },
        gold: {
          50: "#FFFDF0",
          100: "#FFF8D6",
          200: "#FFEFAD",
          300: "#FFE484",
          400: "#FFD85B",
          500: "#D4A84B",
          600: "#B8922F",
          700: "#8A6D23",
          800: "#5C4917",
          900: "#2E240C",
        },
        warmGray: {
          50: "#FAF9F7",
          100: "#F0EEEA",
          200: "#E0DDD6",
          300: "#C8C3B8",
          400: "#A8A193",
          500: "#8A8275",
          600: "#6B655A",
          700: "#504B43",
          800: "#36332E",
          900: "#1E1C19",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(135deg, #FFF9E8 0%, #FFFDF7 50%, #FDF2F4 100%)",
        "burgundy-gradient":
          "linear-gradient(135deg, #8B1A3A 0%, #6E1430 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #D4A84B 0%, #B8922F 100%)",
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
