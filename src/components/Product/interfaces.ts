type status = "Promoção 50%" | "Novidade" | "Mais vendido" | "Sem estoque";

export interface ProductProps {
  backgroundColor?: string;
  status?: status;
  tag?: string;
  textColor?: string;
  productName?: string;
  priceColor: string;
  productPrice?: string;
  cartContainerColor?: string;
}

export interface ProductPropsStyled {
  backgroundColor: string;
  status?: status;
}

export interface TagStyledProps {
  status: status;
}

export interface ProductNameProps {
  textColor: string;
  productName?: string;
}

export interface ProductPriceProps {
  priceColor: string;
  productPrice?: string;
}

export interface CartContainerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  cartContainerColor?: string;
}
