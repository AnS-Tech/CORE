import { colors } from "src/styles/tokens";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
`;

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
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

  @media (max-width: 770px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 0;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1002;
  cursor: pointer;

  #close-button-modal {
    color: ${colors.vivendaColors.c6};
    font-size: 20px;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    top: calc(10vw);
    right: calc(10vw);
    border-radius: 50%;
    border: 0.5px solid ${colors.grayScale100};
  }
`;
