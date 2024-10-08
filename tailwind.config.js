/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        "dashboard-main-content":'calc(100% - 17vw)'
      },
      scrollbar:{
        width: '0px'
      }
    },
  },
  plugins: [],
}