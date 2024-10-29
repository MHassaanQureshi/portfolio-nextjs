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
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
        bounceTwice: "bounceTwice 1.5s ease-in-out infinite",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        spinSlow: "spinSlow 5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounceTwice: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(10px)" },
          "75%": { transform: "translateY(-10px)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

