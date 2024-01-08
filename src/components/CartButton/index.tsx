import { CartContainer } from "./styles";
import { CartButtonProps } from "./interfaces";
import { IoCart } from "react-icons/io5";

export const CartButton: React.FC<CartButtonProps> = ({
  children,
  isActive = false,
  ...rest
}) => {
  return (
    <CartContainer {...{ isActive }} {...rest}>
      <div className="children-div-button">{children}</div>
      <IoCart fontSize="18px" />
    </CartContainer>
  );
};
