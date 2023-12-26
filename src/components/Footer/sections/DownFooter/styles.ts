import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const DownFooterStyled = styled.div`
  max-width: 1320px;
  width: 100%;
  padding: 24px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
