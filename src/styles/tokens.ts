interface Colors {
  darkGreen: string;
  lightGreen: string;
  pink: string;
  beige: string;
  lightPink: string;
  black: string;
  white: string;
}

export const colors: Colors = {
  darkGreen: "#365028",
  lightGreen: "#697928",
  pink: "#f139ee",
  lightPink: "#d5919f",
  black: "#000000",
  white: "#ffffff",
  beige: "#f4ebd8",
};

export const theme = {
  light: {
    green: colors.lightGreen,
    pink: colors.lightPink,
    beige: colors.beige,
    white: colors.white,
  },
  dark: {
    green: colors.darkGreen,
    pink: colors.pink,
    black: colors.black,
  },
};

export const size = {};
