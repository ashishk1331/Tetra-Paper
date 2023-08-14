/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-quote-borders": theme("colors.primary"),
            "--tw-prose-hr": theme("colors.primary"),
            "--tw-prose-invert-quote-borders": theme("colors.primary"),
            "--tw-prose-invert-hr": theme("colors.primary"),
          },
        },
      }),
      colors: {
        primary: "#E384FF",
        secondary: "#191825",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
