import { ProductInterface } from "src/interfaces/product";

export interface BigCartButtonProps {
  product: ProductInterface;
  children?: React.ReactNode;
}

export interface BigCartButtonPropsStyled {
  isActive: boolean;
}
