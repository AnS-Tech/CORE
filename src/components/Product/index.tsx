import { colors } from "src/styles/tokens";
import { ProductProps } from "./interfaces";
import {
  CartContainer,
  CartIcon,
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
import cartIcon from "src/styles/svgs/cartIcon.svg";
import { Rating } from "../Rating";
import { Tag } from "../Tag";

export const Product: React.FC<ProductProps> = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  productName = null,
  status = null,
  promoStatus = null,
  priceColor = colors.grayScale900,
  productPrice = null,
  productOffer = null,
  cartContainerColor = colors.grayScale50,
}) => {
  productOffer =
    parseFloat(productPrice) -
    parseFloat(productPrice) * (parseInt(promoStatus) / 100);

  return (
    <ProductStyled backgroundColor={backgroundColor}>
      <ProductImageWrapper>
        <ProductImage src={product5n} alt="..." width={254} height={222} />
        <WrapperTag>
          {<Tag status={status} promoStatus={promoStatus} />}
        </WrapperTag>
      </ProductImageWrapper>
      <ProductInfo>
        <InfoWrapper>
          <ProductName textColor={textColor}>{productName}</ProductName>
          {!promoStatus ? (
            <ProductPrice priceColor={priceColor}>
              R${productPrice}
            </ProductPrice>
          ) : (
            <ProductPrice priceColor={priceColor}>
              R${productOffer.toFixed(2)}&nbsp;
              <ProductPriceDotted priceColor={priceColor}>
                R${productPrice}
              </ProductPriceDotted>
            </ProductPrice>
          )}
          <CartContainer cartContainerColor={cartContainerColor}>
            <CartIcon src={cartIcon} width={20} height={20} alt="..." />
          </CartContainer>
        </InfoWrapper>

        <Rating />
      </ProductInfo>
    </ProductStyled>
  );
};
