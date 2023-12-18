import Link from "next/link";
import * as S from "./styles";
import { MenuBottonProps } from "./interfaces";
import { useState } from "react";

export const MenuContent: Array<MenuBottonProps> = [
  {
    index: 1,
    href: "/",
    menu: "Flores",
  },
  {
    index: 2,
    href: "/",
    menu: "Buquês",
  },
  {
    index: 3,
    href: "/",
    menu: "Ocasiões",
  },
  {
    index: 4,
    href: "/",
    menu: "Ofertas",
  },
  {
    index: 5,
    href: "/",
    menu: "Monte seu Arranjo",
  },
];

export const BContent: React.FC<MenuBottonProps> = ({ href, index, menu }) => {
  return (
    <S.MenuOption key={index}>
      <Link href={href}>{menu}</Link>
    </S.MenuOption>
  );
};
