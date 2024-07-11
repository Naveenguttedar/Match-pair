/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flipHorizontal: {
          "0%": { transform: "rotateY(180deg)" },
          "50%": { transform: "rotateY(90deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
      },
      animation: {
        hflip: "flipHorizontal 1s ",
      },
    },
  },
  plugins: [],
};
