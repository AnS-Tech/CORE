import Link from "next/link";
import { LineBorder, MobileMainFooterStyled } from "./styles";
import { ContentMainFooter } from "../MainFooter/styles";
import { FaChevronRight } from "react-icons/fa";

export const MobileMainFooter = () => {
  return (
    <MobileMainFooterStyled>
      <ContentMainFooter>
        <Link href="/">My Account</Link>
        <FaChevronRight />
      </ContentMainFooter>
      <LineBorder />

      <ContentMainFooter>
        <Link href="/">Helps</Link>
        <FaChevronRight />
      </ContentMainFooter>
      <LineBorder />

      <ContentMainFooter>
        <Link href="/">Proxy</Link>
        <FaChevronRight />
      </ContentMainFooter>
      <LineBorder />

      <ContentMainFooter>
        <Link href="/">Categories</Link>
        <FaChevronRight />
      </ContentMainFooter>
      <LineBorder />
    </MobileMainFooterStyled>
  );
};
