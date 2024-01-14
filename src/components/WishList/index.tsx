import { WishListContainer } from "./styles";
import { FaRegHeart } from "react-icons/fa";
import { WishListContainerProps } from "./interfaces";
import { useEffect, useState } from "react";
import { useProductContext } from "src/contexts/ProductContext";
import { isEmpty } from "src/utils/isEmpty";
import { ProductInterface } from "src/interfaces/product";

export const WishList = ({ product, ...rest }: WishListContainerProps) => {
  const { favorites, removeFromFavorites, addToFavorites } =
    useProductContext();
  const handleVerifyWishSelected = (favoritedProducts: ProductInterface[]) => {
    const findFavoritedProduct = favoritedProducts.find(
      (item) => item?.id === product?.id
    );

    const isFavorited = !isEmpty(findFavoritedProduct);
    return isFavorited;
  };

  const [isFavorited, setIsFavorited] = useState(
    handleVerifyWishSelected(favorites)
  );

  useEffect(() => {
    setIsFavorited(handleVerifyWishSelected(favorites));
  }, [favorites]);

  return (
    <WishListContainer
      onClick={() => {
        isFavorited ? removeFromFavorites(product) : addToFavorites(product);
      }}
      className={`button-action-card-produc`}
      {...{ isFavorited }}
      {...rest}
    >
      <FaRegHeart id="heart-icon" />
    </WishListContainer>
  );
};
