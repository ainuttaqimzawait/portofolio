/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      height: {
        'cov-h': '35rem',
      },
      width: {
        'cov-w': '56rem'
      }
    },
  },
  plugins: [],
}

