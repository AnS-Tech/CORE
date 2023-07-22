import Link from "next/link";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CredentialsCardForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 40px;
  border-radius: 5px;
  background-color: #084d6e;
`;

export const LinkContainer = styled(Link)`
  color: #d8d3cf;

  :hover {
    color: #d8d3cf;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
`;

export const CredentialsCardFormTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
`;
