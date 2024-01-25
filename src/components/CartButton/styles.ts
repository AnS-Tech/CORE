import { colors, size } from "src/styles/tokens";
import styled, { css } from "styled-components";
import { CartButtonContainerStyledProps } from "./interfaces";

export const CartContainer = styled.button<CartButtonContainerStyledProps>`
  background-color: ${colors.vivendaColors.c5};
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
  color: ${colors.white};
  border: none;
  cursor: pointer;
  img {
    margin-left: 0.5rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (min-width: 950px) {
    &:hover {
      outline: 1px solid gray;
    }
  }
`;
