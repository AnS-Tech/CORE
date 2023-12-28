import { colors } from "src/styles/tokens";
import styled, { css } from "styled-components";

interface LoadingContainerProps {
  sizeMultiplicator?: number;
}

const color = colors.vivendaColors.c7;

export const LoadingContainer = styled.div<LoadingContainerProps>`
  ${({ sizeMultiplicator }) => css`
    display: inline-block;
    position: relative;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: ${`${sizeMultiplicator * 16}px`};
      height: ${`${sizeMultiplicator * 16}px`};
      margin: 2px;
      border: ${`${sizeMultiplicator * 2}px`} solid ${color};
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${color} transparent transparent transparent;
    }
    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
