import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";

export const Container = styled(FlexBox)`
  width: ${pxToRem(850)};
  padding: ${pxToRem(150)} 0;
`;

export const ItemWrapper = styled(FlexBox)`
  position: relative;

  &::before {
    content: "-";

    color: ${Colors.green00};
    position: absolute;
    left: -${pxToRem(15)};
    top: 0;
  }
`;
