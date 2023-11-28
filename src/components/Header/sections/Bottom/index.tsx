import Link from "next/link";
import * as S from "./styles";
import { FaPhoneVolume } from "react-icons/fa6";

export const Bottom = () => {
  return (
    <S.Container>
      <S.Body>
        <S.MenuList>
          <S.MenuOption>
            <Link href="/">Flores</Link>
          </S.MenuOption>
          <S.MenuOption>
            <Link href="/">Buquês</Link>
          </S.MenuOption>
          <S.MenuOption>
            <Link href="/">Ocasiões</Link>
          </S.MenuOption>
          <S.MenuOption>
            <Link href="/">Ofertas</Link>
          </S.MenuOption>
          <S.MenuOption>
            <Link href="/">Monte seu Arranjo</Link>
          </S.MenuOption>
        </S.MenuList>

        <S.CallNow>
          <FaPhoneVolume />
          <Link href="tel:+5584991745274">84 99174-5274</Link>
        </S.CallNow>
      </S.Body>
    </S.Container>
  );
};
