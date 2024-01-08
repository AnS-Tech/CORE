import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const DrawerCartContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
`;

export const Line = styled.div`
  width: inherit;
  height: 2px;
  margin-left: -40px;
  background-color: ${colors.grayScale300};
`;

export const TopDescriptionContent = styled.div`
  width: inherit;
  padding-bottom: 25px;
  text-align: left;

  p {
    font-size: 1.2rem;
    color: ${colors.vivendaColors.c6};
    margin: 0;
  }
`;

export const DrawerCartItemWrapper = styled.div`
  width: inherit;
  height: 100%;
  padding-top: 30px;

  display: flex;
  flex-direction: column;

  gap: 10px;

  overflow-y: scroll;
`;

export const DrawerCartCTAContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 225px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 20px;
`;

export const CTATotalPriceContainer = styled.div`
  width: 100%;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductPrice = styled.h2`
  color: ${colors.vivendaColors.c7};
  margin: 0;
  margin-right: 25px;
`;

export const TotalContext = styled.div`
  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${colors.vivendaColors.c6};
    margin: 0;
  }
`;

export const CallToAction = styled.button`
  max-width: 364px;
  width: 100% !important;
  height: 64px !important;
  background-color: ${colors.darkGreen};
  color: ${colors.grayScale50};
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.lightGreen};
  }
`;
