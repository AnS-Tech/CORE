import styled, { css } from "styled-components";
import { ContainerProps, OptionsProps } from "./interfaces";
import { colors } from "src/styles/tokens";

export const Container = styled.div<ContainerProps>`
  ${({ isOptionsOpen }) => css`
    transition: all 0.3s ease-in-out;

    ${isOptionsOpen &&
    css`
      cursor: pointer;

      #arrow-select {
        transition: all 0.3s ease-in-out;
        transform: rotate(180deg);
      }
    `}
  `}
`;

export const Select = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Options = styled.div<OptionsProps>`
  ${({ isOptionsOpen }) => css`
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    opacity: ${isOptionsOpen ? "1" : "0"};
    transform: translateY(${isOptionsOpen ? "0" : "-20%"});
    transition: opacity 0.3s ease, transform 0.3s ease;
  `}
`;

export const OptionLine = styled.p`
  margin: 0.2rem 0;
`;
