import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base tones — never pure #000 / #FFF, keeps the premium warmth
        noir: {
          DEFAULT: "#0A0A0B",
          soft: "#111114",
        },
        carvao: {
          DEFAULT: "#17181B",
          light: "#1F2023",
          border: "#2A2B2F",
        },
        marfim: {
          DEFAULT: "#F3F1EA",
          dim: "#C9C7BF",
        },
        ouro: {
          DEFAULT: "#B8923D",
          bright: "#E8CD82",
          deep: "#8C6A24",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
        cond: ["var(--font-oswald)", "sans-serif"],
      },
      backgroundImage: {
        "gold-fade": "linear-gradient(135deg, #E8CD82 0%, #B8923D 45%, #8C6A24 100%)",
        "noir-vignette":
          "radial-gradient(ellipse at 50% 0%, rgba(184,146,61,0.10) 0%, rgba(10,10,11,0) 55%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(184,146,61,0.35)",
        card: "0 8px 30px -12px rgba(0,0,0,0.6)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(184,146,61,0.55)" },
          "70%": { boxShadow: "0 0 0 14px rgba(184,146,61,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(184,146,61,0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2.4s infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
