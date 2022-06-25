import React from "react";
import { GlobalStyle } from "~/styles/Global.style";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  );
};

export default MainLayout;
