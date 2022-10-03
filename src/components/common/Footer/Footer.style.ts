import styled from "styled-components";
import { FlexBox } from "~/constants/Common.style";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";

export const Container = styled(FlexBox)`
  width: ${pxToRem(850)};
  margin: 0 auto;
  padding-bottom: ${pxToRem(100)};
  ${media.tablet} {
    width: ${pxToRem(350)};
    justify-content: center;
  }
`;
