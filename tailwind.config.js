const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      xxs: "380px",
      xxm: "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("daisyui")],
};
