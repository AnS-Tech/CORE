import styled from "styled-components";
import { ContentMainFooter } from "../MainFooter/styles";
import { colors } from "src/styles/tokens";

export const MobileMainFooterStyled = styled.section`
  width: 96%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

export const ContentMobileFooter = styled.button`
  background-color: inherit;
  border: none;
  color: inherit;
  cursor: pointer;

  width: inherit;
  padding: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-style: bold;
`;

export const ContentMobileMenus = styled.div`
  width: inherit;

  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  div {
    font-size: 11px;
  }
`;

export const LineBorder = styled.span`
  width: 96%;
  border-bottom: 0.1px solid #ababab;
  opacity: 0.1;
`;
