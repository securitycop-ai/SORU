import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        brand: {
          gold: "#f5e3b1",
          goldDark: "#d4c070",
          goldLight: "#fdf4dc",
          black: "#1a0a00",
          dark: "#2c1200",
          brown: "#3d1f00",
          cream: "#fdf4dc",
          cream2: "#f5e3b1",
          gray: "#6B6B6B",
          grayLight: "#9A9A9A",
          border: "#5a3010",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "hero-zoom": {
          "from": { transform: "scale(1.03)" },
          "to": { transform: "scale(1.08)" },
        }
      },
      animation: {
        "fade-in": "fade-in 0.4s ease forwards",
        "hero-zoom": "hero-zoom 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;