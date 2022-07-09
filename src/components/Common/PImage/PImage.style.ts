import styled from "styled-components";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";

export const Container = styled.div<{
  width?: number;
  height?: number;
  center?: boolean;
  moWidth?: number | string;
  moHeight?: number;
  scale?: number;
  fullWidth?: boolean;
  position?: {
    type: "absolute" | "fixed";
    offset: {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };
  };
  zIndex?: number;
  borderRadius?: number;
}>`
  /* 이 요소가 있어야 액자 형식으로 100% 채우는 게 가능합니다. */
  position: ${({ position }) => (position ? position.type : "relative")};
  width: ${({ width, fullWidth }) => {
    if (fullWidth) {
      return "100%";
    }
    if (width) {
      return pxToRem(width);
    }
    return "auto";
  }};

  height: ${({ height }) => (height ? pxToRem(height) : "auto")};
  ${({ center }) => center && `margin: 0 auto;`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ borderRadius }) =>
    borderRadius && `border-radius: ${pxToRem(borderRadius)}; overflow:hidden;`}

  ${({ position }) =>
    position?.offset.top && `top : ${pxToRem(position.offset.top)};`}
  ${({ position }) =>
    position?.offset.right && `right : ${pxToRem(position.offset.right)};`}
  ${({ position }) =>
    position?.offset.bottom && `bottom : ${pxToRem(position.offset.bottom)};`}
  ${({ position }) =>
    position?.offset.left && `left : ${pxToRem(position.offset.left)};`}


  /* 태블릿에서 크기가 다른 경우 - 크기를 맞춰주기 위해 scale value를 넣어주었습니다. */
  ${media.tablet} {
    ${({ moWidth, fullWidth }) => {
      if (moWidth) {
        if (fullWidth) {
          return "width: 100%;";
        }
        if (typeof moWidth === "string") {
          return `width: ${moWidth};`;
        }
        return `width: ${pxToRem(moWidth)};`;
      }
      return null;
    }}

    ${({ moHeight }) => moHeight && `height: ${pxToRem(moHeight)};`}
  }
`;

export const Shadow = styled.div<{
  shadow: {
    value: string;
    borderRadius: number;
  };
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${({ shadow }) => pxToRem(shadow.borderRadius)};
  box-shadow: ${({ shadow }) => shadow.value};
`;
