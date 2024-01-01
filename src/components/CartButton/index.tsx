import { useState } from "react";
import { CartContainer, CartContainerSelected, CartIcon } from "./styles";
import whiteCartIcon from "src/styles/svgs/whiteCartIcon.svg";
import cartIcon from "src/styles/svgs/cartIcon.svg";
import { CartButtonProps } from "./interfaces";
import { colors } from "src/styles/tokens";

export const CartButton: React.FC<CartButtonProps> = ({
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

  return clickButton ? (
    <CartContainerSelected
      cartContainerColor={cartContainerColor}
      onClick={() => {
        setClickButton(!clickButton);
      }}
    >
      <div className="children-div-button">{children}</div>
      <CartIcon
        src={whiteCartIcon}
        alt={`${whiteCartIcon}`}
        width={15}
        height={15}
      />
    </CartContainerSelected>
  ) : (
    <CartContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        setClickButton(!clickButton);
      }}
      cartContainerColor={cartContainerColor}
    >
      <div className="children-div-button">{children}</div>
      <CartIcon src={cartButton} alt={`${cartButton}`} width={15} height={15} />
    </CartContainer>
  );
};
