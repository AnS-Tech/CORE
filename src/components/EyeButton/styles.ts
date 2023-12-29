import styled from "styled-components";
import { WishListContainer } from "../WishList/styles";
import { colors } from "src/styles/tokens";

export const EyeButtonStyled = styled(WishListContainer)`
  #eye-icon {
    width: 20px;
    height: 20px;
  }
  &:hover {
    color: ${colors.white};
  }
`;
