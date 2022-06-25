import {
  ROOT_FONT_SIZE,
  XD_DESKTOP_HEIGHT,
  XD_DESKTOP_WIDTH,
  XD_MOBILE_WIDTH
} from "./Variables";

export const calculator = (
  width: number,
  criteria:
    | typeof XD_DESKTOP_WIDTH
    | typeof XD_DESKTOP_HEIGHT
    | typeof XD_MOBILE_WIDTH
) => {
  const percentage = (width / criteria) * 100;

  return `${percentage}vw`;
};

export const vw = (width: number) => {
  return calculator(width, XD_DESKTOP_WIDTH);
};

export const vwMobile = (width: number) => {
  return calculator(width, XD_MOBILE_WIDTH);
};

export const pxToRem = (px: number): string => {
  return `${px / ROOT_FONT_SIZE}rem`;
};
