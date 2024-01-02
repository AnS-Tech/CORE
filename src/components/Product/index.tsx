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
import { CartButton } from "../CartButton";
import { WishList } from "../WishList";
import { QuickView } from "../QuickView";
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

  productOffer = nProductPrice - nProductPrice * (parseInt(promoStatus) / 100);

  const stock = verifyStock(product?.metadata?.estoque);

  return (
    <ProductStyled backgroundColor={backgroundColor}>
      <ProductImageWrapper>
        <ProductImage
          src={product.image[0]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
        <WrapperTag>{<Tag {...{ status, promoStatus }} />}</WrapperTag>

        <ActionButtonWrapper className="actions-product-card-div">
          <WishList />

          <QuickView
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
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName sizeStatus={sizeStatus} textColor={textColor}>
          {product.name}
        </ProductName>
        <InfoWrapper>
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

          <CartButton>Comprar</CartButton>
        </InfoWrapper>

        <Tag status={stock.status} />
      </ProductInfo>
    </ProductStyled>
  );
};
