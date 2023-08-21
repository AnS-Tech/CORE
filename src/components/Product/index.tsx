import { colors } from "src/styles/tokens";
import { ProductProps } from "./interfaces";
import {
  ProductImage,
  ProductInfo,
  ProductName,
  ProductStyled,
} from "./styles";

import product5n from "src/styles/images/Product-5n.png";

export const Product: React.FC<ProductProps> = ({
  children,
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  productName = null,
}) => {
  return (
    <ProductStyled backgroundColor={backgroundColor}>
      <ProductImage src={product5n} alt="..." width={254} height={222} />
      <ProductInfo>
        <ProductName textColor={textColor}>{productName}</ProductName>
        {children}
      </ProductInfo>
    </ProductStyled>
  );
};
