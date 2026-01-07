import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        imn: {
          black: "#000000",
          orange: "#F04D24",
          grey: "#E1E1E1",
          white: "#FFFFFF",
          teal: "#00A7A0",
          purple: "#7C3AED",
        },
      },
    },
  },
  plugins: [],
};

export default config;
