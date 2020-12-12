// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['**/*.ts', '**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
