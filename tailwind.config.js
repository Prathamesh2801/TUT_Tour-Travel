/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        keyframes: {
        "up-down": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(10px)' },  // 10px neeche
        },
      },
       animation: {
        'up-down': 'up-down 1s ease-in-out 2',
      },
      fontFamily: {
        // pick any key you like; here “moderna”
        moderna: ["'Modern Negra'", "sans-serif"],
      },
    },
    
  },
  plugins: [daisyui],
   variants: {
    extend: {
      animation: ['hover'], 
    },
  },
};
