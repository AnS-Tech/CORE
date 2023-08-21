import { css, styled } from "styled-components";
import { InputStyledProps, SpanStyledProps } from "./interfaces";
import { colors } from "src/styles/tokens";

export const InputStyled = styled.input<InputStyledProps>`
  ${({ status }) =>
    css`
      border: 1px solid;
      border-color: ${colors[status]};
      border-radius: 6px;
      padding: 10px 16px;

      :focus {
        outline: none;
      }
    `}
`;

export const InputContainer = styled.div`
  .div {
    
  }
`;

export const SpanStyled = styled.span<SpanStyledProps>`
  ${({ status }) => css`
    color: ${colors[status]};

  `}
`;
