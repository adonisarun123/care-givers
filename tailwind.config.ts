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
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Calm, healthcare-trust palette
        cream: {
          50: "#FBF8F3",
          100: "#F6F1E7",
          200: "#EFE6D2",
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
          50: "#F0F7F8",
          100: "#DAEAEC",
          200: "#B6D6DA",
          300: "#86BAC1",
          400: "#5AA0A9",
          500: "#3D8892",
          600: "#2F6E78",
          700: "#285962",
          800: "#234951",
          900: "#1F3D44",
        },
        ink: {
          50: "#F7F7F6",
          100: "#EDEDEB",
          200: "#D7D7D3",
          300: "#B6B6B0",
          400: "#8C8C84",
          500: "#6B6B62",
          600: "#52524A",
          700: "#41413A",
          800: "#2C2C26",
          900: "#1B1B17",
        },
        peach: {
          50: "#FCF4EE",
          100: "#F8E6D8",
          200: "#F1CBAE",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20, 30, 25, 0.04), 0 8px 24px rgba(20, 30, 25, 0.06)",
        glow: "0 10px 40px -12px rgba(61, 136, 146, 0.35)",
        ring: "0 0 0 1px rgba(20, 30, 25, 0.06)",
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
