import styled from "styled-components";
import { WishListContainer } from "../WishList/styles";
import { colors } from "src/styles/tokens";

export const EyeButtonStyled = styled.button`
  #eye-icon {
    width: 20px;
    height: 20px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 2rem;

  background-color: ${colors.white};
  border: none;
  cursor: pointer;

  @media (min-width: 950px) {
    &:hover {
      background-color: ${colors.success};
    }
  }
`;
