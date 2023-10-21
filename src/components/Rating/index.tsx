import { useState } from "react";
import {
  RatingContainer,
  RatingStyled,
  RatingUnistyled,
  RatingWrapper,
} from "../Rating/styles";
import { RatingProps } from "./interfaces";

export const Rating: React.FC<RatingProps> = ({ status = false }) => {
  const [hoverIndex, setHoverIndex] = useState<number>();
  const [clickIndex, setClickIndex] = useState<number>();

  return (
    <RatingContainer>
      {[...(Array(5).keys() as any)].map((index) => (
        <RatingWrapper
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(undefined)}
          onClick={() =>
            setClickIndex((oldState) =>
              oldState === index ? undefined : index
            )
          }
        >
          {index <= hoverIndex || index <= clickIndex || status ? (
            <RatingStyled />
          ) : (
            <RatingUnistyled />
          )}
        </RatingWrapper>
      ))}
    </RatingContainer>
  );
};
