import { ProductProps } from "./interfaces";
import {
  ActionButtonWrapper,
  InfoWrapper,
  ProductImage,
  ProductImageWrapper,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductStyled,
  WrapperTag,
} from "./styles";
import { Tag } from "../Tag";
import { CartButton } from "../CartButton";
import { WishList } from "../WishList";
import { QuickView } from "../QuickView";
import { verifyStock } from "./utils";

export const Product = ({ product }: ProductProps) => {
  const stock = verifyStock(product?.metadata?.estoque);

  return (
    <ProductStyled>
      <ProductImageWrapper>
        <ProductImage
          haveStock={stock.withStock}
          src={product.image[0]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
        <WrapperTag>{<Tag />}</WrapperTag>

        <ActionButtonWrapper className="actions-product-card-div">
          <WishList {...{ product }} />
          <QuickView {...{ product }} />
        </ActionButtonWrapper>
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <InfoWrapper>
          <ProductPrice>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            &nbsp;
          </ProductPrice>

          <CartButton {...{ product }}>Comprar</CartButton>
        </InfoWrapper>

        <Tag status={stock.status} />
      </ProductInfo>
    </ProductStyled>
  );
};
