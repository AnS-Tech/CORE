import Link from "next/link";
import { ContentMainFooter, ContentFooter } from "./styles";

export const MainContent = (content) => {
  return (
    <ContentFooter key={content.index}>
      <h5>{content.title}</h5>
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
    </ContentFooter>
  );
};
