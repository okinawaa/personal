import { motion } from "framer-motion";
import * as Styled from "./MenuToggler.style";

interface PathProps {
  openPath: string;
  closedPath: string;
}

const Path = ({ openPath, closedPath }: PathProps) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      variants={{
        open: { d: openPath, transition: { duration: 0.3 } },
        closed: { d: closedPath, transition: { duration: 0.3 } }
      }}
    />
  );
};

interface MenuTogglerProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  toggle: Function;
}

const MenuToggler = ({ toggle }: MenuTogglerProps) => {
  return (
    <Styled.Container
      type="button"
      onClick={() => {
        toggle();
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 23 23">
        <Path openPath="M 3 16.5 L 17 2.5" closedPath="M 2 2.5 L 20 2.5" />
        <Path closedPath="M 2 9.423 L 20 9.423" openPath="" />
        <Path
          closedPath="M 2 16.346 L 20 16.346"
          openPath="M 3 2.5 L 17 16.346"
        />
      </svg>
    </Styled.Container>
  );
};

export default MenuToggler;
