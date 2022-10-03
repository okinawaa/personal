import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Colors from "~/constants/Colors";
import { BOLD_WEIGHT, EXTRA_BOLD_WEIGHT } from "~/constants/Variables";
import LanguageProps from "./Language.props";
import * as Styled from "./Language.style";

const Language = ({ label, type }: LanguageProps) => {
  const { t, i18n } = useTranslation("main");

  const toggleLocales = useCallback(
    (locale: Common.LanguageType) => {
      i18n.changeLanguage(locale);
    },
    [i18n]
  );

  const isSelected = useMemo(
    () => i18n.language === type,
    [i18n.language, type]
  );
  return (
    <button
      type="button"
      onClick={() => {
        toggleLocales(type);
      }}
      title={
        i18n.language === "en-US"
          ? `${t("languages.buttonTitle")} ${label}`
          : `${label}${t("languages.buttonTitle")}`
      }
    >
      <Styled.LanguageText
        _color={isSelected ? Colors.green00 : undefined}
        weight={isSelected ? EXTRA_BOLD_WEIGHT : BOLD_WEIGHT}
      >
        {label}
      </Styled.LanguageText>
    </button>
  );
};

export default Language;
