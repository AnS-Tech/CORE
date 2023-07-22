import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #272c30;
  color: white;
  font-size: 1em;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: #464a4e;
  }
`;
