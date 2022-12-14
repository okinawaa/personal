import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";

export const ItemWrapper = styled(FlexBox).attrs({
  as: "li"
})`
  position: relative;
  flex-direction: column;

  &::before {
    content: "-";

    color: ${Colors.green00};
    position: absolute;
    left: -${pxToRem(15)};
    top: 0;
  }
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 0;
  background-color: ${Colors.grayA8};
  height: 1px;
`;
