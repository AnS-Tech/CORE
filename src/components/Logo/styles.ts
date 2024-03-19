import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const LogoStyled = styled.div`
  min-width: 342px;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 64px;
    height: 64px;
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    min-width: unset;
    img {
      width: 48px;
      height: 48px;
    }
  }
`;

export const TextLogo = styled.h1`
  color: ${colors.vivendaColors.c7};
  display: inline-block;
  flex-wrap: nowrap;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;
  white-space: nowrap;
  
  @media (max-width: 1200px) {
    font-size: 26px;
  }

  @media (max-width: 720px) {
    font-size: 22px;
  }

  @media (max-width: 520px) {
    font-size: 18px;
  }

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;
