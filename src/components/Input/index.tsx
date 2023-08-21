import { InputProps } from "./interfaces";
import {
  InputContainer,
  InputStyled,
  InputWrapper,
  SpanStyled,
  StatusIcon,
} from "./styles";
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
      <InputWrapper>
        <InputStyled status={status} {...rest} />
        {showSpan && (
          <StatusIcon
            src={icon[status]}
            alt="warning icon"
            width={20}
            height={20}
          />
        )}
        {showSpan && <SpanStyled status={status}>{span}</SpanStyled>}
      </InputWrapper>
    </InputContainer>
  );
};
