import { styled, css } from "styled-components";
import { CartContainerProps } from "./interfaces";
import Image from "next/image";

export const CartContainer = styled.button<CartContainerProps>`
  ${({ cartContainerColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 43px;
    height: 43px;
    border-radius: 2rem;

    background-color: ${cartContainerColor};
    border: none;
    cursor: pointer;
  `}
`;

export const CartIcon = styled(Image)``;
