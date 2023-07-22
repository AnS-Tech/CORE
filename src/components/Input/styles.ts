import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.input`
  width: 300px;
  padding: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-color: #000;
  }
  &::placeholder {
    color: #ccc;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  color: #fff;
  margin-bottom: 5px;
  font-size: 1em;
  font-weight: 400;
`;

export const Error = styled.span`
  margin-top: 5px;
  color: red;
  font-size: 0.8em;
  font-weight: 400;
`;
