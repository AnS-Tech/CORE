import { ProductInterface } from "src/interfaces/product";

export interface CartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  product: ProductInterface;
}

export interface CartButtonContainerStyledProps {
  isActive: boolean;
}
