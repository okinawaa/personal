import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox } from "~/constants/Common.style";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";

export const Container = styled(FlexBox)`
  width: ${pxToRem(850)};
  padding: ${pxToRem(100)} 0;

  ${media.tablet} {
    width: ${pxToRem(350)};
    padding: ${pxToRem(50)} ${pxToRem(10)};
  }
`;

export const SkillWrapper = styled(FlexBox)`
  ${media.tablet} {
    flex-direction: column;
  }
`;

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
