import styled from "styled-components";
import Image from "next/image";

export const CloseStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    border: none;
    background-color: transparent;
  }
`;

export const CloseIcon = styled(Image)``;
