import { colors, size } from "src/styles/tokens"
import { ProductProps } from "../Product/interfaces"
import { CartProductInfo, CartProductPriceContainer, CartProductStyled } from "./styles"
import product5n from "src/styles/images/Product-5n.png";
import { ProductImage, ProductInfo, ProductName, ProductPrice } from "../Product/styles"
import { Close } from "../Close";

export const CartProduct: React.FC<ProductProps> = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  productName = null,
  status = null,
  priceColor = colors.grayScale900,
  productPrice = null,
  productOffer = null,
  sizeStatus = null,
}) => {

    return (<CartProductStyled {...{backgroundColor}}>
        <ProductImage
        src={product5n}
        alt={productName}
        width={120}
        height={100}
        />
        <CartProductInfo>
        <ProductName {...{sizeStatus, textColor}}>
            {productName}
        </ProductName>
        <CartProductPriceContainer>
            1 un x <strong>{productPrice}</strong>
        </CartProductPriceContainer>
        </CartProductInfo>
        <div style={{marginLeft: "50px"}} />
        <Close />
    </CartProductStyled>)
}