import styled from "styled-components";
import { ProductPropsStyled } from "../Product/interfaces";
import {
  ActionButtonWrapper,
  ProductImage,
  ProductStyled,
} from "../Product/styles";

const sizeButtonSmall = "43px";
const sizeButtonMedium = "371px";
const sizeButtonLarge = "368px";

export const BigProductStyled = styled(ProductStyled)<ProductPropsStyled>``;

export const BigProductImage = styled(ProductImage)`
  padding: 0;
`;

export const BigActionButtonWrapper = styled(ActionButtonWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: calc(100% - 3.6rem);

  position: absolute;
  bottom: 1.8rem;
`;

export const BigProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const BigProductSpan = styled.span`
display: flex;`

export const PromoCountdown = styled.div`
  display: flex;
  flex-direction: column;
`
export const DateContent = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 15px;
  
  font-size: x-large;
  
`
export const DateWrapper = styled.div`
  width: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5px;

  font-size: large;
  font-weight: 800;

    span{
    font-size: xx-small;
    font-weight: 400;
  }
`

