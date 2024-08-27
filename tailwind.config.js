/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: "Inter" },
      transitionTimingFunction: {
        custom: "cubic-bezier( 0, 1, 0.3, 1 )",
      },
    },
  },
  plugins: [],
};
