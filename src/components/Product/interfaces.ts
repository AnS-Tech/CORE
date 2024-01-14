import { ProductInterface } from "src/interfaces/product";

export interface ProductProps {
  children?: React.ReactNode;
  product: ProductInterface;
}

export interface ProductPropsStyled {}

export interface TagStyledProps {
  status?: string;
  promoStatus?: string;
}

export interface ProductNameProps {}

export interface ProductPriceProps {}
