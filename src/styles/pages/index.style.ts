import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";

export const Container = styled(FlexBox)`
  background-color: ${Colors.black};
`;

export const ImageWrapper = styled.div`
  position: fixed;
`;

export const ContentWrapper = styled(FlexBox)`
  padding: ${pxToRem(180)} ${pxToRem(180)} ${pxToRem(180)} ${pxToRem(640)};
  height: ${pxToRem(6000)};
`;

export const MainContentWrapper = styled(FlexBox)`
  height: ${pxToRem(250)};
`;

export const SubContentWrapper = styled(FlexBox)`
  height: ${pxToRem(250)};
`;
