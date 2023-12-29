import { EyeButtonProps } from "./interfaces";
import { EyeButtonStyled } from "./styles";
import { AiOutlineEye } from "react-icons/ai";

export const EyeButton: React.FC<EyeButtonProps> = ({ onClick = () => {} }) => {
  return (
    <EyeButtonStyled onClick={onClick}>
      <AiOutlineEye id="eye-icon" />
    </EyeButtonStyled>
  );
};
