/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '130': '50rem',
      },
      height: {
          '107':'37rem'
      },
      backgroundColor: theme => ({
        ...theme('color'),
        'backcolor': '#000000a7',
        'borderColor': '#e5e7eb',
        'backAside': '#f3f4f6',
        'colorHover': '#1118271a',
        'colorThead': '#f9fafb'
      }),
    },
  },
  plugins: [],
}

