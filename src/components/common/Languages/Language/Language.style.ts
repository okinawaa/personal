import styled from "styled-components";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";
import { Body1 } from "~/constants/Typography";

export const LanguageText = styled(Body1)`
  ${media.tablet} {
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(28)};
  }
`;
