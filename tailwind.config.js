/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#023047",
        secondary: "#219ebc",
        info: "#48cae4",
        warning: "#64dfdf",
        danger: "#ef476f",
        success: "#06d6a0",
        neutral: "#71A5DE",
        backgroundcolor: "#F6F9FD",
        buttoncolor: "E2EAFC",
      },
    },
  },
  plugins: [require("daisyui")],
};
