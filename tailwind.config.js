/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('../images/hero-section-bg.png')",
        'reason-section': "url('../images/reason-section-bg.png')"
      }
    }
  },
  plugins: [],
}

