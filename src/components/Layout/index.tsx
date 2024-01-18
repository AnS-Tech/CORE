import { Footer } from "../Footer";
import { Header } from "../Header";
import * as S from "./styles";

export const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <div
        style={{
          flex: 1,
          maxWidth: "1320px",
          width: "100%",
        }}
      >
        {children}
      </div>
      <Footer />
    </S.Container>
  );
};
