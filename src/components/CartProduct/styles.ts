import styled from "styled-components";
import { ProductStyled } from "../Product/styles";

export const CartProductStyled = styled(ProductStyled)`
    display: flex;
    flex-direction: row;

    gap: 5px;

`
export const CartProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;
`
export const CartProductPriceContainer = styled.span`

`