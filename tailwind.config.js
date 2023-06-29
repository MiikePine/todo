/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'JosefinSans': ['Josefin Sans', 'sans-serif'],
      },

      fontWeight: {
        'extrabold': '800',
      },
        fontWeight: {
          'bold': 'bold',
        },
      colors: {
        'very-dark': 'hsl(237, 14%, 26%)',
      },
    },
  },
  plugins: [],
}

