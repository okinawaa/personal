import styled from "styled-components";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";

interface NButtonPropsType {
  width: number;
  height: number;
  filled: boolean;
  bgColor: string;
  borderRadius?: number;
  relative?: boolean;
  shadow?: string;
  moWidth?: number;
  moHeight?: number;
}

export const Container = styled.button<NButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => pxToRem(width)};
  height: ${({ height }) => pxToRem(height)};

  background-color: ${({ filled, bgColor }) =>
    filled ? bgColor : "transparent"};

  border: 1px solid
    ${({ filled, bgColor }) => (filled ? "transparent" : bgColor)};

  cursor: pointer;

  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px;`}
  ${({ relative }) => relative && "position: relative;"}
  ${({ shadow }) => shadow && `box-shadow: ${shadow};`};

  ${media.tablet} {
    ${({ moWidth }) => moWidth && `width: ${pxToRem(moWidth)};`}
    ${({ moHeight }) => moHeight && `height: ${pxToRem(moHeight)};`}
  }
`;
