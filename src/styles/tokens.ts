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
  EmEstoque: string;
  border: string;
  pink: string;
  beige: string;
  lightPink: string;
  black: string;
  white: string;
  grayScale50: string;
  grayScale100: string;
  grayScale300: string;
  grayScale700: string;
  grayScale900: string;
  vivendaColors: {
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    c5: string;
    c6: string;
    c7: string;
  };
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
  SemEstoque: "#3c3028",
  EmEstoque: "#89934c",
  border: "#E6E6E6",
  pink: "#f139ee",
  lightPink: "#d5919f",
  black: "#000000",
  white: "#ffffff",
  beige: "#f4ebd8",
  grayScale50: "#F2F2F2",
  grayScale100: "#E6E6E6",
  grayScale300: "#989898",
  grayScale700: "#4D4D4D",
  grayScale900: "#1A1A1A",

  vivendaColors: {
    c1: "#365028",
    c2: "#697928",
    c3: "#f4ebd8",
    c4: "#d5bd9c",
    c5: "#f137aa",
    c6: "#3c3028",
    c7: "#89934c",
  },
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

export const size = {
  imageProduct: {
    width: {
      small: 254,
      medium: 527,
      large: 556,
    },
    height: {
      small: 222,
      medium: 446,
      large: 556,
    },
  },
  textSize: {
    fontSize: {
      small: 16,
      medium: 24,
      large: 24,
    },
    fontWeight: {
      small: 400,
      medium: 400,
      large: 400,
    },
    lineHeight: {
      small: 10,
      medium: 36,
      large: 36,
    },
  },
  priceSize: {
    fontSize: {
      small: 20,
      medium: 24,
      large: 32,
    },
    fontWeight: {
      small: 700,
      medium: 700,
      large: 700,
    },
    lineHeight: {
      small: 5,
      medium: 36,
      large: 36,
    },
  },

  desktop: 1300,
  tablet: 770,
  mobile: 550,
  smallMobile: 374,

  s1: "0.775rem",
  s2: "0.875rem",
  s3: "0.9375rem",
  s4: "1rem",
  s5: "1.125rem",
  s6: "1.25rem",
  s7: "1.5rem",
};
