type status = "" | "Promoção" | "Novidade" | "MaisVendido" | "SemEstoque";
type promoStatus = "5" | "10" | "25" | "50";

export interface ProductProps {
  backgroundColor?: string;
  status?: status;
  promoStatus?: promoStatus;
  tag?: string;
  textColor?: string;
  productName?: string;
  priceColor: string;
  productPrice?: string;
  productOffer?: number;
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
  productOffer?: number;
}
