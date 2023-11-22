import { Logo } from "src/components/Logo";
import {
  ContentMainFooter,
  MainContentFooter,
  MainFooterStyled,
} from "./styles";
import Link from "next/link";
import { MainContent } from "./content";

export const MainFooter = () => {
  const Content = [
    {
      index: 1,
      title: "My Account",
      link1: "My Account",
      link2: "Order History",
      link3: "Shoping Cart",
      link4: "Wishlist",
    },
    {
      index: 2,
      title: "Helps",
      link1: "Contact",
      link2: "Faqs",
      link3: "Terms & Condition",
      link4: "Privacy Policy",
    },
    {
      index: 3,
      title: "Proxy",
      link1: "About",
      link2: "Shop",
      link3: "Product",
      link4: "Track Order",
    },
    {
      index: 4,
      title: "Categories",
      link1: "Fruit & Vegetables",
      link2: "Meat & Fish",
      link3: "Bread & Bakery",
      link4: "Beauty & Health",
    },
  ];
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
      {Content.map((content) => {
        return (
          <MainContent
            key={content.index}
            title={content.title}
            link1={content.link1}
            link2={content.link2}
            link3={content.link3}
            link4={content.link4}
          />
        );
      })}
    </MainFooterStyled>
  );
};
