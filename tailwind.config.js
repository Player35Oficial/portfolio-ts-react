/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
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
    },
    fontFamily: {
      sans: ["Heebo", "sans-serif"],
      serif: ["Merriweather", "serif"],
      kalam: ["Kalam"],
    },
  },
  plugins: [],
};
