import { colors } from "src/styles/tokens";
import { ProductProps } from "../Product/interfaces";
import { verifyStock } from "../Product/utils";
import { QuantityButton, QuantityContent, QuantityStyled } from "./styles";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

export const Quantity = ({ product }: ProductProps) => {
  const stock = verifyStock(product.metadata?.estoque);
  const [toBuy, setToBuy] = useState(0);

  const handleRemoveToBuy = () => {
    setToBuy((prev) => (prev -= 1));
  };

  const handleAddToBuy = () => {
    setToBuy((prev) => (prev += 1));
  };

  return (
    <QuantityStyled>
      <QuantityButton disabled={toBuy < 1}>
        <FaMinus
          color={toBuy < 1 && colors.grayScale300}
          onClick={handleRemoveToBuy}
        />
      </QuantityButton>
      <QuantityContent>{toBuy}</QuantityContent>
      <QuantityButton disabled={toBuy >= stock.value}>
        <FaPlus
          color={toBuy >= stock.value && colors.grayScale300}
          onClick={handleAddToBuy}
        />
      </QuantityButton>
    </QuantityStyled>
  );
};
