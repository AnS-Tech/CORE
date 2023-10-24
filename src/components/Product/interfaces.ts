type status = "" | "Promoção" | "Novidade" | "MaisVendido" | "SemEstoque";
type promoStatus = "5" | "10" | "25" | "50";
type sizeStatus = "small" | "medium" | "large";

export interface ProductProps 
{
  backgroundColor?: string;
  status?: status;
  promoStatus?: promoStatus;
  textColor?: string;
  productName?: string;
  priceColor: string;
  productPrice?: string;
  productOffer?: number;
  sizeStatus?: sizeStatus;
  children?: React.ReactNode;
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
