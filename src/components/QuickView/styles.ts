import styled from "styled-components";
import { colors, size, theme } from "src/styles/tokens";
import Image from "next/image";

const sizesModal = {
  small: "240px",
  medium: "300px",
  large: "350px",
};

export const QuickViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 1320px;
  max-height: 100%;

  @media (max-width: 770px) {
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 350px) {
    gap: 5px;
  }
`;

export const QuickViewImageWrapper = styled.div`
  width: ${sizesModal.large};
  height: ${sizesModal.large};
  position: relative;
  border-radius: 8px;

  @media (max-width: 525px) {
    width: ${sizesModal.medium};
    height: ${sizesModal.medium};
  }

  @media (max-width: 350px) {
    width: ${sizesModal.small};
    height: ${sizesModal.small};
  }
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const QuickViewInforContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${sizesModal.large};
  height: ${sizesModal.large};
  position: relative;

  @media (max-width: 525px) {
    width: ${sizesModal.medium};
    height: ${sizesModal.medium};
  }

  @media (max-width: 350px) {
    width: ${sizesModal.small};
    height: ${sizesModal.medium};
  }
`;

export const QuickViewProductName = styled.h1`
  width: 85%;
  font-size: ${size.s4};
  font-style: normal;
  font-weight: 600;
  color: ${colors.vivendaColors.c6};
  text-overflow: ellipsis;
  margin: 0;

  @media (max-width: 770px) {
    font-size: ${size.s3} !important;
  }
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
  font-size: ${size.s1};
  margin: 0;
`;

export const ProductPrice = styled.h3`
  color: ${colors.vivendaColors.c6};
  margin: 0;
`;

export const Line = styled.div`
  width: 96%;
  height: 2px;
  background-color: ${colors.grayScale100};
  margin-bottom: 10px;
`;

export const InfoContainer = styled.div`
  font-size: ${size.s1};
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CTAContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: space-between;
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
