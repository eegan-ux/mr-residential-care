import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          "ui-monospace",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        navy: {
          DEFAULT: "#152848",
          50: "#f2f5fa",
          100: "#dee6f2",
          200: "#b9c9e2",
          300: "#8ba4cb",
          400: "#5c7bae",
          500: "#3d5a8f",
          600: "#2c4571",
          700: "#22355a",
          800: "#1b2a48",
          900: "#152848",
          950: "#0c1830",
        },
        brand: {
          teal: "#3fc9a3",
          blue: "#2f8fd1",
          50: "#eefcf8",
          100: "#d3f7ec",
          200: "#a8eeda",
          300: "#71dfc2",
          400: "#3fc9a3",
          500: "#22ab88",
          600: "#178a6f",
          700: "#166f5b",
          800: "#15594b",
          900: "#134a3f",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(21, 40, 72, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
