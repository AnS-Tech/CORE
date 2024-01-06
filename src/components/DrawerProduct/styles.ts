import Image from "next/image";
import { colors, size } from "src/styles/tokens";
import styled from "styled-components";

export const DrawerCartItem = styled.div`
  width: 100%;
  height: 104px;

  display: inline-flex;

  gap: 15px;
`;

export const DrawerCartImageWrapper = styled.div`
  width: 104px;
  height: 104px;
  position: relative;
  border-radius: 8px;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const InfoContainer = styled.div`
  width: 60%;
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
`;

export const ProductPrice = styled.h3`
  color: ${colors.vivendaColors.c6};
  margin: 0;
`;
