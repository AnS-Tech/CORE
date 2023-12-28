import { colors, size } from "src/styles/tokens";
import { ProductProps } from "../Product/interfaces";
import {
  BigActionButtonWrapper,
  BigProductImage,
  BigProductInfo,
  BigProductSpan,
  BigProductStyled,
  DateContent,
  DateWrapper,
  PromoCountdown,
} from "./styles";
import {
  InfoWrapper,
  ProductImageWrapper,
  ProductName,
  ProductPrice,
  ProductPriceDotted,
  WrapperTag,
} from "../Product/styles";

import product5n from "../../styles/images/Product-5n.png";
import { Tag } from "../Tag";
import { WishList } from "../WishList";
import { QuickView } from "../QuickView";
import { BigCartButton } from "../BigCartButton";
import { Rating } from "../Rating";

export const BigProduct: React.FC<ProductProps> = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  status = null,
  promoStatus = "5",
  priceColor = colors.grayScale900,
  productOffer = null,
  sizeStatus = null,
  product,
}) => {
  let nProductPrice = parseFloat(product.price);
  productOffer = nProductPrice - nProductPrice * (parseInt(promoStatus) / 100);

  return (
    <BigProductStyled backgroundColor={backgroundColor}>
      <ProductImageWrapper>
        <BigProductImage
          src={product5n}
          alt={`ProductName`}
          width={size.imageProduct.width[sizeStatus]}
          height={size.imageProduct.height[sizeStatus]}
        />
        <WrapperTag>{<Tag {...{ status, promoStatus }} />}</WrapperTag>

        <BigActionButtonWrapper>
          <WishList />
          <BigCartButton children={"Adicionar ao Carrinho"} />
          <QuickView />
        </BigActionButtonWrapper>
      </ProductImageWrapper>
      <BigProductInfo>
        <InfoWrapper>
          <ProductName {...{ sizeStatus, textColor }}>
            {product.name}
          </ProductName>
          {status !== "Promoção" ? (
            <ProductPrice {...{ sizeStatus, priceColor }}>
              {nProductPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </ProductPrice>
          ) : (
            <ProductPrice {...{ sizeStatus, priceColor }}>
              {productOffer.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              &nbsp;
              <ProductPriceDotted {...{ sizeStatus, priceColor }}>
                {nProductPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </ProductPriceDotted>
            </ProductPrice>
          )}
          <div
            style={{ position: "absolute", bottom: "2.2rem", right: "1rem" }}
          ></div>
        </InfoWrapper>

        <BigProductSpan>
          <Rating />
          &nbsp; (554 avaliações)
        </BigProductSpan>

        {status == "Promoção" && (
          <PromoCountdown>
            <span>Aproveite! A promoção acaba em:</span>
            <DateContent>
              <DateWrapper>
                01
                <span>DIAS</span>
              </DateWrapper>
              <DateWrapper>
                23
                <span>HORAS</span>
              </DateWrapper>
              :
              <DateWrapper>
                34
                <span>MINUTOS</span>
              </DateWrapper>
              :
              <DateWrapper>
                57
                <span>SEGUNDOS</span>
              </DateWrapper>
            </DateContent>
          </PromoCountdown>
        )}
      </BigProductInfo>
    </BigProductStyled>
  );
};
