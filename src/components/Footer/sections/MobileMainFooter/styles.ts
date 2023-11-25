import styled from "styled-components";

export const MobileMainFooterStyled = styled.section`
  width: 96%;
  padding-top: 45px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 20px;

  div {
    width: inherit;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-style: bold;
  }
`;

export const LineBorder = styled.span`
  width: 96%;
  border-bottom: 0.1px solid #ababab;
  opacity: 0.1;
`;
