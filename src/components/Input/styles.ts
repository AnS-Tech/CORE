import { css, styled } from "styled-components";
import { InputStyledProps, SpanStyledProps } from "./interfaces";
import { colors } from "src/styles/tokens";
import Image from "next/image";

export const InputStyled = styled.input<InputStyledProps>`
  ${({ status }) =>
    css`
      border: 1px solid;
      border-color: ${colors[status]};
      border-radius: 6px;
      padding: 10px 16px;

      &:focus {
        outline: none;
      }
    `}
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 6px;
`;

export const SpanStyled = styled.span<SpanStyledProps>`
  ${({ status }) => css`
    color: ${colors[status]};
  `}
`;

export const StatusIcon = styled(Image)`
  align-self: flex-end;
  position: absolute;
  top: 0.55rem;
  right: 0.65rem;
`;
