import { CartItemInterface, ProductInterface } from "src/interfaces/product";
import { isEmpty } from "./isEmpty";

export const getTotalPrice = (cart: CartItemInterface[]) => {
  if (isEmpty(cart)) {
    return "R$ 0,00";
  }

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return totalPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export const getTotalCart = (cart: CartItemInterface[]) => {
  if (isEmpty(cart)) {
    return 0;
  }
  return cart.length;
};

export const getTotalFavorites = (favorites: ProductInterface[]) => {
  if (isEmpty(favorites)) {
    return 0;
  }
  return favorites.length;
};
