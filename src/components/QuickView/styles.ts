import styled from "styled-components";
import { colors } from "src/styles/tokens";
import Image from "next/image";

export const QuickViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  max-width: 1320px;
  max-height: 100%;
`;

export const QuickViewImageWrapper = styled.div`
  width: 300px;
  height: 300px;

  position: relative;
  border-radius: 8px;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const QuickViewInforContent = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 300px;
`;

export const QuickViewProductName = styled.h1`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 35px;
  color: ${colors.vivendaColors.c6};
  height: 20px;

  text-overflow: ellipsis;
`;
