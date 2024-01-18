import { Logo } from "src/components/Logo";
import {
  ContentMainFooter,
  MainContentFooter,
  MainFooterStyled,
} from "./styles";

export const MainFooter = () => {
  return (
    <MainFooterStyled>
      <MainContentFooter>
        <Logo />
        <ContentMainFooter></ContentMainFooter>
      </MainContentFooter>
    </MainFooterStyled>
  );
};
