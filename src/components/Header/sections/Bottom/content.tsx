import Link from "next/link";
import * as S from "./styles";

export const menuContent: Array<MenuBottonProps> = [
  {
    index: 1,
    href: "/",
    menu: "Inicio",
  },
  {
    index: 2,
    href: "/favoritos",
    menu: "Favoritos",
  },
  {
    index: 3,
    href: "/carrinho",
    menu: "Carrinho",
  },
  {
    index: 4,
    href: "/sobre",
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
