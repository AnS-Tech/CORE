import { ProductInterface } from "src/interfaces/product";

export interface WishListContainerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  product: ProductInterface;
}

export interface WishListContainerStyledProps {
  isFavorited: boolean;
}
