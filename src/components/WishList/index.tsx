import { useState } from "react";
import {
  WishIcon,
  WishListContainer,
  WishListContainerSelected,
} from "./styles";
import heart from "src/styles/svgs/heart.svg";
import heartHover from "src/styles/svgs/heartHover.svg";
import greenHeart from "src/styles/svgs/greenHeart.svg";

export const WishList = () => {
  const [wishSelected, setWishSelected] = useState(false);
  const [heartIcon, toggleHeartIcon] = useState(
    wishSelected ? greenHeart : heart
  );

  const onMouseEnter = () => {
    wishSelected ? toggleHeartIcon(heartHover) : toggleHeartIcon(heartHover);
  };
  const onMouseLeave = () => {
    wishSelected ? toggleHeartIcon(greenHeart) : toggleHeartIcon(heart);
  };

  return wishSelected ? (
    <WishListContainerSelected
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => setWishSelected(!wishSelected)}
    >
      <WishIcon src={heartIcon} width={20} height={20} alt={`${heartIcon}`} />
    </WishListContainerSelected>
  ) : (
    <WishListContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => setWishSelected(!wishSelected)}
    >
      <WishIcon src={heartIcon} width={20} height={20} alt={`${heartIcon}`} />
    </WishListContainer>
  );
};
