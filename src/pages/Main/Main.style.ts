import styled from "styled-components";
import { FlexBox } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";

export const Container = styled(FlexBox)`
  padding-top: ${pxToRem(150)};
`;
