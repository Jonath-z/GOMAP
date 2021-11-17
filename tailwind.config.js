module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'input-width': '500px',
        'input-width-phone-format': '300px',
        'input-width-phone-format-xsm': '250px',
      },
      screens: {
        'xsm': {'min':'300px', 'max':'399px'},
        'sm': {'min': '400px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
