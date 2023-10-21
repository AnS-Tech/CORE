import { useState } from "react";
import { BigCartContainer } from "./styles";
import whiteCartIcon from "src/styles/svgs/whiteCartIcon.svg";
import cartIcon from "src/styles/svgs/cartIcon.svg";
import { CartButtonProps } from "../CartButton/interfaces";
import { colors } from "src/styles/tokens";
import { CartIcon } from "../CartButton/styles";

export const BigCartButton: React.FC<CartButtonProps> = ({
  cartContainerColor = colors.grayScale100,
  children,
}) => {
  const [cartButton, toggleCartButton] = useState(cartIcon);
  const [clickButton, setClickButton] = useState(false);
  const onMouseEnter = () => {
    toggleCartButton(whiteCartIcon);
  };
  const onMouseLeave = () => {
    toggleCartButton(cartIcon);
  };


  // <BigCartContainerSelected
  //     cartContainerColor={cartContainerColor}
  //     onClick={() => {
  //       setClickButton(!clickButton);
  //     }}
  //   >
  //     {children}
  //     <CartIcon
  //       src={whiteCartIcon}
  //       alt={`${whiteCartIcon}`}
  //       width={20}
  //       height={20}
  //     />
  //   </BigCartContainerSelected>

  return (
    <BigCartContainer
      {...{onMouseEnter, onMouseLeave, cartContainerColor, clickButton}}
      onClick={() => {
        setClickButton(!clickButton);
      }}
    >
      {children}
      <CartIcon src={cartButton} alt={`${cartButton}`} width={20} height={20} />
    </BigCartContainer>
  );
};
