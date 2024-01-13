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
  addToCart: (product: ProductInterface) => void;
  removeFromCart: (product: ProductInterface) => void;
  addToFavorites: (product: ProductInterface) => void;
  removeFromFavorites: (product: ProductInterface) => void;
  addProductToList: (product: ProductInterface) => void;
}
