/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4xl': '2rem',
        '5xl': '2.4rem',
      },
    },
  },
  plugins: [],
}

