import { css, styled } from "styled-components";
import {
  ProductNameProps,
  ProductPriceProps,
  ProductPropsStyled,
} from "./interfaces";
import Image from "next/image";
import { colors, size } from "src/styles/tokens";

export const ProductStyled = styled.div<ProductPropsStyled>`
  ${({ backgroundColor }) => css`
    display: inline-flex;
    flex-direction: column;
    background-color: ${backgroundColor};
    border: 1px solid ${colors.white};
    border-radius: 8px;
    padding-bottom: 15px;

    &:hover {
      box-shadow: 2px 2px 3px ${colors.vivendaColors.c6}40;
    }
  `}
`;
export const ProductImageWrapper = styled.div`
  padding-inline: 5px;
  position: relative;
  height: 200px;
  border-radius: 8px 8px 0 0;
  @media (max-width: 920px) {
    height: 250px;
  }
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  cursor: pointer;
`;

export const ActionButtonWrapper = styled.div`
  flex-direction: column;
`;

export const ProductInfo = styled.div`
  position: relative;
  padding: 0 12px;
`;

export const InfoWrapper = styled.div`
  padding: 20px 0 0 0;
`;

export const ProductName = styled.p<ProductNameProps>`
  ${({ textColor, sizeStatus }) => css`
    font-size: ${size.textSize.fontSize[sizeStatus]}
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    color: ${colors.vivendaColors.c6};
    margin: 0;
    height: 20px;
    width: calc(100% - 43px);

    text-overflow: ellipsis;
   
  `}
`;

export const ProductPrice = styled.h3<ProductPriceProps>`
  display: inline-block;
  ${({ priceColor, sizeStatus }) => css`
    font-size: ${size.priceSize.fontSize[sizeStatus]};
    font-weight: ${size.priceSize.fontWeight[sizeStatus]};
    line-height: ${size.priceSize.lineHeight[sizeStatus]};
    color: ${colors.vivendaColors.c6};
  `}
`;

export const ProductPriceDotted = styled(ProductPrice)<ProductPriceProps>`
  text-decoration: line-through;
  opacity: 0.5;
  margin: 0;
`;

export const WrapperTag = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  display: flex;
`;
