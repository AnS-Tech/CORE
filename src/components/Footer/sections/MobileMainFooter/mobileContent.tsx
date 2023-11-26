import Link from "next/link";
import { ContentMainFooter } from "../MainFooter/styles";
import { FaChevronRight } from "react-icons/fa";
import {
  ContentMobileFooter,
  ContentMobileMenus,
  LineBorder,
  MobileMainFooterStyled,
} from "./styles";
import { useState } from "react";

export const MobileMainContent = (content) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <MobileMainFooterStyled key={content.index}>
      <ContentMobileFooter onClick={() => setOpenMenu(!openMenu)}>
        <h4>{content.title}</h4>
        <FaChevronRight />
      </ContentMobileFooter>

      <LineBorder />
      {openMenu && (
        <ContentMobileMenus>
          <ContentMainFooter>
            <Link href="/">{content.link1}</Link>
          </ContentMainFooter>
          <ContentMainFooter>
            <Link href="/">{content.link2}</Link>
          </ContentMainFooter>
          <ContentMainFooter>
            <Link href="/">{content.link3}</Link>
          </ContentMainFooter>
          <ContentMainFooter>
            <Link href="/">{content.link4}</Link>
          </ContentMainFooter>
        </ContentMobileMenus>
      )}
    </MobileMainFooterStyled>
  );
};
