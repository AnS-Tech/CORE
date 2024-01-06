import React from "react";
import { DrawerProps } from "./interfaces";
import * as S from "./styles";
export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <S.DrawerOverlay isOpen={isOpen}>
      <S.DrawerContainer isOpen={isOpen}>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        {children}
      </S.DrawerContainer>
    </S.DrawerOverlay>
  );
};
