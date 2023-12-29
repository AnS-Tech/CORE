import Link from "next/link";
import * as S from "./styles";

export const menuContent: Array<MenuBottonProps> = [
  {
    index: 1,
    href: "/",
    menu: "Home",
  },
  {
    index: 2,
    href: "/",
    menu: "Favoritos",
  },
  {
    index: 3,
    href: "/",
    menu: "Carrinho",
  },
  {
    index: 4,
    href: "/",
    menu: "Sobre Nós",
  },
];

export const BContent: React.FC<MenuBottonProps> = ({ href, index, menu }) => {
  return (
    <S.MenuOption key={index}>
      <Link href={href}>{menu}</Link>
    </S.MenuOption>
  );
};
