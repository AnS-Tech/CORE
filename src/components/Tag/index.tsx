import React from "react";
import { TagStyled } from "./styled";
import { TagStyledProps } from "../Product/interfaces";
import { isEmpty } from "src/utils/isEmpty";

export const Tag: React.FC<TagStyledProps> = ({
  status = "",
  promoStatus = "5",
}) => {
  const clearStatus = status?.replace(/ /g, "");

  if (isEmpty(status)) return <></>;

  return status !== "Promoção" ? (
    <TagStyled status={clearStatus}>{status}</TagStyled>
  ) : (
    <TagStyled status={status}>
      {status}_{promoStatus}%
    </TagStyled>
  );
};
