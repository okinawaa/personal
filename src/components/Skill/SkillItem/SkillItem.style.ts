import styled from "styled-components";
import { FlexCenter } from "~/constants/Common.style";

export const Container = styled(FlexCenter).attrs({
  as: "button"
})`
  &:hover {
    transform: scale(1.1) !important;
  }
`;
