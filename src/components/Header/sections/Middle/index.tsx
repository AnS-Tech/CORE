import { Logo } from "src/components/Logo";
import * as S from "./styles";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";

export const Middle = () => {
  return (
    <S.Container>
      <S.Body>
        <Logo />
        <S.SearchComponent>
          <CiSearch />
          <Input type="search" status="border" placeholder="Pesquisar" />
          <Button size="small">Pesquisar</Button>
        </S.SearchComponent>
        <S.UserServices>
          <GoHeart className="icon" />
          <S.Devider />
          <BsHandbag id="bagIcon" className="icon" />
          <S.InfoCart>
            <span>Carrino</span>
            <span>R$ 129,90</span>
          </S.InfoCart>
        </S.UserServices>
        <GiHamburgerMenu id="hamburguer" />
      </S.Body>
    </S.Container>
  );
};
