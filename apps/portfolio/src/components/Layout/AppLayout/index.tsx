import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { Footer } from "~/components/Common";
import { defaultFadeInVariants, framerMocker, SizedBox } from "~/constants";
import { GlobalCSS } from "~/styles";
import "~/styles/font-face.css";
import * as Styled from "./AppLayout.styles";
import AppLayoutProps from "./AppLayout.types";

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
