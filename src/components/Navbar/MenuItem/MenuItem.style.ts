import { motion } from "framer-motion";
import styled from "styled-components";
import { pxToRem } from "~/constants/Size";
import { Title3 } from "~/constants/Typography";

export const Container = styled(motion.li)``;

export const Typo = styled(Title3)<{ fontSize: number }>`
  font-size: ${({ fontSize }) => pxToRem(fontSize)};
`;
