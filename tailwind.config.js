/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "dove-2": "url('images/polygons.webp')",
        "byw": "url('images/byw.jpg')",
        "yb": "url('images/yb.jpg')",
        "ywb": "url('images/ywb.jpg')",
        "yb": "url('images/yb.jpg')",
        "rby": "url('images/rby.jpg')",
        "yb": "url('images/yb.jpg')",
        "bry": "url('images/bry.jpg')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
