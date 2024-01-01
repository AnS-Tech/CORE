import Image from "next/image";
import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const WishListContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 43px;
  height: 43px;
  border-radius: 50%;

  background-color: ${colors.white};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.success};
  }
`;
export const WishListContainerSelected = styled(WishListContainer)`
  background-color: ${colors.white};
  &:hover {
    background-color: ${colors.success};
  }
`;

export const WishIcon = styled(Image)``;
