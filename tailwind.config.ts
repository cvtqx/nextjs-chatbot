import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        limegreen: "#82c6a4",
        darkgreen: "#81998D",
        darkgrey: "4F4F4F",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "nord"],
  },
} satisfies Config;
