import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const DownFooterStyled = styled.div`
  width: 96%;
  max-width: 1320px;
  padding: 24px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  #logo {
    display: none;
  }

  @media (max-width: 720px) {
    flex-flow: wrap;
    justify-content: center;
    gap: 20px;

    #logo {
      display: flex;
    }

    span {
      display: none;
    }
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  gap: 8px;
  font-size: 40px;

  * {
    padding: 0 10px;
    border: 1px solid ${colors.grayScale700};
    border-radius: 10px;
  }

  @media (max-width: 500px) {
    font-size: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
