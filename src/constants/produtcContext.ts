import { ProductContextInterface } from "src/interfaces/product";

export const defaultValuesProductContext: ProductContextInterface = {
  products: [],
  favorites: [],
  cart: [],
  addToCart: () => {
    return {};
  },
  removeFromCart: () => {
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
};
