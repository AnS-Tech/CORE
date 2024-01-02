"use client";

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
import { Quantity } from "../Quantity";

export const QuickView = ({ product }: ProductProps) => {
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
              <ModalText className="description-quickview">
                {product.description}
              </ModalText>
            </InfoContainer>
            <CTAContainer>
              <Line />
              <div className="container">
                <Quantity product={product} />
                <BigCartButton children={"Adicionar ao Carrinho"} />
                <WishList className="-quickview" />
              </div>
            </CTAContainer>
          </QuickViewInforContent>
        </QuickViewContainer>
      </Modal>
    </div>
  );
};
