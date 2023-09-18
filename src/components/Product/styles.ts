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
  display: block;
`;

export const ProductName = styled.p<ProductNameProps>`
  ${({ textColor }) => css`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
    color: ${textColor};
  `}
`;

export const ProductPrice = styled.h3<ProductPriceProps>`
  ${({ priceColor }) => css`
    font-size: 20px;
    font-weight: 700;
    line-height: 10px;
    color: ${priceColor};
  `}
`;

export const CartContainer = styled.button<CartContainerProps>`
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
