
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "image":"url('/src/images/MicrosoftTeams-image.png')",
        "left":"url('/src/images/MicrosoftTeams-image (3).png')"
      }
    },
  },
  plugins: [],
}