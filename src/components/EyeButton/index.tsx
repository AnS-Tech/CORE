import { EyeButtonProps } from "./interfaces";
import { AiOutlineEye } from "react-icons/ai";
import { EyeButtonStyled } from "./styles";

export const EyeButton: React.FC<EyeButtonProps> = ({ onClick = () => {} }) => {
  return (
    <EyeButtonStyled onClick={onClick}>
      <AiOutlineEye id="eye-icon" />
    </EyeButtonStyled>
  );
};
