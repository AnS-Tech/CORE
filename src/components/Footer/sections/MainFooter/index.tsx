import { Logo } from "src/components/Logo";
import {
  ContentMainFooter,
  MainContentFooter,
  MainFooterStyled,
} from "./styles";
import Link from "next/link";
//import { MainContent } from "./content";
import { Content } from "../content";

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
      {/* {Content.map((content) => {
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
      })} */}
    </MainFooterStyled>
  );
};
