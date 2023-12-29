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

import { Tag } from "../Tag";
import { useState } from "react";
import { CartButton } from "../CartButton";
import { WishList } from "../WishList";
import { ProductModal } from "../ProductModal";
import { verifyStock } from "./utils";

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

  const stock = verifyStock(product?.metadata?.estoque);

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
              <ProductModal
                {...{
                  product,
                  backgroundColor,
                  priceColor,
                  productOffer,
                  promoStatus,
                  sizeStatus,
                  textColor,
                  status,
                }}
              />
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

        <Tag status={stock.status} />
      </ProductInfo>
    </ProductStyled>
  );
};
