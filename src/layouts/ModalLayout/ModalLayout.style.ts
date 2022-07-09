import styled from "styled-components";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";

export const Container = styled.div`
  position: relative;
  width: ${pxToRem(650)};
  height: ${pxToRem(700)};
  border-radius: 10px;

  ${media.tablet} {
    width: ${pxToRem(300)};
    height: ${pxToRem(382)};
  }
`;
export const CloseButtonWrapper = styled.button`
  position: absolute;
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  top: ${pxToRem(33)};
  right: ${pxToRem(33)};
  ${media.tablet} {
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
    top: ${pxToRem(17)};
    right: ${pxToRem(17)};
  }
`;
