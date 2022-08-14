import { motion } from "framer-motion";
import * as Styled from "./Menus.style";
import MenuItem from "../MenuItem";
import menus from "~/constants/data/menus";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Menus = () => {
  return (
    <Styled.Container
      variants={variants}
      as={motion.ul}
      position="fixed"
      direction="column"
      gap={50}
    >
      {menus.map((menu, index) => (
        <MenuItem title={menu} scaleValue={index} />
      ))}
    </Styled.Container>
  );
};

export default Menus;
