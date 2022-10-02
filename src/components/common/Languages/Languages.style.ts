import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox } from "~/constants/Common.style";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";

export const Container = styled(FlexBox)`
  right: ${pxToRem(50)};
  bottom: ${pxToRem(50)};

  width: ${pxToRem(200)};
  ${media.tablet} {
    right: ${pxToRem(20)};
    bottom: ${pxToRem(20)};

    width: ${pxToRem(180)};

    padding: ${pxToRem(4)} ${pxToRem(8)};

    background-color: ${Colors.green00015};
    border-radius: ${pxToRem(10)};
  }
`;
