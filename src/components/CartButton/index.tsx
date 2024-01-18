import { CartContainer } from "./styles";
import { CartButtonProps } from "./interfaces";
import { IoCart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useProductContext } from "src/contexts/ProductContext";
import { isEmpty } from "src/utils/isEmpty";
import { verifyStock } from "../Product/utils";

export const CartButton: React.FC<CartButtonProps> = ({
  children,
  product,
  ...rest
}) => {
  const { cart, addToCart, setIsCartOpen } = useProductContext();

  const stock = verifyStock(product.metadata?.estoque);

  const handleVerifyCartSelected = (cartProducts) => {
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
    <CartContainer
      {...{ isActive }}
      {...rest}
      disabled={stock.value < 1}
      onClick={() => {
        addToCart(product);
        setIsCartOpen(true);
      }}
    >
      <div className="children-div-button">{children}</div>
      <IoCart fontSize="18px" />
    </CartContainer>
  );
};
