import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        valle: {
          red: "#B71C1C",
          redDark: "#7F0000",
          redLight: "#D32F2F",
          redSoft: "#FFEBEE",
          dark: "#121212",
          surface: "#1E1E1E",
          grayBg: "#F5F5F5",
          grayBorder: "#E5E7EB",
          green: "#2E7D32",
          greenLight: "#4CAF50",
          greenSoft: "#E8F5E9",
          amber: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
        card: "0 2px 10px rgba(0,0,0,0.05)",
        floating: "0 14px 34px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
