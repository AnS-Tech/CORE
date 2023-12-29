import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${colors.vivendaColors.c3} 5%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666666;
  font-family: "DM Sans Display", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  border-bottom: 1px solid ${colors.vivendaColors.c6}20;
`;

export const Body = styled.div`
  width: 96%;
  max-width: 1320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    font-size: 10px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    font-size: 10px;
  }
`;
