import { WishListContainer } from "./styles";
import { FaRegHeart } from "react-icons/fa";
import { WishListContainerProps } from "./interfaces";

export const WishList = ({
  onClick = () => {},
  wishSelected = false,
  ...rest
}: WishListContainerProps) => {
  return (
    <WishListContainer
      onClick={onClick}
      className={`button-action-card-produc`}
      {...{ wishSelected }}
      {...rest}
    >
      <FaRegHeart id="heart-icon" />
    </WishListContainer>
  );
};
