import React, { useState } from "react";
import { CartContainer, CartContainerWithHover, CartIcon } from "./styles";
import { ActionButtonProps } from "./interfaces";
import quickView from "src/styles/svgs/quickView.svg";
import { colors } from "src/styles/tokens";

export const ActionButton: React.FC<ActionButtonProps> = ({
  status = null,
  cartContainerColor = colors.grayScale100,
}) => {
  const icon = {
    quickView,
  };

  return;
  <CartContainer style={{ marginBottom: "0.5rem" }}>
    <CartIcon src={icon[status]} width={20} height={20} alt={`${status}`} />
  </CartContainer>;
};
