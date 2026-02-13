/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk Variable"'],
      },
      colors: {
        heyOzGreen: "#B9FF66",
        dark: "#191A23",
        heyOzGray: "#F3F3F3"
      }
    },
  },
  plugins: [],
};
