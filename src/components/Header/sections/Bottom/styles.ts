import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #333333;
  height: 60px;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Body = styled.div`
  width: 96%;
  max-width: 1320px;
  height: inherit;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuList = styled.ul`
  height: inherit;

  display: flex;
  align-items: center;
  gap: 32px;

  list-style-type: none;
`;

export const MenuOption = styled.li`
  height: inherit;

  position: relative;

  display: flex;
  align-items: center;
  gap: 4px;

  * {
    color: inherit;
    text-decoration: none;

    &:hover {
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
