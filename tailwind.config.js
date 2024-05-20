/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html, js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["cupcake", "dracula"],
  },
};
