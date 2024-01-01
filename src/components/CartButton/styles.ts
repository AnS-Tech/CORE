import Image from "next/image";
import { colors, size, theme } from "src/styles/tokens";
import styled from "styled-components";
import { CartButtonProps } from "./interfaces";

export const CartContainer = styled.button<CartButtonProps>`
  background-color: ${colors.grayScale100};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 5px;
  font-size: ${size.s1};
  font-style: normal;
  font-weight: 700;
  line-height: 16.8px;
  color: ${colors.grayScale900};
  border: none;
  cursor: pointer;
  img {
    margin-left: 0.5rem;
  }

  @media (min-width: 950px) {
    &:hover {
      background-color: ${colors.success};
      color: ${colors.white};
    }
  }

  @media (max-width: 945px) {
    &:active {
      background-color: ${colors.success};
      color: ${colors.white};
    }

    .children-div-button {
      display: none;
    }

    img {
      margin: 0;
    }

    border-radius: 2rem;
    width: 32px;
  }
`;

export const CartContainerSelected = styled(CartContainer)`
  background-color: ${colors.success};

  @media (max-width: 945px) {
    &:active {
      background-color: ${theme.dark.green};
    }

    .children-div-button {
      display: none;
    }

    img {
      margin: 0;
    }
  }

  @media (min-width: 950px) {
    &:hover {
      background-color: ${theme.dark.green};
    }
  }
`;

export const CartIcon = styled(Image)``;
