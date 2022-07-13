import { motion } from "framer-motion";
import styled from "styled-components";
import Colors from "~/constants/Colors";
import { zIndex } from "~/constants/Variables";

export const GrainBackGround = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(https://assets.website-files.com/6245b8598294a183abe645d8/6251ae2f83aa8cb43c3339a5_5c06f51d6e75c933fe05c728_giphy.gif);
  opacity: 0.05;
`;

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
