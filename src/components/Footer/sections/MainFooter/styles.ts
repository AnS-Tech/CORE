import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const MainFooterStyled = styled.div`
  width: 96%;
  max-width: 1320px;
  /* padding: 60px 2% 60px 2%; */

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContentFooter = styled.div`
  display: flex;
  max-width: 340px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ContentMainFooter = styled.div`
  font-size: 14px;
  line-height: 21px;

  * {
    color: inherit;
    text-decoration: none;
  }

  :hover {
    color: ${colors.success};
    border-bottom: 2px solid ${colors.success};
  }
`;
