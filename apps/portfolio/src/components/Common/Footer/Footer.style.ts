import styled from "@emotion/styled";
import { FlexBox, media, pxToRem } from "~/constants";

export const Container = styled(FlexBox)`
  width: ${pxToRem(850)};
  margin: 0 auto;
  padding-bottom: ${pxToRem(100)};
  ${media.tablet} {
    width: ${pxToRem(350)};
    justify-content: center;
  }
`;
