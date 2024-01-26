/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      backgroundImage: {
        'cover-pattern': "url('assets/images/walpaper.jpg')",
      },
      height: {
        'cov-h': '35rem',
        'box-h': '35.75rem',
      },
      width: {
        'cov-w': '56rem',
        'box-w': '57rem',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
      },
      skew: {
        '180': '180deg',
      },
      transform: {
        'transform-style': 'rotateY(150deg)',
      },
      colors: {
        'navy-blue': '#000080',
      },
    },
  },
  plugins: [],
}

