/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#a3e635",
          emerald: "#34d399"
        }
      },
      boxShadow: {
        neon: "0 8px 30px rgba(132, 204, 22, 0.25)"
      }
    }
  },
  plugins: []
}
