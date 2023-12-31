import styled from "styled-components";
import { colors, theme } from "src/styles/tokens";
import Image from "next/image";

export const QuickViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  max-width: 1320px;
  max-height: 100%;
`;

export const QuickViewImageWrapper = styled.div`
  width: 350px;
  height: 350px;

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
  justify-content: space-between;

  width: 350px;
  min-height: 350px;
`;

export const QuickViewProductName = styled.h1`
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 35px;
  color: ${colors.vivendaColors.c6};
  text-overflow: ellipsis;
  flex-shrink: 1;
`;

export const StockWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  font-size: 14px;
`;

export const ModalText = styled.p`
  color: ${colors.vivendaColors.c6};
`;

export const ProductPrice = styled.h3`
  color: ${colors.vivendaColors.c6};
`;

export const Line = styled.div`
  width: 96%;
  height: 2px;
  background-color: ${colors.grayScale100};
`;

export const InfoContainer = styled.div``;

export const CTAContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 15px 0px;

  * {
    flex-shrink: 1;
  }
`;

export const BigCartContainer = styled.button`
  justify-content: center;
  align-items: center;
  gap: 12px;

  #bag-icon {
    :hover {
      cursor: pointer;
      color: ${colors.white};
    }
  }

  background-color: ${colors.success};
  color: ${colors.white};
  &:hover {
    background-color: ${theme.dark.green};
  }
`;
