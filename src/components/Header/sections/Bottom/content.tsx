import Link from "next/link";
import * as S from "./styles";

export const BContent: React.FC<MenuBottonProps> = ({ href, index, menu }) => {
  return (
    <S.MenuOption key={index}>
      <Link href={href}>{menu}</Link>
    </S.MenuOption>
  );
};
