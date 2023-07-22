import { Container, Error, InputContainer, Label } from "./styles";

export const Input = ({ label, ...props }) => {
  return (
    <Container {...props}>
      <Label>{label}</Label>
      <InputContainer {...props?.register} />
      {props?.errors && <Error>{props?.errors?.message}</Error>}
    </Container>
  );
};
