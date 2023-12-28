import { colors, size } from "src/styles/tokens";
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

import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { useState } from "react";
import { CartButton } from "../CartButton";
import { WishList } from "../WishList";
import { QuickView } from "../QuickView";

export const Product: React.FC<ProductProps> = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  status = null,
  promoStatus = "5",
  priceColor = colors.black,
  productOffer = null,
  sizeStatus = null,
  product,
}) => {
  let nProductPrice = parseFloat(product.price);
  const [showActionButton, setShowActionButton] = useState<boolean>();

  productOffer = nProductPrice - nProductPrice * (parseInt(promoStatus) / 100);

  const convertCentsToReal = (value: number) => {
    return value / 100;
  };

  return (
    <ProductStyled backgroundColor={backgroundColor}>
      <ProductImageWrapper
        onMouseEnter={() => setShowActionButton(true)}
        onMouseLeave={() => setShowActionButton(false)}
      >
        <ProductImage
          src={product.image[0]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
        <WrapperTag>{<Tag {...{ status, promoStatus }} />}</WrapperTag>
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
          <ProductName sizeStatus={sizeStatus} textColor={textColor}>
            {product.name}
          </ProductName>

          <ProductPrice {...{ sizeStatus, priceColor }}>
            {nProductPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            &nbsp;
            {status == "Promoção" && (
              <ProductPriceDotted {...{ sizeStatus, priceColor }}>
                {nProductPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </ProductPriceDotted>
            )}
          </ProductPrice>

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
