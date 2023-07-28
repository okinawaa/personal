import React, { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "gatsby";
import "~/styles/components/layout.scss";

const AppLayout = ({ children }: PropsWithChildren) => {
  const [ref, isScrollTop] = useInView({ initialInView: true });

  return (
    <>
      <div ref={ref} />
      <div className="layout-wrapper">
        <header className={!isScrollTop ? "scrolled" : undefined}>
          <Link className="link-to-home" to="/">
            okinawaa
          </Link>
          <a className="link-to-about" href="https://chanhyuk.com">
            RESUME
          </a>
          <a className="link-to-about" href="https://github.com/okinawaa">
            GITHUB
          </a>
        </header>
        <main>{children}</main>
        <footer>
          ©<a href="https://github.com/ChanhyukPark-Tech">Chanhyuk</a>, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default AppLayout;
