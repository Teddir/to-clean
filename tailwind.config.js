const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xss': {'min': '100px', 'max': '360px'},
      'xs': {'min': '360px', 'max': '635px'},
      'smm': {'min': '520px', 'max': '886px'},
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
        'myColor1':"#E7ECFC",
        'c1': '#FCF4E7',
        'c2': '#E7ECFC',
        'c3': '#E7FCED',
        'c4': '#FCE7FA',
      },
      container: {
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
