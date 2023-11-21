import { Logo } from "src/components/Logo";
import {
  ContentMainFooter,
  MainContentFooter,
  MainFooterStyled,
} from "./styles";
import Link from "next/link";

export const MainFooter = () => {
  return (
    <MainFooterStyled>
      <MainContentFooter>
        <Logo />
        <ContentMainFooter>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magna congue nec.
        </ContentMainFooter>
        <ContentMainFooter>
          <strong>(84) 99999-9999</strong> or{" "}
          <strong>
            <Link href="/">Proxy@gmail.com</Link>
          </strong>
        </ContentMainFooter>
      </MainContentFooter>

      <MainContentFooter>
        <h5>My Account</h5>
        <ContentMainFooter>
          <Link href="/">My Account</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Order History</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Shoping Cart</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Wishlist</Link>
        </ContentMainFooter>
      </MainContentFooter>

      <MainContentFooter>
        <h5>Helps</h5>
        <ContentMainFooter>
          <Link href="/">Contact</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Faqs</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Terms & Condition</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Privacy Policy</Link>
        </ContentMainFooter>
      </MainContentFooter>

      <MainContentFooter>
        <h5>Proxy</h5>
        <ContentMainFooter>
          <Link href="/">About</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Shop</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Product</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Track Order</Link>
        </ContentMainFooter>
      </MainContentFooter>

      <MainContentFooter>
        <h5>Categories</h5>
        <ContentMainFooter>
          <Link href="/">Fruit & Vegetables</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Meat & Fish</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Bread & Bakery</Link>
        </ContentMainFooter>
        <ContentMainFooter>
          <Link href="/">Beauty & Health</Link>
        </ContentMainFooter>
      </MainContentFooter>
    </MainFooterStyled>
  );
};
