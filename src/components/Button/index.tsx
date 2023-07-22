import { LoadingSpin } from "../LoadingSpin";
import { ButtonContainer } from "./styles";

export const Button = ({ children, ...props }) => {
  return (
    <ButtonContainer type={props?.type} {...props}>
      {!props?.loading ? children : <LoadingSpin />}
    </ButtonContainer>
  );
};
