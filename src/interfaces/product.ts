import { Dispatch, SetStateAction } from "react";
import Stripe from "stripe";

export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  metadata: Stripe.Metadata;
}

export interface CartItemInterface extends ProductInterface {
  quantity: number;
}

export interface ProductContextInterface {
  products: ProductInterface[];
  cart: CartItemInterface[];
  favorites: ProductInterface[];
  isCartOpen: boolean;
  searchValues: {
    value: string;
    products: ProductInterface[];
  };
  addToCart: (product: ProductInterface) => void;
  removeFromCart: (product: ProductInterface) => void;
  plusOneToCart: (product: ProductInterface) => void;
  minusOneToCart: (product: ProductInterface) => void;
  addToFavorites: (product: ProductInterface) => void;
  removeFromFavorites: (product: ProductInterface) => void;
  addProductToList: (product: ProductInterface) => void;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  setSearchValues: Dispatch<
    SetStateAction<{
      value: string;
      products: ProductInterface[];
    }>
  >;
}
