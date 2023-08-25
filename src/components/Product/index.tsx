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
  ProductStyled,
  RatingContainer,
  StarRating,
} from "./styles";

import product5n from "src/styles/images/Product-5n.png";
import cartIcon from "src/styles/svgs/cartIcon.svg";
import starRating from "src/styles/svgs/starRating.svg";

export const Product: React.FC<ProductProps> = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  productName = null,
  priceColor = colors.grayScale900,
  productPrice = null,
  cartContainerColor = colors.grayScale50,
}) => {
  return (
    <ProductStyled backgroundColor={backgroundColor}>
      <ProductImageWrapper>
        <ProductImage src={product5n} alt="..." width={254} height={222} />
      </ProductImageWrapper>
      <ProductInfo>
        <InfoWrapper>
          <ProductName textColor={textColor}>{productName}</ProductName>
          <ProductPrice priceColor={priceColor}>{productPrice}</ProductPrice>
          <CartContainer cartContainerColor={cartContainerColor}>
            <CartIcon src={cartIcon} width={20} height={20} alt="..." />
          </CartContainer>
        </InfoWrapper>

        <RatingContainer>
          <StarRating src={starRating} alt="..." width={12} height={12} />
          <StarRating
            src={starRating}
            alt="..."
            width={12}
            height={12}
          />
          <StarRating src={starRating} alt="..." width={12} height={12} />
          <StarRating src={starRating} alt="..." width={12} height={12} />
          <StarRating src={starRating} alt="..." width={12} height={12} />
        </RatingContainer>
      </ProductInfo>
    </ProductStyled>
  );
};
