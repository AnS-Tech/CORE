import { breakpoints, colors, size, theme } from "src/styles/tokens";
import styled, { css } from "styled-components";
import { CartButtonProps } from "../CartButton/interfaces";
import { CartContainer } from "../CartButton/styles";

export const BigCartContainer = styled(CartContainer)<CartButtonProps>`
  height: 34px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 12px;

  #bag-icon {
    :hover {
      cursor: pointer;
      color: ${colors.white};
    }
  }

  ${({ clickButton, cartContainerColor }) => css`
    ${clickButton &&
    css`
      background-color: ${colors.success};
      color: ${colors.white};
      &:hover {
        background-color: ${theme.dark.green};
      }
    `}
  `}
`;
