import styled from "@emotion/styled";
import { FlexBox, media, pxToRem } from "~/constants";

export const Container = styled(FlexBox)`
  width: ${pxToRem(850)};
  padding: ${pxToRem(100)} 0;

  ${media.tablet} {
    width: ${pxToRem(350)};
    padding: ${pxToRem(50)} ${pxToRem(10)};
  }
`;
