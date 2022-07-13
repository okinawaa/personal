import { useCycle, Variants } from "framer-motion";
import React from "react";
import PModal from "~/components/Common/PModal/PModal";
import MenuToggler from "~/components/Navbar/MenuToggler/MenuToggler";
import Navbar from "~/components/Navbar/Navbar/Navbar";
import { pxToRem } from "~/constants/Size";
import { useAppSelector } from "~/store/hooks";
import { GlobalStyle } from "~/styles/Global.style";
import * as Styled from "./MainLayout.style";

interface MainLayoutProps {
  children: React.ReactNode;
}

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
      delay: 0
    }
  }
};
const MainLayout = (props: MainLayoutProps) => {
  const { showModal, modalChildren } = useAppSelector(({ root }) => root);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <Styled.GrainBackGround />
      <GlobalStyle />
      <Styled.Nav initial={false} animate={isOpen ? "open" : "closed"}>
        <Styled.BackGround className="background" variants={sidebarVariants} />
        <MenuToggler toggle={() => toggleOpen()} />
        <Navbar />
      </Styled.Nav>
      {props.children}
      {showModal && <PModal>{modalChildren}</PModal>}
    </>
  );
};

export default MainLayout;
