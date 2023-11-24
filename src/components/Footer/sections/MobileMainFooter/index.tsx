import Link from "next/link";
import { MobileMainFooterStyled } from "./styles";
import { ContentMainFooter } from "../MainFooter/styles";

export const MobileMainFooter = () => {
  return (
    <MobileMainFooterStyled>
      <ContentMainFooter>
        <Link href="/">My Account</Link>
      </ContentMainFooter>

      <ContentMainFooter>
        <Link href="/">Helps</Link>
      </ContentMainFooter>

      <ContentMainFooter>
        <Link href="/">Proxy</Link>
      </ContentMainFooter>

      <ContentMainFooter>
        <Link href="/">Categories</Link>
      </ContentMainFooter>
    </MobileMainFooterStyled>
  );
};
