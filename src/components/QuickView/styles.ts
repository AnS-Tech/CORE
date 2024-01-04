import styled from "styled-components";
import { colors, size, theme } from "src/styles/tokens";
import Image from "next/image";

const sizesModal = {
  small: "240px",
  medium: "300px",
  large: "350px",
};

const breakpoints = {
  tablet: "770px",
  mobileLarge: "425px",
};

export const QuickViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 1320px;
  max-height: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 5vw 0 0 0;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    padding: 0 0 0 0;
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

  @media (max-width: ${breakpoints.tablet}) {
    width: 90vw;
    height: 65vw;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 100vw;
    height: calc(100vw);
  }
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px 0 0 4px;

  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 0;
  }
`;

export const QuickViewInforContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${sizesModal.large};
  height: ${sizesModal.large};
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 90vw;
    position: inherit;
  }
`;

export const QuickViewProductName = styled.h1`
  width: 85%;
  font-size: ${size.s4};
  font-style: normal;
  font-weight: 600;
  color: ${colors.vivendaColors.c6};
  text-overflow: ellipsis;
  margin: 0 !important;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${size.s5} !important;
    width: 100%;
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${size.s4} !important;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.grayScale100};
  margin-bottom: 10px;
`;

export const InfoContainer = styled.div`
  font-size: ${size.s1};
  display: flex;
  flex-direction: column;
  gap: 10px;

  .description-quickview {
    max-height: 100px;
    overflow: auto;
  }
  @media (max-width: ${breakpoints.tablet}) {
    .description-quickview {
      max-height: calc((100vh - 100vw) * 0.3);
    }
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: space-between;

    @media (max-width: ${breakpoints.mobileLarge}) {
      .wish-list-quickview {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90vw;
    bottom: 20px;
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
