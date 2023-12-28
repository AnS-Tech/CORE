"use client";

import { colors } from "src/styles/tokens";
import { ProductProps } from "../Product/interfaces";
import { verifyStock } from "../Product/utils";
import { Modal } from "../Modal";
import { useState } from "react";
import { QuickView } from "../QuickView";

export const ProductModal = ({
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
      <QuickView onClick={handleOpenModal} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Conteúdo do Modal</h2>
        <p>Seu conteúdo vai aqui...</p>
      </Modal>
    </div>
  );
};
