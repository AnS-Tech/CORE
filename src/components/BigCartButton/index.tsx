import { BigCartContainer } from "./styles";
import { BsHandbag } from "react-icons/bs";
import { useState } from "react";
import { BigCartButtonProps } from "./interface";
import { verifyStock } from "../Product/utils";

export const BigCartButton: React.FC<BigCartButtonProps> = ({
  children,
  product,
  ...rest
}) => {
  const stock = verifyStock(product.metadata?.estoque);

  const [isActive, setIsActive] = useState(false);
  return (
    <BigCartContainer {...{ isActive }} {...rest} disabled={stock.value < 1}>
      <div className="big-cart-button-children">{children}</div>
      <BsHandbag width={20} height={20} id="bag-icon" />
    </BigCartContainer>
  );
};
