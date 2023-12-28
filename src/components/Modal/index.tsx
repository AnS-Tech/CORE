import React from "react";
import { ModalProps } from "./interfaces";
import * as S from "./styles";

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <S.ModalOverlay isOpen={isOpen}>
      <S.ModalContainer>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        {children}
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};
