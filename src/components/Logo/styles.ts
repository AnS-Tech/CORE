import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;

  img {
    width: 64px;
    height: 64px;
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    img {
      width: 48px;
      height: 48px;
    }
  }
`;

export const TextLogo = styled.h1`
  color: ${colors.vivendaColors.c7};
`;
