"use client";

import { LanguageSelector } from "src/components/LanguageSelector";
import * as S from "./styles";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import { LoadingSpin } from "src/components/LoadingSpin";

export const Top = () => {
  return (
    <S.Container>
      <S.Body>
        <S.LeftSide>
          <CiLocationOn size={18} color="#666" />
          <span>Local: Macaiba - Rio Grande do Norte, Brasil</span>
        </S.LeftSide>
        <S.RightSide>
          {/* <LanguageSelector /> */}
          PT-BR
        </S.RightSide>
      </S.Body>
    </S.Container>
  );
};
