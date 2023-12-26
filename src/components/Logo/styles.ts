import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
`;

export const TextLogo = styled.h1`
  color: ${colors.white};
`;
