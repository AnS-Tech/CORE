import styled from "styled-components";

export const Homepage = styled.main`
  height: inherit;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  @media (max-width: 524px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 6px;
  }
`;