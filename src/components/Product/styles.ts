import { css, styled } from "styled-components";
import {
  ProductNameProps,
  ProductPriceProps,
  ProductPropsStyled,
} from "./interfaces";
import Image from "next/image";
import { colors, size } from "src/styles/tokens";

export const ProductStyled = styled.div<ProductPropsStyled>`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  background-color: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 8px;

  .actions-product-card-div {
    transition: all 0.25s ease-in-out;
    opacity: 0;
  }

  &:hover {
    .actions-product-card-div {
      right: 0.8rem;
      opacity: 1;
    }
  }

  @media (min-width: 950px) {
    &:hover {
      box-shadow: 2px 2px 3px ${colors.vivendaColors.c6}40;
    }
  }
`;
export const ProductImageWrapper = styled.div`
  position: relative;
  height: 206px;
  border-radius: 8px 8px 0 0;

  @media (max-width: 374px) {
    height: 250px;
  }
`;

export const ProductImage = styled(Image)<{ haveStock: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  cursor: pointer;

  filter: ${({ haveStock }) => (haveStock ? "none" : "grayscale(100%)")};
`;

export const ActionButtonWrapper = styled.div`
  transition: all 0.25s ease-in-out;
  top: 0.8rem;
  right: 0rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ProductInfo = styled.div`
  width: 100%;
  position: relative;
  padding: 12px 13px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled.p<ProductNameProps>`
  font-size: ${size.s1};
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  color: black;
  margin: 0;
  height: 20px;
  width: calc(100% - 75px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (min-width: 950px) {
    &:hover {
      p {
        overflow: visible;
        white-space: normal;
        background-color: ${colors.white};
        padding-right: 0.5rem;
        height: auto;
        position: absolute;
      }
    }
  }

  @media (max-width: 950px) {
    &:active {
      overflow: visible;
      white-space: normal;
    }
  }
`;

export const ProductPrice = styled.h3<ProductPriceProps>`
  display: inline-block;
  font-size: ${size.s3};
  color: ${colors.black};
  font-weight: 700;
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

export const StockStatus = styled.div`
  font-style: italic;
  font-size: 10px;
  color: #00000054;
`;
