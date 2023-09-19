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
export const ProductImageWrapper = styled.div`
  position: relative;
`;

export const ProductImage = styled(Image)`
  padding: 5px;
`;

export const TagStyled = styled.span``;

export const ProductInfo = styled.div`
  position: relative;
  padding: 0 12px;
`;

export const InfoWrapper = styled.div`
  padding: 20px 0 0 0;
`;

export const ProductName = styled.p<ProductNameProps>`
  ${({ textColor }) => css`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
    color: ${textColor};
    margin: 0;
  `}
`;

export const ProductPrice = styled.h3<ProductPriceProps>`
  display: inline-block;
  ${({ priceColor }) => css`
    font-size: 20px;
    font-weight: 700;
    line-height: 5px;
    color: ${priceColor};
  `}
`;

export const ProductPriceDotted = styled(ProductPrice)<ProductPriceProps>`
  text-decoration: line-through;
  opacity: 0.5;
  margin: 0;
`;

export const CartContainer = styled.button<CartContainerProps>`
  ${({ cartContainerColor }) => css`
    position: absolute;
    bottom: 2.2rem;
    right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 43px;
    height: 43px;
    border-radius: 2rem;

    background-color: ${cartContainerColor};
    border: none;
    cursor: pointer;
  `}
`;

export const CartIcon = styled(Image)``;

export const WrapperTag = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  display: flex;
`;
