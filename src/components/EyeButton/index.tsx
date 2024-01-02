import { EyeButtonProps } from "./interfaces";
import { AiOutlineEye } from "react-icons/ai";
import { EyeButtonStyled } from "./styles";

export const EyeButton: React.FC<EyeButtonProps> = ({ onClick = () => {} }) => {
  return (
    <EyeButtonStyled onClick={onClick} className="button-action-card-product">
      <AiOutlineEye id="eye-icon" />
    </EyeButtonStyled>
  );
};
