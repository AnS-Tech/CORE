import React from "react";
import { CartContainer, CartIcon } from "./styles";
import { ActionButtonProps, CartContainerProps } from "./interfaces";
import cartIcon from "src/styles/svgs/cartIcon.svg";
import wishList from "src/styles/svgs/wishList.svg";
import quickView from "src/styles/svgs/quickView.svg";

export const ActionButton: React.FC<ActionButtonProps> = ({
  status = "cartIcon",
}) => {
  const icon = {
    cartIcon,
    wishList,
    quickView,
  };

  return status === "cartIcon" ? (
    <CartContainer
      style={{ position: "absolute", bottom: "2.2rem", right: "1rem" }}
    >
      <CartIcon src={icon[status]} width={20} height={20} alt={`${status}`} />
    </CartContainer>
  ) : (
    <CartContainer style={{ marginBottom: "0.5rem" }}>
      <CartIcon src={icon[status]} width={20} height={20} alt={`${status}`} />
    </CartContainer>
  );
};
