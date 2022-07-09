declare module Common {
  type positionType = "relative" | "absolute" | "fixed" | "sticky";
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
  interface SkillType {
    id: string;
    spec: Common.imageSpecType;
    proficiency: number;
  }
}
