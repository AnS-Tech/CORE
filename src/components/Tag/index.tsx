import React from "react";
import { TagStyled } from "./styled";
import { TagStyledProps } from "../Product/interfaces";

export const Tag: React.FC<TagStyledProps> = ({
  status = "",
  promoStatus = "5",
}) => {
  const clearStatus = status?.replace(/ /g, "");

  return status !== "Promoção" ? (
    <TagStyled status={clearStatus}>{status}</TagStyled>
  ) : (
    <TagStyled status={status}>
      {status}_{promoStatus}%
    </TagStyled>
  );
};
