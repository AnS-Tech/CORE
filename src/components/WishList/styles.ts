import Image from "next/image";
import { colors } from "src/styles/tokens";
import styled, { css } from "styled-components";

interface WishListContainerProps {
  wishSelected: boolean;
}

export const WishListContainer = styled.button<WishListContainerProps>`
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

  ${({ wishSelected }) => css`
    background-color: ${wishSelected ? colors.success : colors.white};
    color: ${wishSelected ? colors.white : colors.grayScale900};
  `}
`;

export const WishIcon = styled(Image)``;
