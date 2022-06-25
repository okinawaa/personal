import styled from "styled-components";
import Colors from "./Colors";
import { pxToRem } from "./Size";

export const Text = styled.span<{
  color?: string;
  lineHeight?: number;
  size?: number;
  whiteSpace?: "pre" | "pre-line" | "pre-wrap";
  alignCenter?: boolean;
  ellipsis?: boolean;
  maxWidth?: number;
  weight?: number;
  underline?: {
    color: string;
    height: number;
  };
}>`
  color: ${({ color }) => color || Colors.grayf2};
  display: inline-block;
  ${({ lineHeight }) => lineHeight && `line-height: ${pxToRem(lineHeight)};`}
  ${({ size }) => size && `font-size: ${pxToRem(size)};`};
  ${({ weight }) => weight && `font-weight: ${weight};`};
  ${({ alignCenter }) => alignCenter && "text-align: center;"}
  ${({ ellipsis, maxWidth }) =>
    ellipsis &&
    maxWidth &&
    `text-overflow: ellipsis; overflow: hidden; max-width: ${pxToRem(
      maxWidth
    )}; white-space: nowrap;`}
    ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`};

  ${({ underline }) =>
    underline &&
    `
    position: relative;
    z-index:1;
    &::before {
      z-index:-1;
      content: "";
      width: 100%;
      height: ${pxToRem(underline.height)};
      position: absolute;
      bottom: 0;
      background: ${underline.color};
    }
    `}
`;

/**
 * 캡션 1
 * @size 10px
 * @height 20px;
 * @weight 400
 */
export const Caption1 = styled(Text)`
  font-size: ${pxToRem(10)};
  line-height: ${pxToRem(20)};
`;

/**
 * 바디 4
 * @size 12px
 * @height 22px;
 * @weight 400
 */
export const Body4 = styled(Text)`
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(22)};
`;

/**
 * 바디 3
 * @size 14px
 * @height 24px;
 * @weight 400
 */
export const Body3 = styled(Text)`
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(24)};
`;

/**
 * 바디 2
 * @size 16px
 * @height 26px;
 * @weight 400
 */
export const Body2 = styled(Text)`
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(26)};
`;

/**
 * 바디 1
 * @size 18px
 * @height 28px;
 * @weight 400
 */
export const Body1 = styled(Text)`
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(28)};
`;

// Subtitle 3 ~ 1

/**
 * 서브타이틀 3
 * @size 20px
 * @height 30px;
 * @weight 400
 */
export const Subtitle3 = styled(Text)`
  font-size: ${pxToRem(20)};
  line-height: ${pxToRem(30)};
`;

/**
 * 서브타이틀 2
 * @size 22px
 * @height 32px;
 * @weight 400
 */
export const Subtitle2 = styled(Text)`
  font-size: ${pxToRem(22)};
  line-height: ${pxToRem(32)};
`;

/**
 * 서브타이틀 1
 * @size 24px
 * @height 34px;
 * @weight 400
 */
export const Subtitle1 = styled(Text)`
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(34)};
`;

// 헤더 4 ~ 1

/**
 * 헤더 4
 * @size 28px
 * @height 38px;
 * @weight 400
 */
export const Header4 = styled(Text)`
  font-size: ${pxToRem(28)};
  line-height: ${pxToRem(38)};
`;

/**
 * 헤더 3
 * @size 34px
 * @height 44px;
 * @weight 400
 */
export const Header3 = styled(Text)`
  font-size: ${pxToRem(34)};
  line-height: ${pxToRem(44)};
`;

/**
 * 헤더 2
 * @size 48px
 * @height 58px;
 * @weight 400
 */
export const Header2 = styled(Text)`
  font-size: ${pxToRem(48)};
  line-height: ${pxToRem(58)};
`;

/**
 * 헤더 1
 * @size 60px
 * @height 70px;
 * @weight 400
 */
export const Header1 = styled(Text)`
  font-size: ${pxToRem(60)};
  line-height: ${pxToRem(70)};
`;

// 타이틀 2 ~ 1

/**
 * 타이틀 2
 * @size 72px
 * @height 82px;
 * @weight 400
 */
export const Title2 = styled(Text)`
  font-size: ${pxToRem(72)};
  line-height: ${pxToRem(82)};
`;

/**
 * 타이틀 1
 * @size 84px
 * @height 106px;
 * @weight 400
 */
export const Title1 = styled(Text)`
  font-size: ${pxToRem(84)};
  line-height: ${pxToRem(106)};
`;
