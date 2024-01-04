import { colors, size } from "src/styles/tokens";
import styled from "styled-components";

export const QuantityStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  border: 2px solid ${colors.grayScale100};
  border-radius: 20px;
`;

export const QuantityButton = styled.button`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 50%;
  background: ${colors.grayScale100};

  &:hover {
    background: ${colors.grayScale300};
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    background: ${colors.grayScale50};
  }
`;

export const QuantityContent = styled.span`
  width: 30px;

  color: ${colors.grayScale900};
  text-align: center;

  font-size: ${size.s2};
`;
