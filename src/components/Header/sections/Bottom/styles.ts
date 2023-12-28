import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.vivendaColors.c6};
  height: 60px;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Body = styled.div`
  width: 96%;
  max-width: 1320px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;

  list-style-type: none;
`;

export const MenuOption = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;

  * {
    opacity: 1;
    color: inherit;
    text-decoration: none;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const CallNow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  * {
    color: inherit;
    text-decoration: none;
  }
`;
