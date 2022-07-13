declare module Common {
  type positionType = "relative" | "absolute" | "fixed" | "sticky";
  type menuType = "skill" | "history" | "project" | "contact";
  interface offsetType {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }
  interface imageSpecType {
    src: StaticImageData;
    alt: string;
    moSrc?: StaticImageData;
  }
}

declare module Skill {
  type categoryType = "front" | "back" | "devOps" | "vcs" | "etc";
  interface SkillType {
    id: string;
    spec: Common.imageSpecType;
    proficiency: number;
    checkedList: string[];
    description: string;
  }
}
