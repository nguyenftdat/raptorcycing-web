import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      "poppins-regular": ["Poppins-Regular", "sans-serif"],
      morgant: ["Morgant", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/banner_cover_1.svg')",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
  ],
};
export default config;
