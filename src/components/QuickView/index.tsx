import { useState } from "react";
import { QuickViewStyled, ViewIcon } from "./styles";
import eye from "src/styles/svgs/eye.svg";
import whiteEye from "src/styles/svgs/whiteEye.svg";

export const QuickView = () => {
  const [eyeIcon, toggleEyeIcon] = useState(eye);

  const onMouseEnter = () => {
    toggleEyeIcon(whiteEye);
  };
  const onMouseLeave = () => {
    toggleEyeIcon(eye);
  };
  return (
    <QuickViewStyled onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ViewIcon src={eyeIcon} width={20} height={20} alt="..." />
    </QuickViewStyled>
  );
};
