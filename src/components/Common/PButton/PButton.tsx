import React from "react";
import * as Styled from "./PButton.style";

interface NButtonPropsType {
  children: React.ReactElement;
  width: number;
  height: number;
  filled: boolean;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bgColor: string;
  title: string;
  disable?: boolean;
  borderRadius?: number;
  relative?: boolean;
  shadow?: string;
  moWidth?: number;
  moHeight?: number;
}
const PButton = ({
  children,
  width,
  height,
  filled,
  onClickHandler,
  bgColor,
  title,
  disable,
  borderRadius,
  relative,
  shadow,
  moWidth,
  moHeight
}: NButtonPropsType) => {
  return (
    <Styled.Container
      width={width}
      height={height}
      filled={filled}
      bgColor={bgColor}
      onClick={e => {
        onClickHandler(e);
      }}
      title={title}
      disabled={disable}
      borderRadius={borderRadius}
      relative={relative}
      shadow={shadow}
      moWidth={moWidth}
      moHeight={moHeight}
    >
      {children}
    </Styled.Container>
  );
};

export default PButton;
