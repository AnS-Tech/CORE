import styled from "styled-components";
import { colors } from "src/styles/tokens";

export const Homepage = styled.main`
  padding: 30px 5px;
  height: inherit;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1550px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  @media (max-width: 1140px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  @media (max-width: 770px) {
    padding: 30px 1px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 6px;
  }
`;
