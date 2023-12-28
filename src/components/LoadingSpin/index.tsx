import { LoadingContainer } from "./styles";

export const LoadingSpin = ({ sizeMultiplicator = 1 }) => {
  return (
    <LoadingContainer {...{ sizeMultiplicator }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingContainer>
  );
};
