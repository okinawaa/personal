import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";

export const Container = styled(FlexBox)`
  background-color: ${Colors.black};
`;

export const ImageWrapper = styled.div``;

export const ContentWrapper = styled(FlexBox)`
  padding: ${pxToRem(180)};
  flex: 1;
`;
