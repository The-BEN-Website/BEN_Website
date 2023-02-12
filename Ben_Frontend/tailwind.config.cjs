/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'my-red':'#F74946',
        'my-black': '#272727',
        'grey-background': '#D9D9D9',
        'black-background': '#323232',
        'footer-background': '#979797',
        'community-blue': '#6083FF',
        'bg-red': '#FFF8F8',
        'contact-text' : '#8A8A8A',
      },
      bottom:{
        '1/5': '-15%',
      },
    },
  },
  plugins: [],
}
