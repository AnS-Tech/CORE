import React from "react"
import { BackToStoreButton, CartStyled, InfoBuyCart, PaymentButton } from "./styles"
import { CartProps } from "./interfaces"

export const Cart: React.FC<CartProps> = () => {
    return <CartStyled>
        
        <InfoBuyCart>
            <span>2 Produtos</span>
            <span>$ 26,99</span>
        </InfoBuyCart>
        <PaymentButton>Ir para Pagamento</PaymentButton>
        <BackToStoreButton>Voltar as Compras</BackToStoreButton>
    </CartStyled>
}