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
} from "./styles";

export const QuickView = ({
  backgroundColor = colors.white,
  textColor = colors.grayScale700,
  status = null,
  promoStatus = "5",
  priceColor = colors.black,
  productOffer = null,
  sizeStatus = null,
  product,
}: ProductProps) => {
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
            <QuickViewProductName>{product.name}</QuickViewProductName>
          </QuickViewInforContent>
        </QuickViewContainer>
      </Modal>
    </div>
  );
};
