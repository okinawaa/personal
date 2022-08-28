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
}
