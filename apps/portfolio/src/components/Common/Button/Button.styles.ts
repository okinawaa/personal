import styled from "@emotion/styled";
import { Colors, FlexCenter, media, pxToRem } from "~/constants";
import type ButtonProps from "./Button.types";

export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${pxToRem(4)} ${pxToRem(8)};

  border: 1px solid transparent;
  border-radius: ${pxToRem(4)};

  background-color: ${Colors.grayF2};

  &:hover {
    background-color: ${Colors.grayF0};
  }

  ${media.tablet} {
    padding: ${pxToRem(2)} ${pxToRem(4)};
  }
`;
