type status =
  | ""
  | "Promoção"
  | "Novidade"
  | "MaisVendido"
  | "Sem Estoque"
  | "Em Estoque";
type promoStatus = "5" | "10" | "25" | "50";
type sizeStatus = "small" | "medium" | "large";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  metadata?: any;
}

export interface ProductProps {
  backgroundColor?: string;
  status?: status;
  promoStatus?: promoStatus;
  textColor?: string;
  priceColor?: string;
  productOffer?: number;
  sizeStatus?: sizeStatus;
  children?: React.ReactNode;
  product: Product;
}

export interface ProductPropsStyled {
  backgroundColor: string;
  status?: status;
  promoStatus?: promoStatus;
  sizeStatus?: sizeStatus;
}

export interface TagStyledProps {
  status: status;
  promoStatus?: promoStatus;
}

export interface ProductNameProps {
  textColor: string;
  productName?: string;
  sizeStatus?: sizeStatus;
}

export interface ProductPriceProps {
  priceColor: string;
  productPrice?: string;
  productOffer?: number;
  sizeStatus?: sizeStatus;
}
