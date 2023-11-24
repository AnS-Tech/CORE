import { useEffect, useState } from "react";
import { DownFooter } from "./sections/DownFooter";
import { MainFooter } from "./sections/MainFooter";
import { FooterContent } from "./styles";
import { MobileMainFooter } from "./sections/MobileMainFooter";

export const Footer = () => {
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FooterContent>
      {mobileScreen < 1024 ? <MobileMainFooter /> : <MainFooter />}
      <DownFooter />
    </FooterContent>
  );
};
