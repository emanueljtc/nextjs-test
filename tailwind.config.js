module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        whiteSolid: '2px solid #fff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
