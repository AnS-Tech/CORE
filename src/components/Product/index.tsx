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
  StockStatus,
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <ProductName>
            <p>{product.name}</p>
          </ProductName>

          <StockStatus>{stock.status}</StockStatus>
        </div>
        <ProductPrice>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          &nbsp;
        </ProductPrice>

        <div
          style={{
            width: "100%",
            display: "inline-flex",
            flexDirection: "column",
          }}
        >
          <CartButton {...{ product }}>Comprar</CartButton>
        </div>
      </ProductInfo>
    </ProductStyled>
  );
};
