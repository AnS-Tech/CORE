import Link from "next/link";
import * as S from "./styles";
import { FaPhoneVolume } from "react-icons/fa6";
import { BContent } from "./content";

export const Bottom = () => {
  const MenuContent = [
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
