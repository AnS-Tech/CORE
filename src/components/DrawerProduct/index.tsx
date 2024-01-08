import { ProductProps } from "../Product/interfaces";
import { Quantity } from "../Quantity";
import * as S from "./styles";

export const DrawerProduct = ({ product }: ProductProps) => {
  return (
    <S.DrawerCartItem>
      <S.DrawerCartImageWrapper>
        <S.ProductImage
          src={product.image[0]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </S.DrawerCartImageWrapper>
      <S.InfoContainer>
        <S.TitleContainer>{product.name}</S.TitleContainer>
        <S.QuantityItensContainer>
          <S.ProductPrice>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </S.ProductPrice>
          <Quantity product={product} />
        </S.QuantityItensContainer>
      </S.InfoContainer>
    </S.DrawerCartItem>
  );
};
