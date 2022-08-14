import { useCycle, Variants } from "framer-motion";
import { pxToRem } from "~/constants/Size";
import MenuToggler from "~/components/Navbar/MenuToggler/";
import Menus from "~/components/Navbar/Menus";
import * as Styled from "./Navbar.style";

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const sidebarVariants: Variants = {
    open: {
      clipPath: `circle(${pxToRem(1000)} at ${pxToRem(50)} ${pxToRem(50)})`,
      transition: {
        duration: 0.4
      }
    },
    closed: {
      clipPath: `circle(${pxToRem(30)} at ${pxToRem(50)} ${pxToRem(50)})`,
      transition: {
        duration: 0.4,
        delay: 0.4
      }
    }
  };
  return (
    <Styled.Nav initial={false} animate={isOpen ? "open" : "closed"}>
      <Styled.BackGround className="background" variants={sidebarVariants} />
      <MenuToggler toggle={() => toggleOpen()} />
      <Menus />
    </Styled.Nav>
  );
};

export default Navbar;
