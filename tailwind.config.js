/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
    "./app/*/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./components/ContentElements/*.{js,ts,jsx,tsx}",
    "./components/ContentElements/Misc/*.{js,ts,jsx,tsx}",
    "./components/HeaderElements/*.{js,ts,jsx,tsx}",
    "./components/Modals/*.{js,ts,jsx,tsx}",
    "./components/Skeletons/*.{js,ts,jsx,tsx}"


  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
}
