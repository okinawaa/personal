declare module Common {
  type positionType = "relative" | "absolute" | "fixed";
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
