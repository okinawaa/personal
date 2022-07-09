import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox, FlexCenter } from "~/constants/Common.style";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";

export const Container = styled(FlexBox)`
  position: relative;
  width: ${pxToRem(750)};
  height: ${pxToRem(800)};
  border-radius: 10px;

  background-color: ${Colors.brown2b};

  ${media.tablet} {
    width: ${pxToRem(300)};
    height: ${pxToRem(382)};
  }
`;
export const CloseButtonWrapper = styled.button`
  position: absolute;
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  top: ${pxToRem(34)};
  right: ${pxToRem(33)};
  ${media.tablet} {
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
    top: ${pxToRem(17)};
    right: ${pxToRem(17)};
  }
`;

export const TitleWrapper = styled(FlexCenter)`
  padding: ${pxToRem(34)} 0;
  background-color: ${Colors.yellowff03};
  border-radius: 10px 10px 0 0;
  width: 100%;
`;

export const ContentsWrapper = styled(FlexBox)`
  padding: ${pxToRem(20)};
  overflow-y: scroll;
`;

export const CheckedListWrapper = styled.ul``;

export const CheckedListItem = styled.li``;

export const DescriptionWrapper = styled.p``;
