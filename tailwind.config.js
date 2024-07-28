module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        'custom-light-green': '#E0EBCB',
        'custom-white': '#FFFFFF',
        'custom-black':'0F1035',
        'custom-olive-green':'#E8EB7A',
        'custom-purple':'#6049BC',
        'custom-blacky':'#252F40',
        'custom-deep-purple':'#664FCD',
        'custom-blackish':'#123800',
        'custom-yellow':'#E8EB7A'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
