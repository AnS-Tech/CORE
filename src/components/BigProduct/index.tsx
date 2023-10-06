import { colors, size } from "src/styles/tokens";
import { ProductProps } from "../Product/interfaces";
import {
  BigActionButtonWrapper,
  BigProductImage,
  BigProductInfo,
  BigProductStyled,
} from "./styles";
import {
  InfoWrapper,
  ProductImageWrapper,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductPriceDotted,
  WrapperTag,
} from "../Product/styles";

import product5n from "src/styles/images/Product-5n.png";
import { Tag } from "../Tag";
import { useState } from "react";
import { WishList } from "../WishList";
import { QuickView } from "../QuickView";
import { BigCartButton } from "../BigCartButton";
import { Rating } from "../Rating";

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
  let nProductPrice = parseFloat(productPrice);
  productOffer = nProductPrice - nProductPrice * (parseInt(promoStatus) / 100);

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
          <BigCartButton children={"Adicionar ao Carrinho"} />
          <QuickView />
        </BigActionButtonWrapper>
      </ProductImageWrapper>
      <BigProductInfo>
        <InfoWrapper>
          <ProductName sizeStatus={sizeStatus} textColor={textColor}>
            {productName}
          </ProductName>
          {status !== "Promoção" ? (
            <ProductPrice sizeStatus={sizeStatus} priceColor={priceColor}>
              {nProductPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </ProductPrice>
          ) : (
            <ProductPrice sizeStatus={sizeStatus} priceColor={priceColor}>
              {productOffer.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              &nbsp;
              <ProductPriceDotted
                sizeStatus={sizeStatus}
                priceColor={priceColor}
              >
                {nProductPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </ProductPriceDotted>
            </ProductPrice>
          )}
          <div
            style={{ position: "absolute", bottom: "2.2rem", right: "1rem" }}
          ></div>
        </InfoWrapper>

        <Rating />
      </BigProductInfo>
    </BigProductStyled>
  );
};
