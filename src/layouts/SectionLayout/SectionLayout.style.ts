import styled from "styled-components";
import { FlexBox } from "~/constants/Common.style";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";

export const ContentsWrapper = styled(FlexBox)`
  margin-top: ${pxToRem(20)};
  margin-left: ${pxToRem(20)};

  ${media.tablet} {
    margin-top: ${pxToRem(4)};
    margin-left: ${pxToRem(20)};
  }
`;
