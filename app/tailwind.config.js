/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#005226',
        mainGreen: '#4CAF4F',
        darkGray: '#5F5F5F',
        maskedTextGray: '#CDFFE4',
        linkBlue: '#0000FF',
        lightGray: '#C2C2C2',
        grayForArrow: '#D6D6D6',
      },
      fontFamily: {
        "text-montserrat": ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}

