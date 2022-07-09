import styled from "styled-components";
import Colors from "~/constants/Colors";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";
import { zIndex } from "~/constants/Variables";

export const Container = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zIndex.modal};
  display: ${({ show }) => (show ? "flex" : "none")};
  ${({ show }) =>
    show &&
    `justify-content: center;
  align-items: center;`}

  background-color: ${Colors.dimColor(0.4)};

  @keyframes PModalShow {
    0% {
      opacity: 0;
      transform: scale(1.2);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  animation: PModalShow 0.1s ease-in-out;
`;

export const CloseButtonWrapper = styled.button`
  position: absolute;
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  top: ${pxToRem(33)};
  right: ${pxToRem(33)};
  ${media.tablet} {
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
    top: ${pxToRem(17)};
    right: ${pxToRem(17)};
  }
`;
