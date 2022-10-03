import styled, { CSSProperties } from "styled-components";
import { media } from "./Media";
import { pxToRem } from "./Size";

export const SizedBox = styled.div<{
  _height?: number;
  _width?: number;
  moWidth?: number;
  moHeight?: number;
}>`
  ${({ _height }) => _height && `height: ${pxToRem(_height)};`}
  ${({ _width }) => _width && `width: ${pxToRem(_width)};`}


  ${media.tablet} {
    ${({ moWidth }) => moWidth && `width: ${pxToRem(moWidth)};`}
    ${({ moHeight }) => moHeight && `height: ${pxToRem(moHeight)};`}
  }
`;

export const FlexBox = styled.div<{
  _direction?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  gap?: number;
  isVh?: boolean;
  bgColor?: string;
  position?: CSSProperties["position"];
  moGap?: number;
  shadow?: {
    value: string;
    borderRadius: number;
  };
  selfAlignRowCenter?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
}>`
  position: ${({ position }) => position || "static"};
  display: flex;

  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  ${({ gap }) => gap !== undefined && `gap: ${pxToRem(gap)};`}

  ${({ selfAlignRowCenter }) => selfAlignRowCenter && "margin: 0 auto;"}
  ${({ _direction }) => _direction && `flex-direction: ${_direction};`}
  

  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  ${({ fullHeight }) => fullHeight && "height: 100%;"}

  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}

  ${media.tablet} {
    ${({ moGap }) => moGap !== undefined && `gap: ${pxToRem(moGap)};`}
  }
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img<{
  _width?: number;
  _height?: number;
  moWidth?: number;
  moHeight?: number;
}>`
  vertical-align: top;
  width: ${({ _width }) => (_width ? pxToRem(_width) : "auto")};
  height: ${({ _height }) => (_height ? pxToRem(_height) : "auto")};

  ${media.tablet} {
    ${({ moWidth }) => moWidth && `width : ${pxToRem(moWidth)};`}
    ${({ moHeight }) => moHeight && `height : ${pxToRem(moHeight)};`}
  }
`;
