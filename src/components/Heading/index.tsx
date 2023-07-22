import { HeadingContainer } from "./styles";

export const Heading = ({ children }) => {
  return (
    <div>
      <HeadingContainer>{children}</HeadingContainer>
    </div>
  );
};
