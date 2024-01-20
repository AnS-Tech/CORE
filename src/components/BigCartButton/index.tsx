import { BigCartContainer } from "./styles";
import { BsHandbag } from "react-icons/bs";
import { useEffect, useState } from "react";
import { BigCartButtonProps } from "./interface";
import { verifyStock } from "../Product/utils";
import { isEmpty } from "src/utils/isEmpty";
import { useProductContext } from "src/contexts/ProductContext";

export const BigCartButton: React.FC<BigCartButtonProps> = ({
  children,
  product,
  ...rest
}) => {
  const { cart, addToCart } = useProductContext();

  const stock = verifyStock(product.metadata?.estoque);

  const handleVerifyCartSelected = (cartProducts: Array<any>) => {
    const findCartProduct = cartProducts.find((item) => item.id === product.id);

    const isCartSelected =
      !isEmpty(findCartProduct) && findCartProduct.quantity > 0;
    return isCartSelected;
  };

  const [isActive, setIsActive] = useState(handleVerifyCartSelected(cart));

  useEffect(() => {
    setIsActive(handleVerifyCartSelected(cart));
  }, [cart]);

  return (
    <BigCartContainer
      {...{ isActive }}
      {...rest}
      disabled={stock.value < 1}
      onClick={() => addToCart(product)}
    >
      <div className="big-cart-button-children">{children}</div>
      <BsHandbag width={20} height={20} id="bag-icon" />
    </BigCartContainer>
  );
};
