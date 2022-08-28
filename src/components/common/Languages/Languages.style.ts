import styled from "styled-components";
import { FlexBox } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";

export const Container = styled(FlexBox)`
  right: ${pxToRem(50)};
  bottom: ${pxToRem(50)};
`;
