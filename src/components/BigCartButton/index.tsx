import { BigCartContainer } from "./styles";
import { CartButtonProps } from "../CartButton/interfaces";
import { BsHandbag } from "react-icons/bs";

export const BigCartButton: React.FC<CartButtonProps> = ({
  children,
  isActive = false,
  ...rest
}) => {
  return (
    <BigCartContainer {...{ isActive }} {...rest}>
      <div className="big-cart-button-children">{children}</div>
      <BsHandbag width={20} height={20} id="bag-icon" />
    </BigCartContainer>
  );
};
