import styled, { css } from "styled-components";
import { TooltipContentProps } from "./interface";
import { colors } from "src/styles/tokens";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled.div<TooltipContentProps>`
  ${({ isVisible }) => css`
    visibility: ${isVisible ? "visible" : "hidden"};
    position: absolute;
    top: 0%;
    left: 0%;
    width: 120px;
    background-color: ${colors.vivendaColors.c7};
    color: ${colors.vivendaColors.c3};
    text-align: center;
    border-radius: 6px;
    z-index: 1;
    opacity: ${isVisible ? "1" : "0"};
    transition: opacity 0.3s;
  `}
`;

export const TooltipTrigger = styled.div`
  cursor: pointer;
`;
