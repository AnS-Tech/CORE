import Link from "next/link";
import * as S from "./styles";
import { FaPhoneVolume } from "react-icons/fa6";
import { BContent, MenuContent } from "./content";

export const Bottom = () => {
  return (
    <S.Container>
      <S.Body>
        <S.MenuList>
          {MenuContent.map(({ href, index, menu }) => {
            return (
              <BContent index={index} key={index} href={href} menu={menu} />
            );
          })}
        </S.MenuList>

        <S.CallNow>
          <FaPhoneVolume />
          <Link href="tel:+5584991745274">84 99174-5274</Link>
        </S.CallNow>
      </S.Body>
    </S.Container>
  );
};
