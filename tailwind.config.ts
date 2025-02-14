import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#82c6a4", //limegreen
        secondary: "#81998D", //darkgreen
        accent: "4F4F4F", //darkgrey
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "nord"],
  },
} satisfies Config;
