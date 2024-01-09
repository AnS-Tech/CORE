import Image from "next/image";
import { colors, size } from "src/styles/tokens";
import styled from "styled-components";

export const DrawerCartItem = styled.div`
  width: 98%;
  height: 104px;

  display: inline-flex;

  gap: 15px;

  border-radius: 8px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const DrawerCartImageWrapper = styled.div`
  width: 104px;
  height: 104px;
  position: relative;
  border-radius: 8px;

  &:hover {
    #eye-icon {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;

      z-index: 1001;
      color: transparent;
    }
  }
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const InfoContainer = styled.div`
  width: 70%;
  height: inherit;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const TitleContainer = styled.h2`
  color: ${colors.vivendaColors.c6};
  font-size: ${size.s5};
  text-overflow: ellipsis;
  margin: 0;
`;

export const QuantityItensContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding-bottom: 5px;

  div:nth-child(2) {
    border: 1px solid ${colors.grayScale300}30;
  }
`;

export const ProductPrice = styled.h3`
  color: ${colors.vivendaColors.c6};
  margin: 0;
`;
