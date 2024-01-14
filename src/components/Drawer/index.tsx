import React from "react";
import { DrawerProps } from "./interfaces";
import * as S from "./styles";
export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  withOverlay = true,
}) => {
  const drawerRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen && withOverlay) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div>
      <S.DrawerOverlay {...{ isOpen, withOverlay }} />
      <S.DrawerContainer isOpen={isOpen} ref={drawerRef}>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        {children}
      </S.DrawerContainer>
    </div>
  );
};
