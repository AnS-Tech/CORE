import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    to top,
    ${colors.vivendaColors.c4} 0%,
    ${colors.vivendaColors.c3} 80%
  );
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
