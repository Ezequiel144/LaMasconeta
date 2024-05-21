import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violetGrow: {
          300: "#DDB2FF",
          500: "#B451FB",
          600: "#A02EEF",
          700: "#8A1ED2",
        },
        orangeGrow: {
          300:"#FFD56D",
          400:"#FFB732",
          600:"#FB8500",
          700:"#CC6302"
        }
      },
      boxShadow: {
        shadowCardPets: "0px 0px 12px 0px rgba(0, 0, 0, 0.3)",
        shadowContainSecFive: "0px 0px 20px 0px rgba(0, 0, 0, 0.3)",
        shadowInput: "0px 4px 10px -3px rgba(138,30,210,0.8)"
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
      gridTemplateColumns:{
        gridResponsive:"repeat(auto-fill,minmax(120px,1fr))",
        gridResponsiveBehavior:"repeat(auto-fill,minmax(250px,1fr))",
        gridResponsiveFilter:"repeat(auto-fill,minmax(280px,1fr))"
      }
    },
  },
  plugins: [],
};
export default config;
