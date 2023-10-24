"use client";

import { useCallback, useState } from "react";
import * as S from "./styles";
import nookies, { setCookie } from "nookies";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Language } from "./interfaces";

export const LanguageSelector = () => {
  const languages: Array<Language> = ["PT", "EN", "ES"];
  const languageCookie = nookies.get(null).languageVN as Language;

  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languageCookie || languages[0]
  );

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleSaveLanguage = useCallback((language: Language) => {
    setCurrentLanguage(language);
    setCookie(null, "languageVN", language, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/",
    });
  }, []);

  return (
    <S.Container
      onMouseOver={() => setIsOptionsOpen(true)}
      onMouseLeave={() => setIsOptionsOpen(false)}
      {...{ isOptionsOpen }}
    >
      <S.Select>
        {currentLanguage} <MdOutlineKeyboardArrowDown id="arrow-select" />
      </S.Select>
      <S.Options {...{ isOptionsOpen }}>
        {languages.map(
          (language, index) =>
            language !== currentLanguage && (
              <S.OptionLine
                key={language + index}
                onClick={() => handleSaveLanguage(language)}
              >
                {language}
              </S.OptionLine>
            )
        )}
      </S.Options>
    </S.Container>
  );
};
