import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const DrawerCartContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 30px;
`;

export const Line = styled.div`
  width: inherit;
  height: 2px;
  margin-left: -60px;
  background-color: ${colors.grayScale300};
`;

export const TopDescriptionContent = styled.div`
  width: inherit;

  text-align: left;

  p {
    font-size: 1.2rem;
    color: ${colors.vivendaColors.c6};
  }
`;

export const DrawerCartItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px 0;
`;

export const DrawerCartCTAContainer = styled.div`
  width: inherit;

  display: flex;
  flex-direction: column;

  padding: 20px 0;
`;

export const CTATotalPriceContainer = styled.div`
  width: inherit;

  display: inline-flex;
`;

export const ProductPrice = styled.h2`
  color: ${colors.vivendaColors.c7};
  margin: 0;
`;

export const CallToAction = styled.button`
  width: 364px;
  height: 64px;

  border-radius: 8px;
`;
