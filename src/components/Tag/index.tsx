import React, { useState } from "react";
import { TagStyled } from "./styled";
import { TagStyledProps } from "../Product/interfaces";

export const Tag: React.FC<TagStyledProps> = ({
  status = "",
  promoStatus = "5",
}) => {
  return status !== "Promoção" ? (
    <TagStyled status={status}>{status}</TagStyled>
  ) : (
    <TagStyled status={status}>
      {status}_{promoStatus}%
    </TagStyled>
  );
};