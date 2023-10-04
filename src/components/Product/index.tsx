import { colors, size, theme } from "src/styles/tokens";
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
import { useState } from "react";
import { CartButton } from "../CartButton";
import { WishList } from "../WishList";
import { QuickView } from "../QuickView";

export const Product: React.FC<ProductProps> = ({
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
  const [showActionButton, setShowActionButton] = useState<boolean>();

  productOffer = nProductPrice - nProductPrice * (parseInt(promoStatus) / 100);

  return (
    <ProductStyled backgroundColor={backgroundColor}>
      <ProductImageWrapper
        onMouseEnter={() => setShowActionButton(true)}
        onMouseLeave={() => setShowActionButton(false)}
      >
        <ProductImage
          src={product5n}
          alt={`${ProductName}`}
          width={size.imageProduct.width[sizeStatus]}
          height={size.imageProduct.height[sizeStatus]}
        />
        <WrapperTag>
          {<Tag status={status} promoStatus={promoStatus} />}
        </WrapperTag>
        {showActionButton && (
          <div style={{ position: "absolute", top: "0.8rem", right: "0.8rem" }}>
            <ActionButtonWrapper>
              <div style={{ marginBottom: "6px" }}>
                <WishList />
              </div>
              <QuickView />
            </ActionButtonWrapper>
          </div>
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
          <div
            style={{ position: "absolute", bottom: "2.2rem", right: "1rem" }}
          >
            <CartButton />
          </div>
        </InfoWrapper>

        <Rating />
      </ProductInfo>
    </ProductStyled>
  );
};
