import { colors } from "src/styles/tokens";
import { Product as ProductI, ProductProps } from "./interfaces";
import {
  ActionButtonWrapper,
  InfoWrapper,
  ProductImage,
  ProductImageWrapper,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductPriceDotted,
  ProductStyled,
  WrapperTag,
} from "./styles";
import { Tag } from "../Tag";
import { CartButton } from "../CartButton";
import { WishList } from "../WishList";
import { QuickView } from "../QuickView";
import { verifyStock } from "./utils";
import { useEffect, useState } from "react";
import { isEmpty } from "src/utils/isEmpty";

export const Product = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  status = null,
  promoStatus = "5",
  priceColor = colors.black,
  productOffer = null,
  sizeStatus = null,
  product,
}: ProductProps) => {
  productOffer = product.price - product.price * (parseInt(promoStatus) / 100);

  const stock = verifyStock(product?.metadata?.estoque);

  const [isActive, setIsActive] = useState(false);
  const [wishSelected, setWishSelected] = useState(false);

  const handleVerifyIsActive = (storedProducts: Array<ProductI>) => {
    const findStoredProduct = storedProducts.find(
      (element) => element.id === product.id
    );

    setIsActive(!isEmpty(findStoredProduct));
  };

  const handleVerifyWishSelected = (favoritedProducts: Array<ProductI>) => {
    const findFavoritedProduct = favoritedProducts.find(
      (item) => item.id === product.id
    );

    setWishSelected(!isEmpty(findFavoritedProduct));
  };

  const addFavoriteProductsToFavorite = () => {
    const favoriteProducts: Array<ProductI> = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const updateFavorites = [...favoriteProducts, product];

    handleVerifyWishSelected(updateFavorites);

    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
    console.log("Adicionado...");
  };

  const removeFavoriteProductsToFavorite = (productToRemove: ProductI) => {
    const favoriteProducts: Array<ProductI> = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const updatedFavorites = favoriteProducts.filter(
      (product) => product.id !== productToRemove.id
    );

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setWishSelected(!wishSelected);
  };

  useEffect(() => {
    const favoriteProducts: Array<ProductI> = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    isEmpty(favoriteProducts) && localStorage.removeItem("favorites");
  }, [removeFavoriteProductsToFavorite]);

  const addProductToProducts = () => {
    const storedProducts: Array<ProductI> = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const updateProducts = [...storedProducts, product];

    handleVerifyIsActive(updateProducts);

    localStorage.setItem("products", JSON.stringify(updateProducts));
  };

  useEffect(() => {
    const storedProducts: Array<ProductI> = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const favoriteProducts: Array<ProductI> = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    handleVerifyWishSelected(favoriteProducts);

    handleVerifyIsActive(storedProducts);
  }, []);

  return (
    <ProductStyled backgroundColor={backgroundColor}>
      <ProductImageWrapper>
        <ProductImage
          src={product.image[0]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
        <WrapperTag>{<Tag {...{ status, promoStatus }} />}</WrapperTag>

        <ActionButtonWrapper className="actions-product-card-div">
          <WishList
            {...{ wishSelected }}
            onClick={
              wishSelected
                ? () => removeFavoriteProductsToFavorite(product)
                : addFavoriteProductsToFavorite
            }
          />

          <QuickView
            {...{
              product,
              backgroundColor,
              priceColor,
              productOffer,
              promoStatus,
              sizeStatus,
              textColor,
              status,
            }}
          />
        </ActionButtonWrapper>
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName sizeStatus={sizeStatus} textColor={textColor}>
          {product.name}
        </ProductName>
        <InfoWrapper>
          <ProductPrice {...{ sizeStatus, priceColor }}>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            &nbsp;
            {status == "Promoção" && (
              <ProductPriceDotted {...{ sizeStatus, priceColor }}>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </ProductPriceDotted>
            )}
          </ProductPrice>

          <CartButton {...{ isActive }} onClick={addProductToProducts}>
            Comprar
          </CartButton>
        </InfoWrapper>

        <Tag status={stock.status} />
      </ProductInfo>
    </ProductStyled>
  );
};
