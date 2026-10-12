/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAF7",
        surface: "#FFFFFF",
        ink: "#111111",
        body: "#1C1917",
        muted: "#57534E",
        line: "#E7E5DF",
        chip: "#F1F0EB",
        brand: {
          50: "#EEF5FF",
          100: "#D9E8FF",
          200: "#B8D4FF",
          500: "#1E88FF",
          600: "#1A6FF0",
          700: "#1559C9",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
        btn: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17,17,17,0.04), 0 8px 24px -12px rgba(17,17,17,0.08)",
        photo: "0 18px 40px -12px rgba(26,111,240,0.35)",
      },
    },
  },
  plugins: [],
};
