import { colors, size } from "src/styles/tokens";
import { css, styled } from "styled-components";

interface TagStyledProps {
  status: string;
}

export const TagStyled = styled.span<TagStyledProps>`
  display: inline-flex;
  padding: 1px 5px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: ${size.s1};

  border-radius: 4px;
  color: ${colors.vivendaColors.c1};

  ${({ status }) => css`
    background-color: ${colors.vivendaColors.c3};
  `}

  opacity: 0.8;
`;
