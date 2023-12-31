"use client";

import { colors } from "src/styles/tokens";
import { ProductProps } from "../Product/interfaces";
import { verifyStock } from "../Product/utils";
import { Modal } from "../Modal";
import { useState } from "react";
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

export const QuickView = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  status = null,
  promoStatus = "5",
  priceColor = colors.black,
  productOffer = null,
  sizeStatus = "large",
  product,
}: ProductProps) => {
  const nProductPrice = parseFloat(product.price);
  const stock = verifyStock(product.metadata?.estoque);

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
                {nProductPrice.toLocaleString("pt-BR", {
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
              <ModalText>{product.description}</ModalText>
              <Line />
            </InfoContainer>
            <CTAContainer>
              <BigCartButton children={"Adicionar ao Carrinho"} />
              <WishList />
            </CTAContainer>
          </QuickViewInforContent>
        </QuickViewContainer>
      </Modal>
    </div>
  );
};
