import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${colors.vivendaColors.c3} 5%;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  max-width: 1320px;
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  color: ${colors.grayScale900};

  width: 100%;
  max-width: 650px;
  border: 1px solid ${colors.grayScale100};
  border-radius: 10px;
  padding-left: 10px;

  input {
    border: none;
    border-radius: 0;
    padding: 0 10px;
  }
  #button {
    border-radius: 0px 6px 6px 0px;
    border: none;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Devider = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${colors.vivendaColors.c6}20;
`;

export const UserServices = styled.div`
  max-width: 170px;
  width: 100%;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 32px;
    height: 32px;
  }

  .icon {
    font-size: 30px;
    color: ${colors.grayScale900};
    cursor: pointer;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

export const InfoCart = styled.div`
  height: inherit;
  display: flex;
  align-items: center;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .total-cart-price {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.vivendaColors.c6};
  }
`;
