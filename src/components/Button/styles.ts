import { css, styled } from "styled-components";
import { ButtonStyledProps } from "./interfaces";

const paddingSmall = "0.5rem 1.5rem";
const paddingMedium = "0.8rem 2rem";
const paddingLarge = "1rem 2.5rem";

const fontSizeSmall = "0.8rem";
const fontSizeMedium = "1.2rem";
const fontSizeLarge = "1.5rem";

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ textColor, backgroundColor, size, bordered }) => css`
    color: ${textColor};
    background-color: ${backgroundColor};
    border: ${bordered ? `2px solid ${textColor}` : "none"};

    cursor: pointer;
    border-radius: 2rem;

    ${size === "small" && `padding: ${paddingSmall}`};
    ${size === "medium" && `padding: ${paddingMedium}`};
    ${size === "large" && `padding: ${paddingLarge}`};

    ${size === "small" && `font-size: ${fontSizeSmall}`};
    ${size === "medium" && `font-size: ${fontSizeMedium}`};
    ${size === "large" && `font-size: ${fontSizeLarge}`};

    &:hover {
      opacity: 0.9;
    }
  `}
`;
