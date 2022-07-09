import styled from "styled-components";
import { FlexBox } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";

export const Container = styled(FlexBox)`
  padding: 0 ${pxToRem(100)};
`;

export const CategoryWrapper = styled.div`
  position: absolute;
  top: ${pxToRem(-200)};
  left: 0;
`;
