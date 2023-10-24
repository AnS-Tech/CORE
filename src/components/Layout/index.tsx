import { Header } from "../Header";
import * as S from "./styles";

export const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <div>{children}</div>
      <div>Footer</div>
    </S.Container>
  );
};
