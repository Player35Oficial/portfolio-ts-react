/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: "0", right: -100 },
          "100%": { opacity: "1", right: 0 },
        },
      },
      animation: {
        appear: "appear 0.3s ease-in-out forwards",
      },
    },
    colors: {
      // Brand Colors
      "primary-500": "#8A42DB",
      "primary-400": "#9955E8",
      secondary: "#7DFFAF",
      // Surface Colors
      "surface-background": "#171023",
      "surface-primary": "#2C243B",
      "surface-secondary": "#413A4F",
      "surface-tertiary": "#4E4563",
      // Text Colors
      "text-primary": "#F5F6F6",
      "text-secondary": "#CDD0D4",
      // techs
      "techs-colors": "#9955E8",
      // Light-mode-colors
      // Surface Colors
      "light-surface-background": "#F5F6F6",
      "light-surface-primary": "#FFFFFF",
      "light-surface-secondary": "#C9CFCF",
      "light-surface-tertiary": "#B3BCBC",
      // Text Colors
      "light-text-primary": "#171023",
      "light-text-secondary": "#413A4F",
      // techs
    },
    fontFamily: {
      sans: ["Heebo", "sans-serif"],
      serif: ["Merriweather", "serif"],
      kalam: ["Kalam"],
    },
  },
  plugins: [],
};
