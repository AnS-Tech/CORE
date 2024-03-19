import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 195px;
  background-color: ${colors.vivendaColors.c3};
  @media (max-width: 1200px) {
    height: 140px;
  }
`;
