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
      screens: {
        'min-755': '755px', // Custom breakpoint at 755px
      },
      transitionDuration: {
        '2000': '2000ms', // 2 seconds
        '3000': '3000ms', // 3 seconds, adjust as needed
      },
      colors: {
        darkGreen: '#005226',
        semiDarkGreen: '#007636',
        mainGreen: '#4CAF4F',
        veryLightGreen: '#CDFFE4',
        darkGray: '#5F5F5F',
        midGray: '#F2F2F2',
        lightGrayBg: '#F5F5F5',
        maskedTextGray: '#CDFFE4',
        silver: '#F5F7FA',
        lightGrayBorder: '#E7E7E7',
        linkBlue: '#0000FF',
        lightGray: '#C2C2C2',
        lighterGray: "#F8F8F8",
        borderGray: '#E7E7E7',
        grayForArrow: '#D6D6D6',
      },
      fontFamily: {
        "text-montserrat": ["Montserrat", "sans-serif"],
      },
    },
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
  },
  plugins: [],
}

