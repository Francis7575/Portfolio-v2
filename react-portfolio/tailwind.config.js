/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightblue': 'hsl(240,7%,97%)',
        'menu': 'hsl(204,39%,88%)',
        'blue': 'hsl(210,100%,30%)',
        'gray': 'hsl(229,12%,83%)',
        'sunset-orange': '#f5645a',
        'light-pink':  '#F4B0AA',
        'black': 'black',
        'fuchsia': '#d5333e',
        'light-green': 'hsl(205,100%,93%)',
        'dark-blue': 'hsl(213,65%,43%)',
        'error': '#df3c61',
        'success': 'hsl(153,71%,59%)',
        'card': '#f3f4f6',
        'menu-active': 'hsl(240,10%,16%)'
      }
    },
  },
  plugins: [],
}