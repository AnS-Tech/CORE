import { DownFooter } from "./sections/DownFooter";
import { MainFooter } from "./sections/MainFooter";
import { FooterContent } from "./styles";

export const Footer = () => {
  return (
    <FooterContent>
      <MainFooter />
      <DownFooter />
    </FooterContent>
  );
};
