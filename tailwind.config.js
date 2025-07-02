/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // pick any key you like; here “moderna”
        moderna: ["'Modern Negra'", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
