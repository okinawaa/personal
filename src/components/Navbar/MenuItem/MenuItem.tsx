import { Variants } from "framer-motion";
import * as Styled from "./MenuItem.style";

interface MenuItemProps {
  title: Common.menuType;
  scaleValue: number;
}

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  }
};

const MenuItem = ({ title, scaleValue }: MenuItemProps) => {
  return (
    <Styled.Container variants={variants}>
      <Styled.Typo fontSize={90 + scaleValue * 20}>{title}</Styled.Typo>
    </Styled.Container>
  );
};

export default MenuItem;
