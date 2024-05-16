/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html, js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake", "dracula"],
  },
};
