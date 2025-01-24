/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        fontFamily: {
          body: ['Poppins'],
        },
        boxShadow: {  // Move boxShadow here
          'custom-blue': '0 10px 15px -3px rgba(83, 132, 236, 0.5), 0 4px 6px -2px rgba(83, 132, 236, 0.5)', // Custom shadow with your color
        },
      },
    },
    plugins: [],
  }