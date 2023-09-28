import Image from "next/image";
import { colors, theme } from "src/styles/tokens";
import styled, { css } from "styled-components";
import { CartButtonProps } from "./interfaces";

export const CartContainer = styled.button<CartButtonProps>`
  ${({ cartContainerColor }) => css`
    background-color: ${cartContainerColor};
  `}
  &:hover {
    background-color: ${colors.success};
  }

  display: flex;
  align-items: center;
  justify-content: center;

  width: 43px;
  height: 43px;
  border-radius: 2rem;

  border: none;
  cursor: pointer;
`;

export const CartContainerSelected = styled(CartContainer)`
  background-color: ${colors.success};
  &:hover {
    background-color: ${theme.dark.green};
  }
`;

export const CartIcon = styled(Image)``;
