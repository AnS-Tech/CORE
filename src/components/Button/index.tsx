import { colors } from "src/styles/tokens";
import { LoadingSpin } from "../LoadingSpin";
import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styles";

export const Button: React.FC<ButtonProps> = ({
  children,
  textColor = colors.white,
  backgroundColor = colors.lightGreen,
  size = "medium",
  loading = false,
  bordered,
  ...rest
}) => {
  return (
    <ButtonStyled
      bordered={bordered}
      size={size}
      textColor={textColor}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {loading ? <LoadingSpin /> : children}
    </ButtonStyled>
  );
};
