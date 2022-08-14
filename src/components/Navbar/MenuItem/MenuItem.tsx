import { Variants } from "framer-motion";
import Link from "next/link";
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
    <Styled.Container
      variants={variants}
      whileHover={{ scale: 1.1 }}
      title={`${title} 로 이동하기`}
    >
      <Link href={title}>
        <a>
          <Styled.Typo fontSize={90 + scaleValue * 20}>{title}</Styled.Typo>
        </a>
      </Link>
    </Styled.Container>
  );
};

export default MenuItem;
