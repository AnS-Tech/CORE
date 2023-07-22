import { LoadingContainer } from "./styles";

export const LoadingPage = () => {
  return (
    <LoadingContainer>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingContainer>
  );
};
