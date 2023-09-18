type status = "" | "Promoção" | "Novidade" | "MaisVendido" | "SemEstoque";
type promoStatus = "" | "5%" | "10%" | "25%" | "50%";

export interface ProductProps {
  backgroundColor?: string;
  status?: status;
  promoStatus?: promoStatus;
  span?: string;
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
  promoStatus?: promoStatus;
}

export interface TagStyledProps {
  status: status;
  promoStatus?: promoStatus;
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
