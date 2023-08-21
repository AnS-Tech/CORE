import { css, styled } from "styled-components";
import { ProductNameProps, ProductPropsStyled } from "./interfaces";
import Image from "next/image";
import { colors } from "src/styles/tokens";

export const ProductStyled = styled.div<ProductPropsStyled>`
  ${({ backgroundColor }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${backgroundColor};
    border: 1px solid ${colors.grayScale100};
  `}
`;

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

export const ProductName = styled.p<ProductNameProps>`
  ${({ textColor }) => css`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    color: ${textColor};
  `}
`;
