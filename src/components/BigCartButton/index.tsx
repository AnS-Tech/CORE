import { useState } from "react";
import { BigCartContainer } from "./styles";
import { CartButtonProps } from "../CartButton/interfaces";
import { colors } from "src/styles/tokens";
import { BsHandbag } from "react-icons/bs";

export const BigCartButton: React.FC<CartButtonProps> = ({
  cartContainerColor = colors.grayScale100,
  children,
}) => {
  const [clickButton, setClickButton] = useState(false);

  return (
    <BigCartContainer
      {...{ cartContainerColor, clickButton }}
      onClick={() => {
        setClickButton(!clickButton);
      }}
    >
      <div className="big-cart-button-children">{children}</div>
      <BsHandbag width={20} height={20} id="bag-icon" />
    </BigCartContainer>
  );
};
