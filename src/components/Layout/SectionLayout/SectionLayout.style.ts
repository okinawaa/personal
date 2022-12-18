import styled from "@emotion/styled";
import { FlexBox, media, pxToRem } from "~/constants";

export const ContentsWrapper = styled(FlexBox)`
  margin-top: ${pxToRem(20)};
  margin-left: ${pxToRem(20)};

  ${media.tablet} {
    margin-top: ${pxToRem(4)};
    margin-left: ${pxToRem(20)};
  }
`;
