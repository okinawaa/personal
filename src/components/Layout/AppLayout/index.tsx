import React, { PropsWithChildren } from "react";
import { Footer } from "~/components/Common";
import { framerMocker, SizedBox } from "~/constants";
import * as Styled from "./AppLayout.styles";
import { GlobalCSS } from "~/styles";
import { AnimatePresence, motion } from "framer-motion";
import "~/styles/font-face.css";
import AppLayoutProps from "./AppLayout.types";
import { defaultFadeInVariants } from "~/constants";

const AppLayout = ({
  children,
  isFooter = true
}: PropsWithChildren<AppLayoutProps>) => {
  return (
    <Styled.Container _direction="column" selfAlignRowCenter>
      <GlobalCSS />
      <motion.main variants={defaultFadeInVariants} {...framerMocker}>
        {children}
      </motion.main>

      <SizedBox _height={40} moHeight={20} />

      {isFooter && <Footer />}
    </Styled.Container>
  );
};

export default AppLayout;
