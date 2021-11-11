module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'input-width': '500px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
