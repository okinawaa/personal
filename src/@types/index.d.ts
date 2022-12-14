declare module Common {
  type LanguageType = "ko-KR" | "en-US" | "ja-JP";

  interface ProjectType {
    title: string;
    date: string;
    link: string;
  }

  interface OpenSourceType {
    title: string;
    link: string;
  }

  interface CareerType {
    title: string;
    date: string;
  }
  interface EducationType {
    title: string;
    description: string;
    date: string;
  }

  interface ContactType {
    title: string;
    link?: string;
  }
  interface RecommendationType {
    title: string;
    link: string;
    description: string;
  }
}
declare module Skill {
  interface DtoType {
    "ko-KR": string[];
    "en-US": string[];
    "ja-JP": string[];
  }
}

declare module Career {
  interface DtoType {
    "ko-KR": Common.CareerType[];
    "en-US": Common.CareerType[];
    "ja-JP": Common.CareerType[];
  }
}

declare module Education {
  interface DtoType {
    "ko-KR": Common.EducationType;
    "en-US": Common.EducationType;
    "ja-JP": Common.EducationType;
  }
}
