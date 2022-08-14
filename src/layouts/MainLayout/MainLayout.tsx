import React from "react";
import PModal from "~/components/Common/PModal";
import Navbar from "~/components/Common/Navbar/";
import { useAppSelector } from "~/store/hooks";
import { GlobalStyle } from "~/styles/Global.style";
import * as Styled from "./MainLayout.style";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { showModal, modalChildren } = useAppSelector(({ root }) => root);

  return (
    <>
      <Styled.GrainBackGround />
      <GlobalStyle />
      <Navbar />
      {props.children}
      {showModal && <PModal>{modalChildren}</PModal>}
    </>
  );
};

export default MainLayout;
