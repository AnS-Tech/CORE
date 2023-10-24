import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.white};
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666666;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  border-bottom: 1px solid #e5e5e5;
`;

export const Body = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;
