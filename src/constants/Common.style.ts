import styled from "styled-components";
import Colors from "./Colors";
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

export const SizedCircle = styled(SizedBox)<{
  background?: string;
  position?: Common.positionType;
  offset?: Common.offsetType;
}>`
  position: ${({ position }) => position || "static"};
  ${({ offset }) =>
    offset?.top !== undefined && `top : ${pxToRem(offset.top)};`}
  ${({ offset }) =>
    offset?.right !== undefined && `right : ${pxToRem(offset.right)};`}
  ${({ offset }) =>
    offset?.bottom !== undefined && `bottom : ${pxToRem(offset.bottom)};`}
  ${({ offset }) =>
    offset?.left !== undefined && `left : ${pxToRem(offset.left)};`}

  background: ${({ background }) =>
    background && background.length > 0 ? background : "transparent"};

  border-radius: 50%;
`;

export const FlexBox = styled.div<{
  direction?: string;
  alignItems?: string;
  gap?: number;
  bgColor?: string;
  position?: Common.positionType;
  moGap?: number;
  offset?: Common.offsetType;
}>`
  position: ${({ position }) => position || "static"};

  ${({ offset }) =>
    offset?.top !== undefined && `top : ${pxToRem(offset.top)};`}
  ${({ offset }) =>
    offset?.right !== undefined && `right : ${pxToRem(offset.right)};`}
  ${({ offset }) =>
    offset?.bottom !== undefined && `bottom : ${pxToRem(offset.bottom)};`}
  ${({ offset }) =>
    offset?.left !== undefined && `left : ${pxToRem(offset.left)};`}


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

export const VerticalSeperateLine = styled.div<{
  height: number;
  color?: string;
}>`
  display: inline-block;
  width: 1px;
  height: ${({ height }) => pxToRem(height)};
  background-color: ${Colors.redf9};
`;

export const HorizontalSeperateLine = styled.div<{
  color?: string;
  opacity?: number;
}>`
  width: 100%;
  height: 1px;
  background-color: ${({ color }) => color || Colors.redf9};
  opacity: ${({ opacity }) => opacity || 1};
`;
