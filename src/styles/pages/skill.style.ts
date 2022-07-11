import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";

export const Container = styled.main<{ totalWidth: number }>`
  background-color: ${Colors.brown2b};
  width: 100%;
  height: calc(${({ totalWidth }) => pxToRem(totalWidth)} + 50vh);
`;

export const ContentsWrapper = styled(FlexBox)`
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 50vh;
  padding-left: ${pxToRem(200)};
  height: ${pxToRem(500)};

  will-change: transform;
`;

export const ArrowWrapper = styled.button`
  width: ${pxToRem(200)};
  height: ${pxToRem(200)};
  transform: rotate(270deg);
  transition: transform 0.2s ease-in-out;
  will-change: transform;

  &:hover {
    transform: scale(1.05) rotate(270deg) translate3d(0, -${pxToRem(30)}, 0);
  }

  path {
    fill: ${Colors.yellowff03} !important;
  }
`;
