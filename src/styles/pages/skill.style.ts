import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox, FlexCenter } from "~/constants/Common.style";
import { pxToRem } from "~/constants/Size";

export const Container = styled.main`
  background-color: ${Colors.brown2b};
  width: 100%;
  height: 500vh;
`;

export const ContentsWrapper = styled(FlexBox)`
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 50vh;
  padding-left: ${pxToRem(200)};
  height: ${pxToRem(500)};

  will-change: transform;
`;

export const TitleContent = styled(FlexBox)``;

export const SkillDomainWrapper = styled(FlexCenter)``;
