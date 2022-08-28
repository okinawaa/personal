import Language from "./Language";
import * as Styled from "./Languages.style";

const LANGUAGE_LIST: {
  label: string;
  type: Common.LanguageType;
}[] = [
  {
    label: "KO",
    type: "ko-KR"
  },
  {
    label: "EN",
    type: "en-US"
  },
  {
    label: "JP",
    type: "ja-JP"
  }
];

const Languages = () => {
  return (
    <Styled.Container gap={6} position="fixed">
      {LANGUAGE_LIST.map(lang => (
        <Language key={lang.type} {...lang} />
      ))}
    </Styled.Container>
  );
};

export default Languages;
