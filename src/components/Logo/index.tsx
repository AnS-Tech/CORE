import Image from "next/image";
import { LogoStyled, TextLogo } from "./styles";
import logoPlant from "../../styles/images/vn-cf.png";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();
  return (
    <LogoStyled
      id="logo"
      onClick={() => {
        router.push("/");
      }}
    >
      <Image src={logoPlant} alt="Logo Vivenda Natureza" />
      <TextLogo>Vivenda Natureza</TextLogo>
    </LogoStyled>
  );
};
