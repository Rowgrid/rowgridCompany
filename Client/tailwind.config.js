/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#00040F",
        secondry:"#eab308",
        third:"#111827"
      },
      colors: {
        text: "#B4B4B4"
      },
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      spaceMono: ["Space Mono", "monospace"],
      playFair: ["Playfair Display", "serif"],
    },
    
    
    borderColor:{
      secondry:"#eab308"
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },

  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
};
