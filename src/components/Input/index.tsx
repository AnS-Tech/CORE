import Image from "next/image";
import { InputProps } from "./interfaces";
import { InputContainer, InputStyled, SpanStyled } from "./styles";
import warning from "src/styles/svgs/warning.svg";
import error from "src/styles/svgs/error.svg";

const icon = {
  warning,
  error,
};

export const Input: React.FC<InputProps> = ({
  status = "border",
  span = null,
  ...rest
}) => {
  const showSpan = !!span && (status === "warning" || status === "error");
  return (
    <InputContainer>
      <InputStyled status={status} {...rest} />
      {showSpan && (
        <Image src={icon[status]} alt="warning icon" width={26} height={26} />
      )}
      {showSpan && <SpanStyled status={status}>{span}</SpanStyled>}
    </InputContainer>
  );
};
