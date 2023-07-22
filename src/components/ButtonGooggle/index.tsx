import { Container } from "./styles";

export const ButtonGoogle = ({ ...props }) => (
  <Container {...props}>
    <div className="google-icon-wrapper">
      <img
        className="google-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      />
    </div>
  </Container>
);
