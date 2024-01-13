import { colors } from "src/styles/tokens";
import styled from "styled-components";
import { CartContainer } from "../CartButton/styles";
import { BigCartButtonPropsStyled } from "./interface";

export const BigCartContainer = styled(CartContainer)<BigCartButtonPropsStyled>`
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
