/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*",
    './views/**/*.ejs',
    './public/**/*.js',
    './public/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {

        hel: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'] // Add Helvetica to the 'sans' font family
      },
      boxShadow: {
        'neumorphic': '8px 8px 15px rgba(0, 0, 0, 0.2), -8px -8px 15px rgba(255, 255, 255, 0.7)',
        'neumorphic-inner': 'inset 8px 8px 15px rgba(0, 0, 0, 0.2), inset -8px -8px 15px rgba(255, 255, 255, 0.7)',
        'neumorphic-btn': '4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.7)'
      },
      borderRadius: {
        'neumorphic': '20px'
      }
    },
  },
  plugins: [],
}

