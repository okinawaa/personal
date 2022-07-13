import styled from "styled-components";
import { pxToRem } from "~/constants/Size";
import { zIndex } from "~/constants/Variables";

export const Container = styled.button`
  position: fixed;
  top: ${pxToRem(38)};
  left: ${pxToRem(36)};
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  z-index: ${zIndex.indicator};
`;
