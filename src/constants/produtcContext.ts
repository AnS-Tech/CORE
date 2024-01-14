import { ProductContextInterface } from "src/interfaces/product";

export const defaultValuesProductContext: ProductContextInterface = {
  products: [],
  favorites: [],
  cart: [],
  isCartOpen: false,
  addToCart: () => {
    return {};
  },
  removeFromCart: () => {
    return {};
  },
  plusOneToCart: () => {
    return {};
  },
  minusOneToCart: () => {
    return {};
  },
  addToFavorites: () => {
    return {};
  },
  removeFromFavorites: () => {
    return {};
  },
  addProductToList: () => {
    return {};
  },
  setIsCartOpen: () => {
    return {};
  },
};
