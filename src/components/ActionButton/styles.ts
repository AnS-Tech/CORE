import { styled, css } from "styled-components";
import { CartContainerProps } from "./interfaces";
import Image from "next/image";
import { colors } from "src/styles/tokens";

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 43px;
  height: 43px;
  border-radius: 2rem;

  background-color: ${colors.white};
  border: none;
  cursor: pointer;
`;

export const CartContainerWithHover = styled(CartContainer)<CartContainerProps>`
  position: absolute;
  bottom: 2.2rem;
  right: 1rem;
  ${({ cartContainerColor }) => css`
    background-color: ${cartContainerColor};
  `}
  &:hover {
    background-color: ${colors.success};
  }
`;

export const CartIcon = styled(Image)``;
