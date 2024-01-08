import Image from "next/image";
import { colors, size, theme } from "src/styles/tokens";
import styled, { css } from "styled-components";
import { CartButtonProps } from "./interfaces";

export const CartContainer = styled.button<CartButtonProps>`
  ${({ isActive }) => css`
    background-color: ${isActive ? colors.success : colors.grayScale100};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
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

export const CartIcon = styled(Image)``;
