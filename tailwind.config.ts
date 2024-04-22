import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-sectionTwo": "url('/image/ImageSection2Numbers.png')",
      },
      colors: {
        violetGrow: {
          300: "#DDB2FF",
          500: "#B451FB",
          600: "#A02EEF",
          700: "#8A1ED2",
        },
        orangeGrow: {
          300:"#FFD56D"
        }
      },
      boxShadow: {
        shadowCardPets: "0px 0px 12px 0px rgba(0, 0, 0, 0.3)",
        shadowContainSecFive: "0px 0px 20px 0px rgba(0, 0, 0, 0.3)",
      },
      keyframes:{
        animateBounceTwo:{
          "0%":{transform: "translateY(20px)"},
          "33%":{transform: "translateY(10px)"},
          "66%":{transform: "translateY(0px)"},
          "100%": {transform: "translateY(20px)"},
        }
      },
      animation:{ 
        animateBounceTwo:"animateBounceTwo 3s ease-in infinite"
      },
    },
  },
  plugins: [],
};
export default config;
