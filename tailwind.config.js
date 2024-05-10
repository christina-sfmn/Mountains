/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'body': ['"Open Sans"'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: { // hier können die Standardwerte von Tailwind um eigene erweitert werden (z. B. eigene Farben, Screengrößen, Abstände, etc.)
    colors: {
      'mountain-blue': '#0077FF',
    },
    height: {
      'hero': '50vh',
    }
    },
  },
  plugins: [],
}

