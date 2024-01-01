import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
`;

export const CloseButton = styled.div`
  width: 25px;
  height: 25px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1002;

  cursor: pointer;

  font-size: 20px;

  #close-button-modal {
    color: ${colors.vivendaColors.c3};
    margin: 0;
    padding: 0;
  }
`;
