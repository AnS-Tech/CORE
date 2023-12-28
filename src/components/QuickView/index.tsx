import { QuickViewProps } from "./interfaces";
import { QuickViewStyled } from "./styles";
import { AiOutlineEye } from "react-icons/ai";

export const QuickView: React.FC<QuickViewProps> = ({ onClick = () => {} }) => {
  return (
    <QuickViewStyled onClick={onClick}>
      <AiOutlineEye id="eye-icon" />
    </QuickViewStyled>
  );
};
