import React, { useEffect, useRef } from "react";
import { ModalProps } from "./interfaces";
import { IoClose } from "react-icons/io5";
import * as S from "./styles";
import { colors } from "src/styles/tokens";

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <S.ModalOverlay isOpen={isOpen}>
      <S.ModalContainer ref={modalRef}>
        <S.CloseButton>
          <IoClose
            id="close-button-modal"
            color={colors.vivendaColors.c6}
            onClick={onClose}
          />
        </S.CloseButton>
        {children}
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};
