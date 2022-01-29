module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        material:
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
      },
      fontFamily: {
        'yellow-tail': ['"Yellowtail"', 'cursive'],
      },
    },
  },
  plugins: [],
};
