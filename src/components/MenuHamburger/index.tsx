import { useEffect, useRef, useState } from "react";
import {
  CloseButton,
  ContentMenu,
  IconContent,
  MenuOption,
  MenuToggle,
  SideMenu,
} from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import { colors } from "src/styles/tokens";
import { menuOptions } from "./constants";
import Link from "next/link";
import Image from "next/image";
import { IconBase } from "react-icons";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event: MouseEvent) => {
    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <>
      <MenuToggle onClick={toggleMenu}>
        {" "}
        <span
          style={{
            transform: isOpen ? "rotate(-45deg) translate(-5px, 6px)" : "none",
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span style={{ opacity: isOpen ? 0 : 1 }} />
        <span
          style={{
            transform: isOpen ? "rotate(45deg) translate(-5px, -6px)" : "none",
            opacity: isOpen ? 0 : 1,
          }}
        />
      </MenuToggle>
      <SideMenu ref={sideMenuRef} isOpen={isOpen}>
        <CloseButton onClick={handleMenuClose}>
          <IoCloseSharp color={colors.vivendaColors.c2} />
        </CloseButton>
        <ContentMenu>
          {menuOptions.map((option, key) => (
            <Link href={option.path} key={key}>
              <MenuOption>
                <IconContent>{option.icon}</IconContent>
                {option.label}
              </MenuOption>
            </Link>
          ))}
        </ContentMenu>
      </SideMenu>
    </>
  );
};
