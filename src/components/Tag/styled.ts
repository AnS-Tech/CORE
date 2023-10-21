import { colors } from "src/styles/tokens";
import { css, styled } from "styled-components";
import { TagStyledProps } from "../Product/interfaces";

export const TagStyled = styled.span<TagStyledProps>`
  display: inline-flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  color: ${colors.white};

  ${({ status }) => css`
    background-color: ${colors[status]};
  `}
`;
