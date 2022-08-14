import styled from "styled-components";
import { FlexCenter } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";
import { zIndex } from "~/constants/Variables";

export const Container = styled(FlexCenter)`
  transform: rotate(-45deg);

  top: ${pxToRem(120)};
  left: ${pxToRem(260)};
  width: ${pxToRem(260)};
  z-index: ${zIndex.indicator};
`;
