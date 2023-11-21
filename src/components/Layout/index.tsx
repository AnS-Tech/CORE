import { Footer } from "../Footer";
import { Header } from "../Header";
import * as S from "./styles";

export const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <div>{children}</div>
      <Footer />
    </S.Container>
  );
};
