import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2.5rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        // Calm, healthcare-trust palette
        cream: {
          // "paper" — cool morning-light neutrals (replaces the warm cream)
          50: "#F6F7F4",
          100: "#EEF1EC",
          200: "#E1E6DF",
        },
        stone: {
          100: "#E9ECE6",
          200: "#D9DED6",
          300: "#C3CAC0",
        },
        marigold: {
          100: "#FBEFD9",
          300: "#F0C277",
          500: "#E2A23B",
          700: "#9A6413",
        },
        sage: {
          50: "#F2F7F4",
          100: "#E2EDE5",
          200: "#C5DBCB",
          300: "#9CC1A6",
          400: "#7BAE85",
          500: "#5C9469",
          600: "#467853",
          700: "#3A6244",
          800: "#304F38",
          900: "#28402F",
        },
        teal: {
          50: "#EEF5F5",
          100: "#D8E7E8",
          200: "#B1CFD1",
          300: "#7FAFB3",
          400: "#4F8B91",
          500: "#2F6E78",
          600: "#235C64",
          700: "#1D4C54",
          800: "#173D44",
          900: "#122F35",
        },
        ink: {
          50: "#F4F6F5",
          100: "#E6EAE8",
          200: "#CDD4D1",
          300: "#A9B3AF",
          400: "#7F8B87",
          500: "#5E6A66",
          600: "#46524E",
          700: "#34403C",
          800: "#22302C",
          900: "#172422",
        },
        peach: {
          50: "#FCF4EE",
          100: "#F8E6D8",
          200: "#F1CBAE",
        },
      },
      fontFamily: {
        sans: ["var(--font-atkinson)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-atkinson)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 0 rgba(23, 36, 34, 0.04), 0 12px 32px -18px rgba(23, 36, 34, 0.18)",
        glow: "none",
        ring: "0 0 0 1px rgba(23, 36, 34, 0.08)",
        lift: "0 24px 60px -30px rgba(18, 47, 53, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(124, 174, 133, 0.18), transparent 60%)",
        "warm-fade":
          "radial-gradient(circle at 80% 20%, rgba(248, 230, 216, 0.6), transparent 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "soft-pulse": "soft-pulse 2.4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
