import { css, styled } from "styled-components";
import {
  ProductNameProps,
  ProductPriceProps,
  ProductPropsStyled,
} from "./interfaces";
import Image from "next/image";
import { colors } from "src/styles/tokens";

export const ProductStyled = styled.div<ProductPropsStyled>`
  ${({ backgroundColor }) => css`
    width: 264px;
    display: flex;
    flex-direction: column;
    background-color: ${backgroundColor};
    border: 1px solid ${colors.grayScale100};
  `}
`;
export const ProductImageWrapper = styled.div``;

export const ProductImage = styled(Image)`
  padding: 5px;
`;

export const TagStyled = styled.span``;

export const ProductInfo = styled.div`
  display: inline-flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductName = styled.p<ProductNameProps>`
  ${({ textColor }) => css`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: ${textColor};
  `}
`;

export const ProductPrice = styled.h3<ProductPriceProps>`
  ${({ priceColor }) => css`
    display: flex;
    align-items: flex-start;
    color: ${priceColor};
    gap: 4px;
  `}
`;
