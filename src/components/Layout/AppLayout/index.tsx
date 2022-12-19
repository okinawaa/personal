import React, { PropsWithChildren } from "react";
import { Footer } from "~/components/Common";
import { SizedBox } from "~/constants";
import * as Styled from "./AppLayout.styles";
import { GlobalCSS } from "~/styles";
import "~/styles/font-face.css";
import AppLayoutProps from "./AppLayout.types";

const AppLayout = ({
  children,
  isFooter = true
}: PropsWithChildren<AppLayoutProps>) => {
  return (
    <Styled.Container _direction="column" selfAlignRowCenter>
      <GlobalCSS />
      {children}
      <SizedBox _height={40} moHeight={20} />

      {isFooter && <Footer />}
    </Styled.Container>
  );
};

export default AppLayout;
