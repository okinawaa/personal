import React, { PropsWithChildren } from "react";
import { Footer } from "~/components/Common";
import { SizedBox } from "~/constants";
import * as Styled from "./AppLayout.styles";
import { GlobalCSS } from "~/styles";
import "~/styles/font-face.css";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Styled.Container _direction="column" selfAlignRowCenter>
      <GlobalCSS/>
      {children}
      <SizedBox _height={40} moHeight={20} />

      <Footer />
    </Styled.Container>
  );
};

export default AppLayout;
