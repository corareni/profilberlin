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
        forest: {
          900: "#071510",
          800: "#0f2318",
          700: "#1b3d2a",
          600: "#2d5c3f",
          500: "#3a6b4e",
          400: "#4a7c59",
          300: "#6a9e77",
        },
        beige: {
          100: "#faf7f2",
          200: "#f2ede3",
          300: "#e8e2d6",
          400: "#ddd7c8",
          500: "#ccc5b3",
          600: "#a09585",
        },
        brand: "#13543E",
        ink: "#18160f",
        mid: "#3d3830",
        dim: "#4a453c",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      letterSpacing: {
        section: "-0.025em",
        label: "0.35em",
        nav: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
