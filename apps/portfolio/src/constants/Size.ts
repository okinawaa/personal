import {
  ROOT_FONT_SIZE,
  XD_DESKTOP_HEIGHT,
  XD_DESKTOP_WIDTH,
  XD_MOBILE_WIDTH
} from "./Variables";

export const calculator = (
  fontSize: number,
  criteria:
    | typeof XD_DESKTOP_WIDTH
    | typeof XD_DESKTOP_HEIGHT
    | typeof XD_MOBILE_WIDTH,
  unit = "vw"
) => {
  const percentage = (fontSize / criteria) * 100;

  return percentage + unit;
};

export const vw = (fontSize: number) => {
  return calculator(fontSize, XD_DESKTOP_WIDTH);
};

export const vwMobile = (fontSize: number) => {
  return calculator(fontSize, XD_MOBILE_WIDTH);
};

export const pxToRem = (px: number): string => {
  return `${px / ROOT_FONT_SIZE}rem`;
};

// ~ 768 -> 줄어들고
// 768 ~ -> 늘어나고
