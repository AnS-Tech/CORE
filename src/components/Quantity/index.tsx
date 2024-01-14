import { colors } from "src/styles/tokens";
import { ProductProps } from "../Product/interfaces";
import { verifyStock } from "../Product/utils";
import { QuantityButton, QuantityContent, QuantityStyled } from "./styles";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useProductContext } from "src/contexts/ProductContext";

export const Quantity = ({ product }: ProductProps) => {
  const stock = verifyStock(product.metadata?.estoque);

  const { plusOneToCart, minusOneToCart, cart } = useProductContext();

  const productInCart = cart.find((item) => item?.id === product.id);

  const [toBuy, setToBuy] = useState(productInCart?.quantity || 0);
  const handleRemoveToBuy = () => {
    setToBuy((prev) => (prev -= 1));

    minusOneToCart(product);
  };

  const handleAddToBuy = () => {
    setToBuy((prev) => (prev += 1));

    plusOneToCart(product);
  };

  useEffect(() => {
    const productInCart = cart.find((item) => item?.id === product.id);

    setToBuy(productInCart?.quantity || 0);
  }, [cart]);

  return (
    <QuantityStyled>
      <QuantityButton disabled={toBuy < 1} onClick={handleRemoveToBuy}>
        <FaMinus color={toBuy < 1 && colors.grayScale300} />
      </QuantityButton>
      <QuantityContent>{toBuy}</QuantityContent>
      <QuantityButton disabled={toBuy >= stock.value} onClick={handleAddToBuy}>
        <FaPlus color={toBuy >= stock.value && colors.grayScale300} />
      </QuantityButton>
    </QuantityStyled>
  );
};
