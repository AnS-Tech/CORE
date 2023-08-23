import { css, styled } from "styled-components";
import {
  CartContainerProps,
  ProductNameProps,
  ProductPriceProps,
  ProductPropsStyled,
} from "./interfaces";
import Image from "next/image";
import { colors } from "src/styles/tokens";

export const ProductStyled = styled.div<ProductPropsStyled>`
  ${({ backgroundColor }) => css`
    display: inline-flex;
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
  position: relative;
  padding: 0 12px;
`;

export const InfoWrapper = styled.div`
  display: block;
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
    color: ${priceColor};
  `}
`;

export const CartContainer = styled.div<CartContainerProps>`
  ${({ cartContainerColor }) => css`
    position: absolute;
    bottom: 0.7rem;
    right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: 2rem;

    background-color: ${cartContainerColor};
  `}
`;

export const CartIcon = styled(Image)``;
