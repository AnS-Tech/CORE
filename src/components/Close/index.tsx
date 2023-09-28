import { CloseIcon, CloseStyled } from "./styles";
import closeButton from "../../styles/svgs/close.svg";
import closeButtonHover from "../../styles/svgs/closeHover.svg";
import { useState } from "react";

export const Close = () => {
  const [toggleButton, setToggleButton] = useState(closeButton);

  const onMouseEnter = () => {
    setToggleButton(closeButtonHover);
  };
  const onMouseLeave = () => {
    setToggleButton(closeButton);
  };

  return (
    <CloseStyled onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <CloseIcon
        src={toggleButton}
        alt={`${toggleButton}`}
        width={24}
        height={24}
      />
    </CloseStyled>
  );
};
