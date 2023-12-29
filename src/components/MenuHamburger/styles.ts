import { colors } from "src/styles/tokens";
import styled from "styled-components";
import { SideMenuProps } from "./interfaces";

export const MenuToggle = styled.div`
  display: none;
  transform: translateY(-50%);
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: ${colors.vivendaColors.c6};
    margin-bottom: 4px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 920px) {
    display: flex;
  }
`;

export const SideMenu = styled.div<SideMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: ${colors.vivendaColors.c6};
  z-index: 998;
  padding: 15px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: left;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  p {
    color: ${colors.vivendaColors.c3};
    margin-bottom: 20px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  cursor: pointer;
`;

export const ContentMenu = styled.div`
  a {
    text-decoration: none;
    color: ${colors.vivendaColors.c3};
  }

  font-size: 20px;
`;

export const MenuOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid ${colors.vivendaColors.c4};
  cursor: pointer;

  &:hover {
    background-color: ${colors.vivendaColors.c4};
  }

  a {
    color: ${colors.vivendaColors.c3};
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const IconContent = styled.div`
  margin-right: 10px;
  font-size: 20px;
`;
