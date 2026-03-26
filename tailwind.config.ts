import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          navy: "#0C447C",
          gold: "#D4900A",
          emerald: "#1D9E75",
          burgundy: "#791F1F",
          stone: "#EAE2D4",
          chalk: "#F8F3EB",
          mist: "#EEF2F6",
          charcoal: "#1B2430",
        },
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 20px 80px rgba(12, 68, 124, 0.08)",
        luxe: "0 28px 120px rgba(27, 36, 48, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-cormorant)"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(12,68,124,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,68,124,0.06) 1px, transparent 1px)",
        "brand-glow":
          "radial-gradient(circle at top left, rgba(212, 144, 10, 0.18), transparent 34%), radial-gradient(circle at 80% 20%, rgba(29, 158, 117, 0.16), transparent 26%), radial-gradient(circle at 50% 100%, rgba(121, 31, 31, 0.14), transparent 28%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
