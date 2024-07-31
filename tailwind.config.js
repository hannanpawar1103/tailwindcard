/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist : ['rounded-none','rounded-lg','rounded-xl','rounded-md','rounded-2xl','rounded-sm'],
  theme: {
    extend: {},
  },
  plugins: [],
}