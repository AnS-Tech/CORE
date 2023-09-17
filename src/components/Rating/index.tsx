import {
  RatingContainer,
  RatingStyled,
  RatingUnistyled,
} from "../Rating/styles";
import { RatingProps } from "./interfaces";

const ratings: number[] = [...(new Array(5).keys() as any)];

export const Rating: React.FC<RatingProps> = ({ status = false }) => {
  return (
    <RatingContainer>
      {ratings.map((index) =>
        status ? <RatingStyled key={`star_${index}`} /> : <RatingUnistyled />
      )}
    </RatingContainer>
  );
};
