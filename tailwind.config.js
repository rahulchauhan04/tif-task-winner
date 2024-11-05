/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        sourceSansPro: ['"Source Sans Pro"'],
      },
      lineHeight: {
        '22px': '22px', // Adding custom line-height of 22px
      },
    },
  },
  plugins: [
    import('@tailwindcss/line-clamp'),
    // other plugins if needed
  ],
}

