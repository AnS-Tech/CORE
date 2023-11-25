import { FaApplePay } from "react-icons/fa";
import { MdPix } from "react-icons/md";
import {
  RiMastercardFill,
  RiVisaLine,
  RiSecurePaymentFill,
} from "react-icons/ri";
import { DownFooterStyled, PaymentContainer } from "./styles";
import { Logo } from "src/components/Logo";

export const DownFooter = () => {
  return (
    <DownFooterStyled>
      <span>Vivenda Natureza © 2023. All Rights Reserved</span>
      <Logo />
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
