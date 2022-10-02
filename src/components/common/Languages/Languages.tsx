import { useTranslation } from "react-i18next";
import Language from "./Language";
import * as Styled from "./Languages.style";

const Languages = () => {
  const { t } = useTranslation("main");

  const languageList: {
    label: string;
    type: Common.LanguageType;
  }[] = [
    {
      label: t("languages.ko-KR"),
      type: "ko-KR"
    },
    {
      label: t("languages.en-US"),
      type: "en-US"
    },
    {
      label: t("languages.ja-JP"),
      type: "ja-JP"
    }
  ];
  return (
    <Styled.Container
      gap={6}
      position="fixed"
      justifyContent="space-evenly"
      as="nav"
    >
      {languageList.map(lang => (
        <Language key={lang.type} {...lang} />
      ))}
    </Styled.Container>
  );
};

export default Languages;
