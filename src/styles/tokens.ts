interface Colors {
  darkGreen: string;
  lightGreen: string;
  success: string;
  warning: string;
  error: string;
  rating: string;
  Promoção: string;
  Novidade: string;
  MaisVendido: string;
  SemEstoque: string;
  border: string;
  pink: string;
  beige: string;
  lightPink: string;
  black: string;
  white: string;
  grayScale50: string;
  grayScale100: string;
  grayScale700: string;
  grayScale900: string;
}

export const colors: Colors = {
  darkGreen: "#365028",
  lightGreen: "#697928",
  success: "#00B207",
  warning: "#FF8A00",
  error: "#EA4B48",
  rating: "orange",
  Promoção: "#EA4B48",
  Novidade: "#FF8A00",
  MaisVendido: "#2388FF",
  SemEstoque: "#1A1A1A",
  border: "#E6E6E6",
  pink: "#f139ee",
  lightPink: "#d5919f",
  black: "#000000",
  white: "#ffffff",
  beige: "#f4ebd8",
  grayScale50: "#F2F2F2",
  grayScale100: "#E6E6E6",
  grayScale700: "#4D4D4D",
  grayScale900: "#1A1A1A",
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
