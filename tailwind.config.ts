import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        surface: "#0a0a0a",
        primary: "#00d4ff",
        secondary: "#a855f7",
        accent: "#22d3ee",
        // shadcn color tokens
        card: "#0a0a0a",
        "card-foreground": "#ffffff",
        "muted-foreground": "#a1a1aa",
        border: "rgba(255, 255, 255, 0.1)",
        muted: "#18181b",
        foreground: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "system-ui", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "glow-pulse": {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
