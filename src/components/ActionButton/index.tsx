import React, { useState } from "react";
import { CartContainer, CartContainerWithHover, CartIcon } from "./styles";
import { ActionButtonProps } from "./interfaces";
import cartIcon from "src/styles/svgs/cartIcon.svg";
import wishList from "src/styles/svgs/wishList.svg";
import quickView from "src/styles/svgs/quickView.svg";
import whiteCartIcon from "src/styles/svgs/whiteCartIcon.svg";
import { colors } from "src/styles/tokens";
import { any, set } from "zod";

export const ActionButton: React.FC<ActionButtonProps> = ({
  status = null,
  cartContainerColor = colors.grayScale100,
}) => {
  const icon = {
    cartIcon,
    wishList,
    quickView,
    whiteCartIcon,
  };
  const [hoverMouseCart, setHoverMouseCart] = useState<any>();

  const HoverOnMouseEnter = () => {
    setHoverMouseCart(icon.whiteCartIcon);
  };
  const HoverOnMouseLeave = () => {
    setHoverMouseCart(icon.cartIcon);
  };

  return status === "cartIcon" ? (
    <CartContainerWithHover
      onMouseEnter={HoverOnMouseEnter}
      onMouseLeave={HoverOnMouseLeave}
      cartContainerColor={cartContainerColor}
    >
      <CartIcon src={hoverMouseCart} width={20} height={20} alt={`${status}`} />
    </CartContainerWithHover>
  ) : (
    <CartContainer style={{ marginBottom: "0.5rem" }}>
      <CartIcon src={icon[status]} width={20} height={20} alt={`${status}`} />
    </CartContainer>
  );
};
