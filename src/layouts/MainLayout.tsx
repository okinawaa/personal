import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "~/styles/Global.style";

interface MainLayoutProps {
  children: React.ReactNode;
}

const GrainBackGround = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(https://assets.website-files.com/6245b8598294a183abe645d8/6251ae2f83aa8cb43c3339a5_5c06f51d6e75c933fe05c728_giphy.gif);
  opacity: 0.05;
`;

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <GrainBackGround />
      <GlobalStyle />
      {props.children}
    </>
  );
};

export default MainLayout;
