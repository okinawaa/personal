import { motion } from "framer-motion";
import styled from "styled-components";
import Colors from "~/constants/Colors";
import { zIndex } from "~/constants/Variables";

export const BackGround = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  background-color: ${Colors.redf9};
  z-index: ${zIndex.indicator};
  opacity: 0.9;
`;

export const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndex.indicator};
`;
