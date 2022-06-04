const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': {'min': '200px', 'max': '520px'},
      'sm': {'min': '520px', 'max': '767px'},
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary': "#12141E",
        'trans1': "#252525",
        'trans2': "#00020C",
        'trans3': "#000",
        'white': '#ffffff',
        'white-icon': "#D9D9D9",
        'colorImage': "#030304",
        'colorButton': "#12141E",
        'backgroundWeb':"#E5E5E5",
        'border':"#4A4A55",
        'blueMuda': "#E7ECFC",
        'backgroundUploadImage': "#444444",
        'myColor1':"#E7ECFC"
      },
      container: {
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
