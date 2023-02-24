/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        animateDown: "animateDown infinite 1.5s",
      },
      keyframes: {
        animateDown: {
          "0%,20%, 50%,80%,100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(5px)" },
          "60%": { transform: "translateY(3px)" },
        },
      },
    },
  },
  plugins: [],
};
