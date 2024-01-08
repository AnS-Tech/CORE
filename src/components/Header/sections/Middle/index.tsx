import { Logo } from "src/components/Logo";
import * as S from "./styles";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { CiSearch } from "react-icons/ci";
import { colors } from "src/styles/tokens";
import { FaHeart } from "react-icons/fa";
import { HamburgerMenu } from "src/components/MenuHamburger";
import Link from "next/link";
import { DrawerCart } from "src/components/DrawerCart";

export const Middle = () => {
  return (
    <S.Container>
      <S.Body>
        <Logo />
        <S.SearchComponent>
          <CiSearch />
          <Input type="search" placeholder="Pesquisar" />
          <Button size="small">Pesquisar</Button>
        </S.SearchComponent>
        <S.UserServices>
          <Link href={"/favoritos"}>
            <FaHeart className="icon" color={colors.vivendaColors.c5} />
          </Link>

          <S.Devider />

          <DrawerCart />

          <S.InfoCart>
            <span>Carrino</span>
            <span>R$ 129,90</span>
          </S.InfoCart>
        </S.UserServices>
        <HamburgerMenu />
      </S.Body>
    </S.Container>
  );
};
