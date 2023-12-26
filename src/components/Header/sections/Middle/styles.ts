import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.white};
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

  #hamburguer {
    display: none;
  }

  #logo {
    flex-wrap: nowrap;
  }

  #logo h1 {
    display: inline-block;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
    color: ${colors.grayScale900};

    white-space: nowrap;
  }
  @media (max-width: 920px) {
    #hamburguer {
      display: initial;

      font-size: 26px;

      color: ${colors.grayScale700};
      cursor: pointer;
    }
  }
  @media (max-width: 1024px) {
    #logo h1 {
      display: none;
    }
    @media (max-width: 1250px) {
      #logo h1 {
        font-size: 28px;
      }
    }
  }
`;

export const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    border: 3px solid ${colors.success};
    background-color: ${colors.success};
  }
`;

export const Devider = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${colors.grayScale100};
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

  @media (max-width: 720px) {
    width: auto;
    .icon:first-child,
    div {
      display: none;
    }
  }
`;

export const InfoCart = styled.div`
  height: inherit;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 7px;

  font-size: 11px;
  font-weight: 300;
  line-height: 11px;
  color: ${colors.grayScale900};
`;
