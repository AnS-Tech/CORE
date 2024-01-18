import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const DrawerOverlay = styled.div<{
  isOpen: boolean;
  withOverlay: boolean;
}>`
  transition: all 0.25s ease-in-out;
  z-index: ${(props) => (props.isOpen && props.withOverlay ? "1000" : "-1")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const DrawerContainer = styled.div<{ isOpen: boolean }>`
  transition: all 0.25s ease-in-out;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-428px")};
  z-index: 1000;
  width: 428px;
  height: 100%;
  background-color: ${colors.beige};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  ::-webkit-scrollbar {
    width: 35px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;
