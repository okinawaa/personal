import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
// 작성된 마크업을 불러옵니다. import 를 간소화하기 위해 *를 사용했습니다.
import * as en from "./en";
import * as ko from "./ko";
import * as jp from "./jp";

const resources: Resource = {
  "en-US": {
    ...en // 비구조화 할당을 통해 간소화했습니다.
  },
  "ko-KR": {
    ...ko
  },
  "ja-JP": {
    ...jp
  }
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "ko-KR", // 초기 설정 언어
  fallbackLng: {
    "en-US": ["en-US"], // 한국어 불러오는 것이 실패했을 경우 영문을 써라 라는 말입니다.
    default: ["ko-KR"]
  },
  debug: true,
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});

export default i18n;
