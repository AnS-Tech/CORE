import styled, { css } from "styled-components";
import { BigCartContainer } from "../BigCartButton/styles";
import { colors } from "src/styles/tokens";

export const CartStyled = styled.div`
    max-width: 380px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: ${colors.grayScale50};
`

export const InfoBuyCart = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${colors.white};

    line-height: 15px;
`

export const PaymentButton = styled(BigCartContainer)`
    ${({cartContainerColor}) => css`
        background-color: ${colors.success};
        color: ${colors.white};

        &:hover{
            background-color: #119911 }
    `}
`

export const BackToStoreButton = styled(BigCartContainer)`
    ${({cartContainerColor}) => css`
            color: ${colors.success};
            background-color: ${colors.grayScale100};


        &:hover{
            background-color: ${colors.success};
            color: ${colors.white};
        }
    `}
`