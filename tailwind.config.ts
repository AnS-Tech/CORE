import flowbite from "flowbite/plugin";
import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";

export type DefaultColors = typeof defaultColors;

const colors = {
  vivendaNatureza: {
    c1: "#365028",
    c2: "#697928",
    c3: "#F3F6EA",
    c4: "#d5bd9c",
    c5: "#D72D96",
    c6: "#365028",
    c7: "#89934c",
  },
} as const;

export type Colors = typeof colors;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./node_modules/flowbite-react/lib/**/*.js"],
  plugins: [flowbite],
  theme: {
    extend: {
      colors,
    },
  },
};

export default config;
