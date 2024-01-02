import { colors, size } from "src/styles/tokens";
import { css, styled } from "styled-components";

interface TagStyledProps {
  status: string;
}

export const TagStyled = styled.span<TagStyledProps>`
  display: inline-flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: ${size.s1};

  border-radius: 4px;
  color: ${colors.white};

  ${({ status }) => css`
    background-color: ${colors[status]};
  `}
`;
