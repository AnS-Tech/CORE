import { colors } from "src/styles/tokens";
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

  @media (max-width: 530px) {
    .big-cart-button-children {
      display: none;
    }
  }
`;
