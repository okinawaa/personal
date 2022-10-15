import styled, { CSSProperties } from "styled-components";
import Colors from "./Colors";
import { media } from "./Media";
import { pxToRem } from "./Size";
import { LIGHT_WEIGHT } from "./Variables";

export const Text = styled.span<{
  _color?: string;
  lineHeight?: number;
  _size?: number;
  whiteSpace?: CSSProperties["whiteSpace"];
  alignCenter?: boolean;
  ellipsis?: boolean;
  maxWidth?: number;
  weight?: number;
  letterSpacing?: number;
  moFontSize?: number;
  moLineHeight?: number;
}>`
  color: ${({ _color }) => _color || Colors.black};
  display: inline-block;
  font-family: "NotoSansKR";

  letter-spacing: -${({ letterSpacing }) => pxToRem(letterSpacing || 0.5)};
  ${({ lineHeight }) =>
    lineHeight && `line-height: ${pxToRem(lineHeight)} !important;`}
  ${({ _size }) => _size && `font-size: ${pxToRem(_size)};`};
  ${({ weight }) => weight && `font-weight: ${weight} !important;`};
  ${({ alignCenter }) => alignCenter && "text-align: center;"}
  ${({ ellipsis, maxWidth }) =>
    ellipsis &&
    maxWidth &&
    `text-overflow: ellipsis; overflow: hidden; max-width: ${pxToRem(
      maxWidth
    )}; white-space: nowrap;`}
    ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`};

  ${media.tablet} {
    ${({ moFontSize }) =>
      moFontSize && `font-size: ${pxToRem(moFontSize)} !important;`}
    ${({ moLineHeight }) =>
      moLineHeight && `line-height: ${pxToRem(moLineHeight)} !important;`}
  }
`;

// Caption 1 ~ 4

/**
 * 캡션 4 Noto Sans!!
 * @size 8px
 * @height 11px;
 * @bold 300
 */
export const Caption4 = styled(Text)`
  font-family: "NotoSansKR";
  font-size: ${pxToRem(8)};
  font-weight: ${LIGHT_WEIGHT};
  line-height: ${pxToRem(11)};
`;

/**
 * 캡션 3
 * @size 10px
 * @height 12px;
 */
export const Caption3 = styled(Text)`
  font-size: ${pxToRem(10)};
  line-height: ${pxToRem(12)};
`;

/**
 * 캡션 2
 * @size 12px
 * @height 22px;
 */
export const Caption2 = styled(Text)`
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(22)};
`;

/**
 * 캡션 1
 * @size 14px
 * @height 24px;
 */
export const Caption1 = styled(Text)`
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(24)};
`;

// Body 1 ~ 4
/**
 * 바디 4
 * @size 16px
 * @height 22px;
 */
export const Body4 = styled(Text)`
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(22)};
`;

/**
 * 바디 3
 * @size 18px
 * @height 28px;
 */
export const Body3 = styled(Text)`
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(28)};
`;

/**
 * 바디 2
 * @size 20px
 * @height 30px;
 */
export const Body2 = styled(Text)`
  font-size: ${pxToRem(20)};
  line-height: ${pxToRem(30)};
`;

/**
 * 바디 1
 * @size 24px
 * @height 34px;
 */
export const Body1 = styled(Text)`
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(34)};
`;

// Title 1 ~ 2

/**
 * 타이틀 2
 * @size 28px
 * @height 38px;
 */
export const Title2 = styled(Text)`
  font-size: ${pxToRem(28)};
  line-height: ${pxToRem(38)};
`;

/**
 * 타이틀 1
 * @size 32px
 * @height 42px;
 */
export const Title1 = styled(Text)`
  font-size: ${pxToRem(32)};
  line-height: ${pxToRem(42)};
`;

// Header 1 ~ 2

/**
 * 헤더 2
 * @size 40px
 * @height 50px;
 */
export const Header2 = styled(Text)`
  font-size: ${pxToRem(40)};
  line-height: ${pxToRem(50)};
`;

/**
 * 헤더 1
 * @size 48px
 * @height 58px;
 */
export const Header1 = styled(Text)`
  font-size: ${pxToRem(48)};
  line-height: ${pxToRem(58)};
`;
