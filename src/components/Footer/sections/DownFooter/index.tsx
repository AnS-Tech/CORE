import { FaApplePay } from "react-icons/fa";
import { MdPix } from "react-icons/md";
import {
  RiMastercardFill,
  RiVisaLine,
  RiSecurePaymentFill,
} from "react-icons/ri";
import { DownFooterStyled, PaymentContainer } from "./styles";
import Link from "next/link";

export const DownFooter = () => {
  return (
    <DownFooterStyled>
      <span>Vivenda Natureza © 2023. All Rights Reserved</span>

      <div>
        <strong>(84) 99999-9999</strong> Ou{" "}
        <strong>
          <Link href="/">Proxy@gmail.com</Link>
        </strong>
      </div>
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
