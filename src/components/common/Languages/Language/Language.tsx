import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import Colors from "~/constants/Colors";
import { Body3 } from "~/constants/Typography";
import LanguageProps from "./Language.props";

const Language = ({ label, type }: LanguageProps) => {
  const { t, i18n } = useTranslation("main");

  const toggleLocales = useCallback(
    (locale: Common.LanguageType) => {
      i18n.changeLanguage(locale);
    },
    [i18n]
  );

  return (
    <button
      type="button"
      onClick={() => {
        toggleLocales(type);
      }}
    >
      <Body3 color={i18n.language === type ? Colors.green00 : undefined}>
        {label}
      </Body3>
    </button>
  );
};

export default Language;
