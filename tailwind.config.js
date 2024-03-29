/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      number: ["Rajdhani", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: "10px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        1.25: "0.3125rem",
        3.25: "0.8125rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        25: "6.25rem",
        26: "6.5rem",
      },
      width: {
        12.5: "3.125rem",
        13: "3.25rem",
      },
      inset: {
        12.5: "3.125rem",
        13: "3.25rem",
        17: "4.25rem",
        17.5: "4.3125rem",
        18: "4.5rem",
        19: "4.75rem",
      },
      rotate: {
        15: "15deg",
      },
    },
  },
  plugins: [],
};
