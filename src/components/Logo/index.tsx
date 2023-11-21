import Image from "next/image";
import { LogoStyled, TextLogo } from "./styles";
import logoPlant from "../../styles/svgs/plantLogo.svg";

export const Logo = () => {
  return (
    <LogoStyled>
      <Image src={logoPlant} width={32} height={32} alt="plant image" />
      <TextLogo>Vivenda Natureza</TextLogo>
    </LogoStyled>
  );
};
