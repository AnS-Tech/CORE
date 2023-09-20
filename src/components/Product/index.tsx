import { colors } from "src/styles/tokens";
import { ProductProps } from "./interfaces";
import {
  ActionButtonWrapper,
  InfoWrapper,
  ProductImage,
  ProductImageWrapper,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductPriceDotted,
  ProductStyled,
  WrapperTag,
} from "./styles";

import product5n from "src/styles/images/Product-5n.png";
import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { ActionButton } from "../ActionButton";
import { useState } from "react";

export const Product: React.FC<ProductProps> = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  productName = null,
  status = null,
  promoStatus = null,
  priceColor = colors.grayScale900,
  productPrice = null,
  productOffer = null,
}) => {
  let nProductPrice = parseFloat(productPrice);
  const [showActionButton, setShowActionButton] = useState<boolean>();

  productOffer = nProductPrice - nProductPrice * (parseInt(promoStatus) / 100);

  return (
    <ProductStyled backgroundColor={backgroundColor}>
      <ProductImageWrapper
        onMouseEnter={() => setShowActionButton(true)}
        onMouseLeave={() => setShowActionButton(false)}
      >
        <ProductImage src={product5n} alt="..." width={254} height={222} />
        <WrapperTag>
          {<Tag status={status} promoStatus={promoStatus} />}
        </WrapperTag>
        {showActionButton && (
          <ActionButtonWrapper>
            <ActionButton status="wishList" />
            <ActionButton status="quickView" />
          </ActionButtonWrapper>
        )}
      </ProductImageWrapper>
      <ProductInfo>
        <InfoWrapper>
          <ProductName textColor={textColor}>{productName}</ProductName>
          {status !== "Promoção" ? (
            <ProductPrice priceColor={priceColor}>
              {nProductPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </ProductPrice>
          ) : (
            <ProductPrice priceColor={priceColor}>
              {productOffer.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              &nbsp;
              <ProductPriceDotted priceColor={priceColor}>
                {nProductPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </ProductPriceDotted>
            </ProductPrice>
          )}
          <ActionButton status="cartIcon" />
        </InfoWrapper>

        <Rating />
      </ProductInfo>
    </ProductStyled>
  );
};
