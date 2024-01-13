import { colors } from "src/styles/tokens";
import styled, { css } from "styled-components";
import { WishListContainerStyledProps } from "./interfaces";

export const WishListContainer = styled.button<WishListContainerStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 50%;

  background-color: ${colors.white};
  border: none;
  cursor: pointer;

  @media (min-width: 950px) {
    &:hover {
      background-color: ${colors.success};
    }
  }

  ${({ isFavorited }) => css`
    background-color: ${isFavorited ? colors.success : colors.white};
    #heart-icon {
      color: ${isFavorited ? colors.white : colors.grayScale900};
    }
  `}
`;
