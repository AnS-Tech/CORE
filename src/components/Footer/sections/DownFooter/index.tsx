import { FaApplePay } from "react-icons/fa";
import { MdPix } from "react-icons/md";
import {
  RiMastercardFill,
  RiVisaLine,
  RiSecurePaymentFill,
} from "react-icons/ri";
import { DownFooterStyled, PaymentContainer } from "./styles";

export const DownFooter = () => {
  return (
    <DownFooterStyled>
      <span>Vivenda Natureza © 2023. All Rights Reserved</span>
      <PaymentContainer>
        <FaApplePay />
        <RiVisaLine />
        <RiMastercardFill />
        <MdPix />
        <RiSecurePaymentFill />
      </PaymentContainer>
    </DownFooterStyled>
  );
};
