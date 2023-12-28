import { FaStar } from "react-icons/fa6";
import { styled } from "styled-components";
import { RatingProps } from "./interfaces";

export const RatingContainer = styled.div`
  display: flex;
  padding: 0 0 15px 0;
  opacity: 0; // TODO - RESOLVER ESTE PROBLEMA DA AVALIAÇÃO
`;

export const RatingWrapper = styled.div``;

export const RatingStyled = styled(FaStar)`
  color: orange;
  cursor: pointer;
`;
export const RatingUnistyled = styled(FaStar)<RatingProps>`
  cursor: pointer;
`;
