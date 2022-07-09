import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";

export const Container = styled.main`
  background-color: ${Colors.brown2b};
  width: 100%;
  height: 500vh;
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

export const CategoryIndicator = styled.div`
  position: fixed;
  top: ${pxToRem(100)};
  left: 50vw;
  transform: translate3d(-50%, 0, 0);
`;
