import { colors } from "src/styles/tokens";
import { ProductProps } from "./interfaces";
import {
  InfoWrapper,
  ProductImage,
  ProductImageWrapper,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductStyled,
} from "./styles";

import product5n from "src/styles/images/Product-5n.png";

export const Product: React.FC<ProductProps> = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  productName = null,
  priceColor = colors.grayScale900,
  productPrice = null,
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
        </InfoWrapper>
      </ProductInfo>
    </ProductStyled>
  );
};
