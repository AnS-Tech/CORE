import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100%;
  height: calc(100%-1rem);
  max-height: 100%;

  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  justify-content: center;
  align-items: center;

  inset: 0;
`;

export const ModalStyledContainer = styled.div`
  position: relative;

  width: 100%;
  max-width: 1320px;
  max-height: 100%;

  display: flex;
`;
