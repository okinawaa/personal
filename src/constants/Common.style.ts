import styled from "styled-components";
import { media } from "./Media";
import { pxToRem } from "./Size";

export const SizedBox = styled.div<{
  height?: number;
  width?: number;
  moWidth?: number;
  moHeight?: number;
}>`
  ${({ height }) => height && `height: ${pxToRem(height)};`}
  ${({ width }) => width && `width: ${pxToRem(width)};`}


  ${media.tablet} {
    ${({ moWidth }) => moWidth && `width: ${pxToRem(moWidth)};`}
    ${({ moHeight }) => moHeight && `height: ${pxToRem(moHeight)};`}
  }
`;

export const FlexBox = styled.div<{
  direction?: string;
  alignItems?: string;
  gap?: number;
  bgColor?: string;
  position?: "relative" | "absolute" | "fixed";
  moGap?: number;
}>`
  position: ${({ position }) => position || "static"};
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  ${({ gap }) => gap && `gap: ${pxToRem(gap)};`}

  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

// 대체텍스트
export const BlindText = styled.h2`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  margin: -1px;
  width: 1px;
  height: 1px;
`;
