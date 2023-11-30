import { useEffect, useState } from "react";
import { DownFooter } from "./sections/DownFooter";
import { MainFooter } from "./sections/MainFooter";
import { FooterContent } from "./styles";
import { MobileMainFooter } from "./sections/MobileMainFooter";

export const Footer = () => {
  return (
    <FooterContent>
      <MainFooter />
      <DownFooter />
    </FooterContent>
  );
};
