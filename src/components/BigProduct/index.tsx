import { colors, size } from "src/styles/tokens";
import { ProductProps } from "../Product/interfaces";
import {
  BigActionButtonWrapper,
  BigProductImage,
  BigProductStyled,
} from "./styles";
import { ProductImageWrapper, WrapperTag } from "../Product/styles";

import product5n from "src/styles/images/Product-5n.png";
import { Tag } from "../Tag";
import { useState } from "react";
import { WishList } from "../WishList";
import { QuickView } from "../QuickView";
import { CartButton } from "../CartButton";
import { CartContainer } from "../CartButton/styles";

export const BigProduct: React.FC<ProductProps> = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  productName = null,
  status = null,
  promoStatus = "5",
  priceColor = colors.grayScale900,
  productPrice = null,
  productOffer = null,
  sizeStatus = null,
}) => {
  return (
    <BigProductStyled backgroundColor={backgroundColor}>
      <ProductImageWrapper>
        <BigProductImage
          src={product5n}
          alt={`ProductName`}
          width={size.imageProduct.width[sizeStatus]}
          height={size.imageProduct.height[sizeStatus]}
        />
        <WrapperTag>
          {<Tag status={status} promoStatus={promoStatus} />}
        </WrapperTag>

        <BigActionButtonWrapper>
          <WishList />
          <CartButton children={"Adicionar ao Carrinho"} />
          <QuickView />
        </BigActionButtonWrapper>
      </ProductImageWrapper>
    </BigProductStyled>
  );
};
