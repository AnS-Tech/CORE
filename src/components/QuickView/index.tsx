"use client";

import { ProductProps } from "../Product/interfaces";
import { verifyStock } from "../Product/utils";
import { Modal } from "../Modal";
import { useEffect, useState } from "react";
import { EyeButton } from "../EyeButton";
import {
  QuickViewContainer,
  QuickViewImageWrapper,
  QuickViewInforContent,
  QuickViewProductName,
  ProductImage,
  StockWrapper,
  ProductPrice,
  Line,
  InfoContainer,
  ModalText,
  CTAContainer,
} from "./styles";
import { Tag } from "../Tag";
import { BigCartButton } from "../BigCartButton";
import { WishList } from "../WishList";
import { Quantity } from "../Quantity";
import { isEmpty } from "src/utils/isEmpty";
import { ProductInterface } from "src/interfaces/product";

export const QuickView = ({ product }: ProductProps) => {
  const stock = verifyStock(product.metadata?.estoque);

  const [wishSelected, setWishSelected] = useState(false);

  const handleVerifyWishSelected = (
    favoritedProducts: Array<ProductInterface>
  ) => {
    const findFavoritedProduct = favoritedProducts.find(
      (item) => item.id === product.id
    );

    setWishSelected(!isEmpty(findFavoritedProduct));
  };

  const removeFavoriteProductsToFavorite = (
    productToRemove: ProductInterface
  ) => {
    const favoriteProducts: Array<ProductInterface> = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const updatedFavorites = favoriteProducts.filter(
      (product) => product.id !== productToRemove.id
    );

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setWishSelected(!wishSelected);
  };

  useEffect(() => {
    const favoriteProducts: Array<ProductInterface> = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    isEmpty(favoriteProducts) && localStorage.removeItem("favorites");
  }, [removeFavoriteProductsToFavorite]);

  useEffect(() => {
    const favoriteProducts: Array<ProductInterface> = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    handleVerifyWishSelected(favoriteProducts);
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <EyeButton onClick={handleOpenModal} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <QuickViewContainer>
          <QuickViewImageWrapper>
            <ProductImage
              src={product.image[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </QuickViewImageWrapper>
          <QuickViewInforContent>
            <InfoContainer>
              <QuickViewProductName>{product.name}</QuickViewProductName>

              <StockWrapper>
                <Tag status={stock.status} />
                {stock.value !== 0 && (
                  <ModalText>
                    <strong>Estoque:</strong> {stock.value}
                  </ModalText>
                )}
              </StockWrapper>
              <ProductPrice>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </ProductPrice>
              <Line />
            </InfoContainer>
            <InfoContainer>
              <ModalText>
                <strong>Descrição:</strong>
              </ModalText>
              <ModalText className="description-quickview">
                {product.description}
              </ModalText>
            </InfoContainer>
            <CTAContainer>
              <Line />
              <div className="container">
                <Quantity product={product} />
                <BigCartButton
                  {...{ product }}
                  children={"Adicionar ao Carrinho"}
                />
                <WishList {...{ product }} className="wish-list-quickview" />
              </div>
            </CTAContainer>
          </QuickViewInforContent>
        </QuickViewContainer>
      </Modal>
    </div>
  );
};
