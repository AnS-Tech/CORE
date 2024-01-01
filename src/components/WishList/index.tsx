import { useState } from "react";
import { WishIcon, WishListContainer } from "./styles";
import heart from "src/styles/svgs/heart.svg";

export const WishList = () => {
  const [wishSelected, setWishSelected] = useState(false);

  return (
    <WishListContainer
      wishSelected={wishSelected}
      onClick={() => setWishSelected(!wishSelected)}
    >
      <WishIcon src={heart} width={20} height={20} alt={"Icone de favoritos"} />
    </WishListContainer>
  );
};
