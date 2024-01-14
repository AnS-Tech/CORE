import { FaApplePay } from "react-icons/fa";
import { MdPix } from "react-icons/md";
import {
  RiMastercardFill,
  RiVisaLine,
  RiSecurePaymentFill,
} from "react-icons/ri";
import { DownFooterStyled, PaymentContainer } from "./styles";
import Link from "next/link";
import { colors } from "src/styles/tokens";

export const DownFooter = () => {
  return (
    <DownFooterStyled>
      <span>Vivenda Natureza © 2023. All Rights Reserved</span>

      <div>
        <strong>(84) 9 9174-5274</strong> Ou{" "}
        <strong>
          <Link
            href="/"
            style={{
              color: "#d8d3cf",
              textDecoration: "none",
            }}
          >
            Proxy@gmail.com
          </Link>
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
