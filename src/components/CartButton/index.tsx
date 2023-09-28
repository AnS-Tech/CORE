import { useState } from "react";
import { CartContainer, CartContainerSelected, CartIcon } from "./styles";
import whiteCartIcon from "src/styles/svgs/whiteCartIcon.svg";
import cartIcon from "src/styles/svgs/cartIcon.svg";

export const CartButton = () => {
  const [cartButton, toggleCartButton] = useState(cartIcon);
  const [clickButton, setClickButton] = useState(false);
  const onMouseEnter = () => {
    toggleCartButton(whiteCartIcon);
  };
  const onMouseLeave = () => {
    toggleCartButton(cartIcon);
  };

  return clickButton ? (
    <CartContainerSelected
      onClick={() => {
        setClickButton(!clickButton);
      }}
    >
      <CartIcon
        src={whiteCartIcon}
        alt={`${whiteCartIcon}`}
        width={20}
        height={20}
      />
    </CartContainerSelected>
  ) : (
    <CartContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        setClickButton(!clickButton);
      }}
    >
      <CartIcon src={cartButton} alt={`${cartButton}`} width={20} height={20} />
    </CartContainer>
  );
};
