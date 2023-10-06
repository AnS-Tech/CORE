import { colors, theme } from "src/styles/tokens";
import styled, { css } from "styled-components";
import { CartButtonProps } from "../CartButton/interfaces";
import { CartContainer } from "../CartButton/styles";

export const BigCartContainer = styled(CartContainer)<CartButtonProps>`
  width: 371px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const BigCartContainerSelected = styled(BigCartContainer)`
  background-color: ${colors.success};
  color: ${colors.white};
  &:hover {
    background-color: ${theme.dark.green};
  }
`;
